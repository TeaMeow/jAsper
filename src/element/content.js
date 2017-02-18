/**
 * val
 *
 * 設置一個元素的值，如果傳入的值是空的則為取得該元素的值。
 */

jA.fn.val = function(value)
{
    if(value == null)
    {
        if(0 in this)
            if(this[0].nodeName == 'SELECT')
                return this[0].options[this[0].selectedIndex].value;
            else
                return this[0].value;
        else
            return null;
    }
    else
    {
        return this.each(function(){ this.value = value });
    }
}

/**
 * empty
 *
 * 清空一個元素的 HTML 或是值。
 */

jA.fn.empty = function()
{
    return this.each(function()
    {
        if(this.innerHTML != 'undefined') this.innerHTML = '';
        if(this.value     != 'undefined') this.value     = '';
    });
}

/**
 * text
 *
 * 替一個元素設定裡面的文字，如果沒有文字傳入，則是取得該元素的文字。
 */

jA.fn.text = function(text)
{
    if(text === undefined)
        return 0 in this ? this[0].innerText : null;
    else
        return this.each(function(){ this.textContent = text; });
}

/**
 * html
 *
 * 替一個元素設定裡面的 HTML，如果沒有 HTML 傳入，則是取得該元素的 HTML。
 */

jA.fn.html = function(html)
{
    html = html || null;

    if(!html)
        return 0 in this ? this[0].innerHTML : null;
    else
        return this.each(function(){ this.innerHTML = html });
}

/**
 * fdPush
 *
 * 將物件的內容全部推送進 FormData 中。
 */

jA.fn.fdPush = function(obj)
{
    for(var i in obj)
        this[0].append(i, obj[i])

    return this[0];
}

/**
 * map
 *
 * 和 ES 的陣列 map 用法相同。
 */

jA.fn.map = function(callback)
{
    var array = []

    this.each(function()
    {
        var result = callback.call(this)

        if(result)
            array.push(result)
    });

    return array
}

