/**
 * Hide
 */

jA.fn.hide = function()
{
    return this.each(function()
    {
        jA(this).addClass('hidden');
    });
}




/**
 * Show
 */

jA.fn.show = function()
{
    return this.each(function()
    {
        jA(this).removeClass('hidden');
    });
}

    
jA.fn.isHidden = function()
{
    return jA(this).hasClass('hidden');
}
        
        

jA.fn.toggle = function()
{
    return this.each(function()
    {
        if(jA(this).hasClass('hidden'))
            jA(this).show();
        else
            jA(this).hide();
    })
}