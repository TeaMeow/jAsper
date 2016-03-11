jA.post = function(url, data, callback)
{
    callback = callback || null;

    var d = new jA.deferred();


    jA.ajax({
        url     : url,
        type    : 'POST',
        dataType: 'json',
        data    : data,
        error   : function(r){d.reject(r)},
        success : function(r){d.resolve(r)}
    });


    return d;
}


jA.get = function(url, data)
{
    data = data || null;

    var d = new jA.deferred();

    if(data !== null)
    {
        /** explode the object into a string */
        var params = '';

        for(var i in data)
            params += i + '=' + data[i] + '&' ;

        /** Remove the unnecessary symbol at the end */
        params = '?' + params.slice(0, -1);
    }

    jA.ajax({
        url     : url + params,
        type    : 'GET',
        dataType: 'json',
        error   : function(r){d.reject(r)},
        success : function(r){d.resolve(r)}
    });


    return d;
}