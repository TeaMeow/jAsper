/**
 * Attr
 * 
 * Add a attribute to an element.
 * 
 * @param string attr    The name of the attribute.
 * @param mixed  value   The value of the attribute.
 * 
 * @return mixed
 */
 
$.fn.attr = function(attr, value)
{
    value = (value === null) ? null : value;
    
    /** Set multiple Attr if Attr is object */
    if(typeof attr === 'object' && !value)
        return this.each(function(){ for(var i in attr) this.setAttribute(i, attr[i]); });
    
    /** Set single attr */
    else if(attr != null && value != null)
        return this.each(function(){ this.setAttribute(attr, value); });

    /** Get single attr only if Attr is not null */
    else if(attr != null && !value)
        return 0 in this ? this[0].getAttribute(attr) : null;
}




/**
 * Remove Attr
 * 
 * Remove an attribute from an element.
 * 
 * @param string attr   The name of the attribute.
 * 
 * @return object
 */
 
$.fn.removeAttr = function(attr)
{
    return this.each(function(){ this.removeAttribute(attr); });
}

