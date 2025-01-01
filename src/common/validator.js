import { isUndefOrStrEmpty } from "./common";
import { validation } from "./validation"

class Validator {
    prepare = {};
    isValid = true;
    msgErrors = [];

    constructor(context, props) {
        if (typeof (context) !== 'object')
            return;

        for (const [keys, component] of Object.entries(context)) {

            var property = keys,
                methods = {};

            for (const [key, method] of Object.entries(component["methods"])) {
                methods[key] = this.HandlePrepareMethod(key, method);
            }

            this.prepare[property] =
            {
                name: component["name"],
                element: component["element"],
                methods: methods,
                messages: component["messages"]
            }
        }

        return this;
    }

    FilterElement(filter) {
        if (isUndefOrStrEmpty(filter) || typeof (filter) != "string" || (isUndefOrStrEmpty(this.prepare[filter]) || typeof (this.prepare[filter]) != "object"))
            return this;

        var element = this.prepare[filter].element;
        if (!isUndefOrStrEmpty(element)) {
            var bubble = element.parentElement.getElementsByClassName("bubble")[0];
            if (bubble) {
                bubble.innerText = null;
                bubble.style.display = "none";
            }
            element.classList.remove("has-error")
        }

        delete this.prepare[filter];

        return this;
    }

    FilterMethod() {
        return this;
    }

    HandlePrepareMethod(key, method) {
        let methods = {};

        switch (typeof (method)) {
            case 'boolean':
                methods = validation[key];
                break;
            case 'function':
                methods = method;
                break;
            default:
                break;
        }

        return methods;
    }

    CreateTask(taskId, val, method) {

        return async function () {
            if (typeof (method) != "function") {
                return await Promise.resolve(true);
            }
            return await Promise.resolve(method(null, val))
                .then((res) => {
                    return {
                        taskId: taskId,
                        value: res
                    }
                });
        };
    }

    CreateMessage(_name, _msg) {
        let name = "",
            msg = "";

        if (!isUndefOrStrEmpty(_name)) {
            name = _name
        }

        if (!isUndefOrStrEmpty(_msg)) {
            msg = _msg
        }

        this.msgErrors.push(name + " : " + msg)

        return name + " : " + msg;
    }

    ResetMessage() {
        this.msgErrors = [];
    }

    ResetElements() {
        this.isValid = true;
        for (const [key, props] of Object.entries(this.prepare)) {
            for (const [key, prop] of Object.entries(props)) {
                var element = props.element;

                var bubble = element.parentElement.getElementsByClassName("bubble")[0];
                if (bubble) {
                    bubble.innerText = null;
                    bubble.style.display = "none";
                }
                element.classList.remove("has-error")
            }
        }
    }

    ValidAction(context) {
        //console.log("ValidAction");
        var bubble = context.element.parentElement.getElementsByClassName("bubble")[0];
        if (bubble) {
            bubble.innerText = null;
            bubble.style.display = "none";
        }
        context.element.classList.remove("has-error")
        context.methods.forEach((val, index) => {
            if (val.value) { }
            else {
                context.element.classList.add("has-error")
                var msg = this.CreateMessage(context.name, context.messages[val.taskId]);
                if (bubble) {
                    bubble.innerText = msg;
                    bubble.style.display = "contents"
                }
                this.isValid = false;
            }
        })

    }

    async Excute() {

        this.ResetMessage();
        this.ResetElements();

        if (!this.prepare)
            return Promise.reject();

        let context = {};

        Object.assign(context, this.prepare);

        for (const [prop, component] of Object.entries(context)) {
            var val = component.element.value;
            if (val === undefined)
                val = null;

            let tasks = [];

            for (const [id, method] of Object.entries(component.methods)) {
                //console.log(method)
                tasks.push(this.CreateTask(id, val, method))
            }

            await Promise.all(tasks.map(task => {
                return task()
            })).then((res) => {
                //console.log("Excute");
                context[prop].methods = res;
                this.ValidAction(context[prop]);
            }).catch(error => {
                //console.error("Có lỗi xảy ra:", error);
            });

        }
        //console.log(context)

        return this.isValid;
    }

}
export { Validator }