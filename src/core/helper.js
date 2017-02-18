/**
 * isJSON
 *
 * 確認字串是否為 JSON 格式。
 *
 * 來源 http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
 */

jA.isJSON = function(string)
{
    string = typeof string !== "string" ? JSON.stringify(string)
                                        : string
    try
    {
        string = JSON.parse(string)
    }
    catch (e)
    {
        return false
    }

    if (typeof string === "object" && string !== null)
        return true

    return false
}

/**
 * inArray
 *
 * 項目是否在陣列中。
 */

jA.inArray = function(item, targetArray)
{
    return targetArray.indexOf(item)
}

/**
 * isNumeric
 *
 * 是否為數字型態。
 */

jA.isNumeric = function(number)
{
    return !isNaN(parseFloat(Number)) && isFinite(Number)
}

/**
 * escapeHTML
 *
 * 脫逸字串中的 HTML 標籤。
 */

jA.escapeHTML = function(string)
{
    if(typeof string === 'string')
        return string.replace(/&/g, "&amp;")
                     .replace(/</g, "&lt;")
                     .replace(/>/g, "&gt;")
                     .replace(/"/g, "&quot;")
                     .replace(/'/g, "&#039;")
    else
        return null
}

/**
 * unescapeHTML
 *
 * 將字串中脫逸的 HTML 標籤反轉回 HTML 標籤。
 */

jA.unescapeHTML = function(string)
{
    if(typeof string === 'string')
        return string.replace(/&amp;/g, '&')
                     .replace(/&lt;/g, '<')
                     .replace(/&gt;/g, '>')
                     .replace(/&quot;/g, '"')
                     .replace(/&#039;/g, "'")
    else
        return null
}

/**
 * nl2br
 *
 * 將換行符號轉換成 <br> 標籤。
 */

jA.nl2br = function(string)
{
    if(typeof string === 'string')
        return string.replace(/\n/g, "<br>")
    else
        return null

}

/**
 * br2nl
 *
 * 將 <br> 標籤轉換成換行符號。
 */

jA.br2nl = function(string)
{
    if(typeof string === 'string')
        return string.replace(/<br>/g, "\r")
    else
        return null

}

/**
 * map
 *
 * 和 ES 的 map 用法相同。
 */

jA.map = function(array, callback)
{
    if(Object.prototype.toString.call(array) === '[object Array]')
        return array.map(callback)

    return []
}

/**
 * rand
 *
 * 在指定的範圍內產生亂數。
 */

jA.rand = function(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * guid
 *
 * 產生 GUID 編號。
 */

var jAsperGuids = []

jA.guid = function()
{
    var guid

    function s4()
    {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1)
    }

    do
    {
        guid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
    }
    while(jAsperGuids.indexOf(guid) != -1)

    jAsperGuids.push(guid)

    return guid
}

/**
 * digits
 *
 * 將數字加上百進位符號。
 */

jA.digits = function(number)
{
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "jA1,")
}

/**
 * isset
 *
 * 確認是否有此變數，類似 PHP 的 isset()
 *
 * 來源 http://phpjs.org/functions/isset
 */

jA.isset = function()
{
    var a = arguments,
        l = a.length,
        i = 0,
        undef

    if (l === 0) {
        throw new Error('Empty isset')
    }

    while (i !== l) {
        if (a[i] === undef || a[i] === null) {
            return false
        }
        i++
    }
    return true
}

/**
 * setTimeout
 *
 * 與 ES 的 setTimeout 相同。
 */

jA.setTimeout = function(timer)
{
    var d = new jA.deferred()
    var that = this

    setTimeout(function(r)
    {
        d.resolve(r)
    }, timer)

    return d
}