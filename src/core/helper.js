$.isJSON = function(string)
{
    /** Detect the type of the respone is json or not */
    var isJSON = true;
    
    try     { JSON.parse(string); }
    catch(e){ var isJSON = false; }
    
    return isJSON;
}


$.inArray = function(item, targetArray)
{
    return targetArray.indexOf(item);
}


/**
 * Is Numeric
 *
 *
 */
$.isNumeric = function(number)
{
    return !isNaN(parseFloat(Number)) && isFinite(Number);
}







/**
 * Random
 *
 * Generate a random number.
 */

$.rand = function(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}




$.digits = function(number)
{
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}