/**
 * sse
 *
 * 專門處理 Server Sent-Event 的函式。
 */

jA.sse = function(obj)
{
    var sse = new EventSource(obj.url)

    /** Message */
    if(typeof obj.message == 'object')
        for(var i in obj.message)
            sse.addEventListener(i, obj.message[i], false)
    else if(typeof obj.message !== 'undefined')
        sse.onmessage = obj.message

    /** Error */
    if(typeof obj.error !== 'undefined')
        sse.onerror = obj.error

    /** Open */
    if(typeof obj.open !== 'undefined')
        sse.addEventListener('open', obj.open, false)
}
