$.geo = function(option)
{
    if(typeof option == 'undefined')
        return false;
    
    /** Check some options is set or null, and gives some options a default value */
    var notSupported = typeof option.notSupported == 'function',
        error        = typeof option.error        == 'function',
        deny         = typeof option.deny         == 'function',
        highAccurary = typeof option.highAccurary != 'undefined' ? option.highAccurary : false,
        timeout      = typeof option.timeout      == 'number'    ? option.timeout      : 8000,
        maxAge       = typeof option.maxAge       == 'number',
        isFirefox    = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        opt          = {
                           enableHighAccuracy: highAccurary, 
                           timeout           : timeout
                       };
                       
    /** Set the maximumAge if needed */
    if(maxAge) 
        opt.maximumAge = maxAge;
    
    /** Set the timer for the firefox */
    /** Firefox won't give us "Denied" status, so the only thing we can do is waiting for it timeout to call deny callback*/
    if(isFirefox)
        if(error)
            var firefoxTimer = setTimeout(function(){ option.error(3) }, timeout);
        else if(deny)
            var firefoxTimer = setTimeout(option.deny, timeout);
    
    /** Use the geolocation function if the borwser was supported the HTML5 geolocation */
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(function(position)
        {
            /** Clean the firefox "denied" timer */
            if(isFirefox)
                clearTimeout(firefoxTimer);
            
            /** Call to the success callback */
            option.success(position);
        },
        function(errorCode)
        {
            var denied    = (errorCode.code == errorCode.PERMISSION_DENIED);

            /** Clean the firefox "denied" timer */
            if(isFirefox)
                clearTimeout(firefoxTimer);
            
            /** Call error if error callback exists or deny callback when the callback exists and user denied it */
            if(error)
                option.error(errorCode);
            else if(deny && denied)
                option.deny();
            
        }, opt)
    /** Otherwise we call the notSupported callback if existed */
    else
        if(notSupported)
            option.notSupported();
}