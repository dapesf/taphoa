 const validation =
{
    isNumeric: 
    (prop, value) => 
    {
        if(isNaN(value))
            return false;

        return true;
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