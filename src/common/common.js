const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const isUndefOrStrEmpty = (str) => {
    return (str === "" || str === undefined || str === null)
}

export { sleep, isUndefOrStrEmpty }