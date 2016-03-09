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


jA.get = function(url, callback)
{
    callback = callback || null;

    var d = new jA.deferred();


    jA.ajax({
        url     : url,
        type    : 'GET',
        dataType: 'json',
        error   : function(r){d.reject(r)},
        success : function(r){d.resolve(r)}
    });


    return d;
}