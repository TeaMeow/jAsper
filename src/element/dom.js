/**
 * Wrap
 * 
 * Wrap an element.
 * 
 * @param mixed element   The element that we want to wrap it by.
 * 
 * @return mixed
 */
 
$.fn.wrap = function(element)
{
    return this.each(function()
    {
        this.parentNode.insertBefore(element, this);
        element.appendChild(this);
    });
}



$.fn.append = function(html)
{
    if(html != null && typeof html == 'object')
        return this.each(function(){ this.appendChild(html); });
    else if(html != null)
        return this.each(function(){ this.innerHTML += html; });
}

$.fn.after = function(html)
{
    if(html != null)
        return this.each(function(){ this.insertAdjacentHTML('afterend', html); });
}

$.fn.before = function(html)
{
    if(html != null)
        return this.each(function(){ this.insertAdjacentHTML('beforeBegin', html); });
}

$.fn.prepend = function(html)
{
    if(html != null)
        return this.each(function(){ this.parentNode.insertBefore(html, this.nextSibling); });
}

$.fn.appendTo = function(selector)
{
    return this.each(function()
    {
        var that = this;
        
        $(selector).each(function()
        {
            this.appendChild(that, this.nextSibling);  
        });
    })
}

$.fn.prependTo = function(selector)
{
    return this.each(function()
    {
        var that = this;
        
        $(selector).each(function()
        {
            this.insertBefore(that, this.firstChild);
        });
    })
}

$.fn.insertAfter = function(selector)
{
    return this.each(function()
    {
        var that = this;
        
        $(selector).each(function()
        {
            this.parentNode.insertBefore(that, this.nextSibling);
        });
    })
}

$.fn.insertBefore = function(selector)
{
    return this.each(function()
    {
        var that = this;
        
        $(selector).each(function()
        {
            this.insertAdjacentHTML('beforeBegin', that);
        });
    })
}



$.fn.clone = function(deep)
{
    /** Copy child too? */
    deep = (typeof deep == 'undefined') ? true : deep;

    var cloneList = [];
    
    /** Clone the elements */
    this.each(function()
    {
        cloneList.push(this.cloneNode(deep));
    });

    /** Using the elements which we cloned */
    return $(cloneList);
}



$.fn.remove = function()
{
    return this.each(function(){ this.parentNode.removeChild(this) });
}




$.fn.children = function()
{
    var list = [];
        
    this.each(function(i, el)
    { 
        /** Get child nodes */
        var children = el.childNodes;
        
        /** Push the child nodes to the list*/
        list.push.apply(list, children);
    })
    
    /** Return the list with $ */
    return $(list);
}



$.fn.find = function(selector)
{
    /** The selector must be string */
    if(typeof selector !== 'string')
        return null;
    
    var list = [];

    this.each(function(i, el)
    { 
        /** Push the child nodes to the list*/
        list.push.apply(list, el.querySelectorAll(selector));
    });

    /** Return the list with $ */
    return list.length ? $(list) : null;
}



        
        /**
         * Parent
         */
        
        $.fn.parent = function()
        {
            return 0 in this ? $(this[0].parentNode) : null;
        }
        
        
        

        $.fn.parents = function(selector)
        {
            var that     = this,
                selector = selector || null,
                parents  = [];
            
            if(selector !== null)
                var selector = $(selector);

            /** Non stop loop, until there's no parent of the element */
            while(that)
            {     
                /** Not this one, we go upper */
                that = $(that).parent()[0];

                /** No parent? */
                if(!that)
                    break;
                
                /** Push to the parents list if it's in the selector or just push it if we don't set a selector */
                if(selector == null || (selector !== null && Array.prototype.indexOf.call(selector, that) !== -1))
                    parents.push(that);
            }
            
            return $(parents);
        }
        
        
        
        

        $.fn.closest = function(selector)
        {
            var that     = this,
                selector = $(selector);

            /** Non stop loop, until there's no parent of the element */
            while(true)
            {     
                /** Not this one, we go upper */
                that = $(that).parent()[0];

                /** No parent? */
                if(!that)
                    return null;
                
                /** Is the parent in the closest selector? If it do, then the parent is the closest element which we want */
                if(Array.prototype.indexOf.call(selector, that) !== -1)
                    return $(that);
            }
        }
         
        

        $.fn.contains = function(wants)
        {
            var selector = $(wants),
                isTrue   = false;

            this.each(function(i, el)
            {
                var children = el.childNodes;
                
                for(var si = 0; si < selector.length; si++)
                {
                    if(Array.prototype.indexOf.call(children, selector[si]) != -1)
                        isTrue = true;
                }
            });

            return isTrue;
        }