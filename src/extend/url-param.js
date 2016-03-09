jA.urlParam = function(paramName)
{
    /** Are we getting all parameters or just a special one? */
    var getAll    = (typeof paramName === 'undefined'),
    
    /** Get the parameters which are behind the question mark, and split it with & symbol, so we'll get an array */
        params    = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'),
        paramList = {}
    
    if(params.length == 0)
        return null;
    
    for(var i in params)
    {
        /** Split single parameter, so [0] is the name, [1] is the value */
        var param = params[i].split('='),
            name  = param[0],
            value = (typeof param[1] !== 'undefined' && param[1] != '') ? param[1] : ''; //Return the value or just a empty string
        
        /** This is the param which we are looking for, so we return the value! */
        if(name == paramName)
            return value;
        
        /** We don't store the param which we are NOT looking for if we are NOT getting the all params */
        if(!getAll && name != paramName)
            continue;
        
        /** Otherwise we push it into an object */
        paramList[name] = value;
    }
    
    /** Return undefined if no param is found */
    return (Object.keys(paramList).length) ? paramList : undefined;
}