/**
 * Hide
 */

$.fn.hide = function()
{
    return this.each(function()
    {
        $(this).addClass('hidden');
    });
}




/**
 * Show
 */

$.fn.show = function()
{
    return this.each(function()
    {
        $(this).removeClass('hidden');
    });
}

    
$.fn.isHidden = function()
{
    return $(this).hasClass('hidden');
}
        
        

$.fn.toggle = function()
{
    return this.each(function()
    {
        if($(this).hasClass('hidden'))
            $(this).show();
        else
            $(this).hide();
    })
}