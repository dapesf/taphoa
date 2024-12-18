import { validation } from "./validation"

function validator(context, form) {
    if (typeof (context) !== 'object')
        return;

    const arr_func = [];

    for (const [element, objects] of Object.entries(context)) {
        for (const [key, object] of Object.entries(ontext[key].methods)) {

            if (typeof (object) === 'boolean') {
                if (key === validation[key])
                    arr_func.push(validation[key])
            }
        }
    }
}

export { validator }