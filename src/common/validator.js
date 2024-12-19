import { validation } from "./validation"

class Validator {
    prepare = {};

    HandlePrepareMethod(method) {
        const methods = []
        for (const [key, obj] of Object.entries(method)) {

            switch (typeof(obj)) {
                case 'boolean':
                    methods.push(validation[key])
                    break;
                case 'function':
                    methods.push(obj);
                    break;
                default:
                    break;
            }
        };

        return methods;
    }

    constructor(context, form) {
        if (typeof (context) !== 'object')
            return;

        for (const [keys, component] of Object.entries(context)) {
            for (const [key, method] of Object.entries(component)) {

                var object = {};

                switch (key) {
                    case "methods":
                        this.HandlePrepareMethod(method);
                        break;
                    default:
                        break;
                }


            }
        }

        console.log(this.prepare)
    }


}
export { Validator }