/**
 * ajax
 *
 * 在非換頁的情況下傳遞 HTTP 請求取得資訊。
 */

jA.ajax = function(obj, type)
{
    if(obj == null)
        return false

    /** Is error handler existed or not */
    var errorCallback   = typeof obj.error !== 'undefined',
        successCallback = typeof obj.success !== 'undefined',
        isObjectData    = typeof obj.data  === 'object' && obj.data.constructor != FormData

    var d = new jA.deferred()

    /** Default */
    if(typeof obj.async === 'undefined')
        obj.async = true
    if(typeof obj.contentType === 'undefined' || obj.contentType == null)
        obj.contentType = 'application/x-www-form-urlencoded; charset=UTF-8'

    var XHR = new XMLHttpRequest()

    /** Set timeout */
    XHR.timeout = obj.timeout || 10000

    XHR.onload = function()
    {
        /** Call to statusCode if existed */
        if(typeof obj.statusCode != 'undefined' && typeof obj.statusCode[XHR.status] != 'undefined')
            obj.statusCode[XHR.status](XHR, XHR.responseText)

        if(XHR.status >= 200 && XHR.status < 400)
        {

            switch(obj.dataType)
            {
                case 'json':
                    if(jA.isJSON(XHR.responseText))
                    {
                        if(successCallback)
                            obj.success(JSON.parse(XHR.responseText), XHR)

                        d.resolve(JSON.parse(XHR.responseText), XHR)
                    }
                    else
                    {
                        if(errorCallback)
                            obj.error(XHR, 'parsererror')

                        d.reject(XHR, 'parsererror')
                    }
                    break
                case 'html':
                case 'text':
                case 'string':
                default:
                    if(typeof obj.success == 'function')
                    {
                        obj.success(XHR.responseText, XHR)

                        d.resolve(XHR.responseText, XHR)
                    }

                    if(typeof XHR.close == 'function')
                        XHR.close()
            }
        }
        else
        {
            if(errorCallback)
                obj.error(XHR, 'success')

            d.reject(XHR, 'success')
        }
    }

    /** When XHR timeout or error, we callback */
    XHR.ontimeout = function()
    {
        if(errorCallback)
            obj.error(XHR, 'timeout')

        d.reject(XHR, 'timeout')
    }

    XHR.onerror = function()
    {
        if(errorCallback)
            obj.error(XHR, 'error')

        d.reject(XHR, 'error')
    }

    /** If there's uploading process callback, we callback :D */
    if(typeof obj.uploading != 'undefined')
    {
        XHR.addEventListener('progress', function(e)
        {
            if(e.lengthComputable)
            {
                var percent = Math.round((e.loaded / e.total) * 100)
                obj.uploading(percent, e)
            }
        }, false)
    }

    /** Open a new connect */
    XHR.open(obj.type, obj.url, obj.async)

    /** If contentType is not FALSE, we set the request header */
    if(obj.contentType != false)
        XHR.setRequestHeader('Content-Type', obj.contentType)

    /** Set headers */
    if(typeof obj.headers != 'undefined')
        for(var i in obj.headers)
            XHR.setRequestHeader(i, obj.headers[i])

    /** If data is an object, we convert it to params */

    if(isObjectData)
    {
        /** explode the object into a string */
        var params = ''

        for(var i in obj.data)
            if(obj.data[i] !== undefined)
                params += i + '=' + obj.data[i] + '&' 

        /** Remove the unnecessary symbol at the end */
        params = params.slice(0, -1)
    }

    /** SENDDDD! */
    XHR.send((isObjectData) ? params : obj.data)

    return d
}

/**
 * getJSON
 *
 * 簡易型的 `ajax`，用以取得遠端 JSON 資料。
 */

jA.getJSON = function(url, callback)
{
    return jA.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: callback,
    })
}

/**
 * xhrResponse
 *
 * 取得 XHR（AJAX）中的回應內容
 */

jA.xhrResponse = function(XHR, type)
{
    type = type || 'json'

    if(type === 'json')
        return JSON.parse(XHR.responseText)
}