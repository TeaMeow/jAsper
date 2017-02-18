/**
 * post
 *
 * `ajax` 中以 POST 送出的簡寫函式。
 */

jA.post = function(url, data, dataType)
{
    dataType = dataType || 'json';

    var d      = new jA.deferred();
    var config =
    {
        url     : url,
        type    : 'POST',
        dataType: dataType,
        data    : data,
        error   : function(r){d.reject(r)},
        success : function(r){d.resolve(r)}
    }

    if(jA.isJSON(data))
        config.contentType = 'application/json; charset=UTF-8'

    jA.ajax(config);

    return d;
}

/**
 * patch
 *
 * `ajax` 中以 PATCH 送出的簡寫函式。
 */

jA.patch = function(url, data, dataType)
{
    dataType = dataType || 'json';

    var d      = new jA.deferred();
    var config =
    {
        url     : url,
        type    : 'PATCH',
        dataType: dataType,
        data    : data,
        error   : function(r){d.reject(r)},
        success : function(r){d.resolve(r)}
    }

    if(jA.isJSON(data))
        config.contentType = 'application/json; charset=UTF-8'

    jA.ajax(config);

    return d;
}

/**
 * delete
 *
 * `ajax` 中以 DELETE 送出的簡寫函式。
 */

jA.delete = function(url, data, dataType)
{
    dataType = dataType || 'json';

    var d      = new jA.deferred();
    var config =
    {
        url     : url,
        type    : 'DELETE',
        dataType: dataType,
        data    : data,
        error   : function(r){d.reject(r)},
        success : function(r){d.resolve(r)}
    }

    if(jA.isJSON(data))
        config.contentType = 'application/json; charset=UTF-8'

    jA.ajax(config);

    return d;
}

/**
 * put
 *
 * `ajax` 中以 PUT 送出的簡寫函式。
 */

jA.put = function(url, data, dataType)
{
    dataType = dataType || 'json';

    var d      = new jA.deferred();
    var config =
    {
        url     : url,
        type    : 'PUT',
        dataType: dataType,
        data    : data,
        error   : function(r){d.reject(r)},
        success : function(r){d.resolve(r)}
    }

    if(jA.isJSON(data))
        config.contentType = 'application/json; charset=UTF-8'

    jA.ajax(config);

    return d;
}

/**
 * get
 *
 * `ajax` 中以 GET 送出的簡寫函式。
 */

jA.get = function(url, data, dataType)
{
    data     = data     || null;
    dataType = dataType || 'json';

    var params = '';

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

    var config =
    {
        url     : url + params,
        type    : 'GET',
        dataType: 'json',
        error   : function(r){d.reject(r)},
        success : function(r){d.resolve(r)}
    }

    jA.ajax(config);

    return d;
}