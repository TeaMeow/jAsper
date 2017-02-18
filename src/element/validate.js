/**
 * validate
 *
 * 以 HTML5 驗證該元素。
 */

jA.fn.validate = function()
{
    var jAthis    = jA(this),
        minlength = jAthis.attr('minlength'),
        maxlength = jAthis.attr('maxlength'),
        min       = jAthis.attr('min'),
        max       = jAthis.attr('max'),
        required  = jAthis.attr('required') != null,
        pattern   = jAthis.attr('pattern'),
        type      = jAthis.attr('type'),
        value     = jAthis.val();

    if(required && value == '')
        return 'required';

    if(minlength !== null && value.length < minlength)
        return 'minlegnth';

    if(maxlength !== null && value.length > maxlength)
        return 'maxlegnth';

    if(min !== null && parseInt(value) < min)
        return 'min';

    if(max !== null && parseInt(value) > max)
        return 'max';

    if(pattern !== null)
    {
        var regEx = new RegExp(pattern.replace(/\//g, ''));

        if(!regEx.test(value))
            return 'pattern';
    }

    if(type !== null && type == 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return 'email';

    return true;
}