jA.isJSON = function(string)
{
    /** Detect the type of the respone is json or not */
    var isJSON = true;

    try     { JSON.parse(string); }
    catch(e){ var isJSON = false; }

    return isJSON;
}


jA.inArray = function(item, targetArray)
{
    return targetArray.indexOf(item);
}


/**
 * Is Numeric
 *
 *
 */
jA.isNumeric = function(number)
{
    return !isNaN(parseFloat(Number)) && isFinite(Number);
}







/**
 * Random
 *
 * Generate a random number.
 */

jA.rand = function(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}




jA.digits = function(number)
{
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "jA1,");
}


jA.isset = function()
{
    // discuss at: http://phpjs.org/functions/isset
    // +   original by: Kevin van     Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: FremyCompany
    // +   improved by: Onno Marsman
    // +   improved by: Rafał Kukawski
    // *     example 1: isset( undefined, true);
    // *     returns 1: false
    // *     example 2: isset( 'Kevin van Zonneveld' );
    // *     returns 2: true
    var a = arguments,
        l = a.length,
        i = 0,
        undef;

    if (l === 0) {
        throw new Error('Empty isset');
    }

    while (i !== l) {
        if (a[i] === undef || a[i] === null) {
            return false;
        }
        i++;
    }
    return true;
}



jA.setTimeout = function(timer)
{
    var d = new jA.deferred();
    var that = this;

    setTimeout(function(r)
    {
        d.resolve(r);
    }, timer);

    return d;
}