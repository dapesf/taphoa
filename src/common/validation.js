 const validation =
{
    isNumeric: 
    (prop, value) => 
    {
        setTimeout(() => {
            if(isNaN(value))
                return false;
    
            return true;
        }, 1);
    }
    , isNull:
    (prop, value) => 
    {
        if(value === "" || value === undefined || value === null)
            return false;

        return true;
    }
}
export { validation };