const Sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const isUndefOrStrEmpty = (str) => {
    return (str === "" || str === undefined || str === null)
}

const DataBinding = (data, form) => {
    var elements = form.querySelectorAll("[data-prop]");
    elements.forEach((element) => {
        if (isUndefOrStrEmpty(element.dataset.prop))
            return true;

        switch (element.tagName) {
            case "INPUT":
                element.value = data[element.dataset.prop];
                break;
            default:
                element.innerText = data[element.dataset.prop];
                break;
        }
    });
}

const FormCollection = (form) => {
    var dataRtn = {};
    var elements = form.querySelectorAll("[data-prop]");

    elements.forEach((element) => {
        if (isUndefOrStrEmpty(element.dataset.prop))
            return true;

        switch (element.tagName) {
            case "INPUT":
            case "SELECT":
                dataRtn[element.dataset.prop] = element.value;
                break;
            default:
                dataRtn[element.dataset.prop] = element.innerText;
                break;
        }
    });

    return dataRtn;
}

export { Sleep, DataBinding, FormCollection, isUndefOrStrEmpty }