const validation =
{
    isNumeric:
        async (prop, value) => {
            await sleep(200);
            if (isNaN(value))
                return false;

            return true;
        }
    , isNull:
        async (prop, value) => {
            await sleep(200);
            if (value === "" || value === undefined || value === null)
                return false;

            return true;
        }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export { validation };