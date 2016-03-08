
$.fn.mousedown = function(callback)
{
    return $(this).on('mousedown', callback);
}

$.fn.mouseup = function(callback)
{
    return $(this).on('mouseup', callback);
}

$.fn.mousemove = function(callback)
{
    return $(this).on('mousemove', callback);
}

$.fn.click = function(callback)
{
    return $(this).on('click', callback);
}

$.fn.dragstart = function(callback)
{
    return $(this).on('dragstart', callback);
}




$.fn.longpress = function(callback, clickCallback, timer)
{
    /** If callback is not an number, which means it must be a function */
    if(!isNaN(clickCallback))
        timer = clickCallback;
    
    timer = timer || 500;
    
    return this.each(function()
    {
        $(this).mousedown(function(event)
        {
            var that = this;
            /** Haven't trigger long press yet, so we set this to false */
            that.ts_longPressed    = false;
            
            this.ts_longPressTimer = setTimeout(function()
            {
                /** Call long press callback */
                callback.call(that);
                
                /** Long press has been triggered */
                that.ts_longPressed = true;
                
            }, timer);
            
            return false;
        })
        .mouseup(function(event)
        {
            /** If it's not long press, we call the 'click' callback */
            if(!this.ts_longPressed)
                if(typeof clickCallback !== 'undefined')
                    clickCallback.call(this);
            
            clearTimeout(this.ts_longPressTimer);
            return false;
        })
        .mousemove(function(event)
        { 
            clearTimeout(this.ts_longPressTimer);
            return false;
        })
    })
}


$.fn.trigger = function(Event)
{
    return this.each(function(){ this[Event]() });
}


$.fn.scrollBottom = function(scroll, reachBottom)
{
    $(this).on('scroll', function()
    {
        var distance = this.scrollHeight - this.scrollTop - this.clientHeight;
        
        /** Call ReachBottom if user scroll to the bottom */
        if(typeof scroll !== 'undefined' || scroll != null) 
            scroll.call(this, distance); //Pass distance from the bottom to the function.
            
        /** Call ReachBottom if user scroll to the bottom */
        if(distance == 0 && typeof reachBottom !== 'undefined') 
            reachBottom.call(this, distance);
    });
}


$.fn.ready = function(callback)
{
    if(0 in this)
        this[0].addEventListener('DOMContentLoaded', callback)
}

$.fn.focus = function()
{
    return this.each(function()
    {
        this.focus();
    });
}


$.fn.isBottom = function()
{
    if(0 in this)
        if((this[0].scrollHeight - this[0].scrollTop - this[0].clientHeight) == 0)
            return true;
    else
        return false;
}