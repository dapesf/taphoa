import { isUndefOrStrEmpty } from "./common";
import { validation } from "./validation"

class Validator {
    prepare = {};
    isValid = true;
    msgErrors = []

    constructor(context, form) {
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
    }

    ResetMessage() {
        this.msgErrors = [];
    }

    ValidAction(context) {
        context.element.classList.remove("has-error")
        context.methods.forEach((val, index) => {
            if (val.value) {}
            else {
                context.element.classList.add("has-error")
                this.CreateMessage(context.name, context.messages[val.taskId]);
                this.isValid = false;
            }
        })

    }

    async Excute() {

        this.ResetMessage();

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
                tasks.push(this.CreateTask(id, val, method))
            }

            await Promise.all(tasks.map(task => {
                return task()
            })).then((res) => {
                //console.log(res);
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