/**
 * Val
 *
 * Get the value or set the value of an element.
 *
 * @param string|int value   Leave this undefined if we want to get the value instead of set it.
 *
 * @return mixed
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
 * Empty
 *
 * Clean a field or a container.
 *
 * @return object
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
 * Text
 *
 * Set a text for an element, or get the text when the parameter is underfined.
 *
 * @param string text   The text we want to set.
 *
 * @return mixed
 */

jA.fn.text = function(text)
{
    if(text === undefined)
        return 0 in this ? this[0].innerText : null;
    else
        return this.each(function(){ this.textContent = text; });
}




/**
 * HTML
 *
 * Set a html content or get the html content if the parameter is undefined.
 *
 * @param string html   The html content.
 *
 * @return mixed
 */

jA.fn.html = function(html)
{
    html = html || null;

    if(!html)
        return 0 in this ? this[0].innerHTML : null;
    else
        return this.each(function(){ this.innerHTML = html });
}



jA.fn.fdPush = function(obj)
{
    for(var i in obj)
        this[0].append(i, obj[i])

    return this[0];
}