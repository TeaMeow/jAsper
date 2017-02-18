/**
 * hide
 *
 * 隱藏元素。
 */

jA.fn.hide = function()
{
    return this.each(function()
    {
        jA(this).addClass('hidden')
    })
}

/**
 * show
 *
 * 顯示元素。
 */

jA.fn.show = function()
{
    return this.each(function()
    {
        jA(this).removeClass('hidden')
    })
}

/**
 * isHidden
 *
 * 元素是否正處於隱藏狀態。
 */

jA.fn.isHidden = function()
{
    return jA(this).hasClass('hidden')
}

/**
 * toggle
 *
 * 切換元素的顯示狀態，如果是隱藏的則顯示，反之。
 */

jA.fn.toggle = function()
{
    return this.each(function()
    {
        if(jA(this).hasClass('hidden'))
            jA(this).show()
        else
            jA(this).hide()
    })
}