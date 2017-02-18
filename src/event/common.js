/**
 * mousedown
 *
 * 當滑鼠按下的事件綁定。
 */

jA.fn.mousedown = function(callback)
{
    return jA(this).on('mousedown', callback)
}

/**
 * mouseup
 *
 * 當滑鼠放開的事件綁定。
 */

jA.fn.mouseup = function(callback)
{
    return jA(this).on('mouseup', callback)
}

/**
 * keyup
 *
 * 當按鍵放開的事件綁定。
 */

jA.fn.keyup = function(callback)
{
    return jA(this).on('keyup', callback)
}

/**
 * mousemove
 *
 * 當滑鼠移動的事件綁定。
 */

jA.fn.mousemove = function(callback)
{
    return jA(this).on('mousemove', callback)
}

/**
 * click
 *
 * 按下並放開的事件綁定。
 */

jA.fn.click = function(callback)
{
    return jA(this).on('click', callback)
}

/**
 * dragstart
 *
 * 當拖曳開始的事件綁定。
 */

jA.fn.dragstart = function(callback)
{
    return jA(this).on('dragstart', callback)
}

/**
 * longPress
 *
 * 長按事件綁定。
 */

jA.fn.longPress = function(callback, clickCallback, timer)
{
    /** If callback is not an number, which means it must be a function */
    if(!isNaN(clickCallback))
        timer = clickCallback

    timer = timer || 500

    return this.each(function()
    {
        jA(this).mousedown(function(event)
        {
            var that = this
            /** Haven't trigger long press yet, so we set this to false */
            that.ts_longPressed    = false

            this.ts_longPressTimer = setTimeout(function()
            {
                /** Call long press callback */
                callback.call(that)

                /** Long press has been triggered */
                that.ts_longPressed = true

            }, timer)

            return false
        })
        .mouseup(function(event)
        {
            /** If it's not long press, we call the 'click' callback */
            if(!this.ts_longPressed)
                if(typeof clickCallback !== 'undefined')
                    clickCallback.call(this)

            clearTimeout(this.ts_longPressTimer)
            return false
        })
        .mousemove(function(event)
        {
            clearTimeout(this.ts_longPressTimer)
            return false
        })
    })
}

/**
 * trigger
 *
 * 觸發指定事件。
 */

jA.fn.trigger = function(event)
{
    return this.each(function(){ this[event]() })
}

/**
 * scrollBottom
 *
 * 捲軸卷到底的事件綁定。
 */

jA.fn.scrollBottom = function(scroll, reachBottom)
{
    jA(this).on('scroll', function()
    {
        var distance = this.scrollHeight - this.scrollTop - this.clientHeight

        /** Call ReachBottom if user scroll to the bottom */
        if(typeof scroll !== 'undefined' || scroll != null)
            scroll.call(this, distance) //Pass distance from the bottom to the function.

        /** Call ReachBottom if user scroll to the bottom */
        if(distance == 0 && typeof reachBottom !== 'undefined')
            reachBottom.call(this, distance)
    })
}

/**
 * ready
 *
 * 當網頁已經準備的事件綁定。
 */

jA.fn.ready = function(callback)
{
    if(0 in this)
        this[0].addEventListener('DOMContentLoaded', callback)
}

/**
 * focus
 *
 * 聚焦目前元素。
 */

jA.fn.focus = function()
{
    return this.each(function()
    {
        this.focus()
    })
}

/**
 * isBottom
 *
 * 是否已經捲到元素的最底部。
 */

jA.fn.isBottom = function()
{
    if(0 in this)
        if((this[0].scrollHeight - this[0].scrollTop - this[0].clientHeight) == 0)
            return true
    else
        return false
}

/**
 * delayKeyup
 *
 * 延遲按鍵放開，在搜尋功能時非常有用。
 */

jA.fn.delayKeyup = function(callback, ms)
{
    return this.each(function()
    {
        var timer = 0,
            el    = jA(this),
            that  = this

         jA(this).keyup(function(event)
         {
             var event = event

            clearTimeout(timer)

            timer = setTimeout(function()
            {
                 callback.call(that, event)
            }, ms)
         })
    })

}