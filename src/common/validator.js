import { validation } from "./validation"

class Validator {
    prepare = {};

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

    async createTask(taskId, val, method) {
        return function() {
            return new Promise((resolve, reject) => {

                let md = async () => {
                    method(null, val);
                }

                var ret = md()

                resolve({id: taskId, status: ret});
            });
        };
    }

    async excute() {
        if (!this.prepare)
            return Promise.reject();

        let context = {},
            methodExcute = {};

        Object.assign(context, this.prepare);

        return new Promise((resolve, reject) => {
            for (const [prop, component] of Object.entries(context)) {
                var val = component.element.value;
                if (val === undefined)
                    val = null;

                let tasks = [];

                for (const [id, method] of Object.entries(component.methods)) {
                    //methodExcute[id] = false;
                    tasks.push(this.createTask(id, val, method))
                }
                Promise.all(tasks.map(task => task()))
                .then((res) => {
                    console.log(res);
                }).catch(error => {
                    //console.error("Có lỗi xảy ra:", error);
                });
                //context[prop].methods = methodExcute;
            }
        })

        // new Promise(() => {

        // }, () => {
        //     throw ("excute exception!")
        // });

        console.log(context);
    }

}
export { Validator }