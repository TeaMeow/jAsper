
jA.pjax = function(option)
{
    /**
     * Option
     * {
     *     container: '#content',
     *     url: jA(this).attr('href'),
     *     title: jA(this).attr('data-title')
     *     dataType: 'json',
     *     contentNode: 'html',
     *     titleNode: 'title',
     *     cache: true,
     *     expire: 86400,
     *     state: {blah: 'Im blah'},
     *     success: function
     * }
     */

    if(typeof history.pushState !== 'function')
        return false;

    /** Check url hostname */
    var fakeLink      = document.createElement('a');
        fakeLink.href = option.url;

    //if(fakeLink.host == '')
    //    fakeLink.href = fakeLink.href;

    /** PJAX only works in same origin, so exit when cross-origin */
    if(fakeLink.hostname !== window.location.hostname)
        return false;

    var pjaxFullURL = fakeLink.protocol + '//' + fakeLink.hostname + fakeLink.pathname,
        fullURL     = window.location.protocol + '//' + window.location.hostname + window.location.pathname;

    /** Exit if the pjax url is just about add a hash or a anchor or even same */
    if(pjaxFullURL === fullURL)
        return false;



    /**
     * PJAX
     */

    function pjax(obj)
    {
         /** Change the content */
        jA(obj.Container).html(obj.Content);

        /** Change the url */
        window.history.pushState(obj.State, obj.Title, obj.URL);

        /** Change the title */
        document.title = obj.Title;

        /** Callback */
        if(typeof option.success != 'undefined')
            option.success(obj);

    }


    /** Set variables */
    var title      = option.title    || '',
        dataType   = option.dataType || 'html',
        url        = option.url,
        expire     = option.expire   || 3600,
        cache      = option.cache    || false,
        cachedName = 'cached_' + url;

    /** Create a state with url and title */
    var state = {url: url, title: title};

    /** Merge state if needed */
    if(typeof option.state !== 'undefined')
        for(var i in option.state)
            state[i] = option.state[i];


    /**
     * Cache
     */

    /** If there's a cache in the storage */
    if(cachedName in localStorage && cache)
    {
        /** We stored JSON format in localStorage before, now we need to convert it to object */
        var obj = JSON.parse(localStorage.getItem(cachedName));

        /** If the state still same, we load the cache */
        /** But if we are using dynamic title(which is returned title as title), no matter what, just load the cache */
        if(JSON.stringify(obj.State) === JSON.stringify(state) || title === '')
        {
            var time = Math.floor(Date.now() / 1000) - obj.time;

            /** Just be sure if it's not expired yet */
            if(expire && !(time > expire))
            {
                pjax(obj);
                return;
            }
        }
    }


    /**
     * Request
     */

    jA.ajax(
    {
        url     : url,
        type    : 'GET',
        dataType: dataType,
        /** Send a PJAX header, so we can deal with it on the server side */
        headers: {'HTTP_X_PJAX': 'true'},
        success: function(result, xhr)
        {
            var title     = (option.dataType == 'json') ? result[option.titleNode]   : option.title,
                content   = (option.dataType == 'json') ? result[option.contentNode] : result,
                scriptTag = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

            if(option.dataType == 'json' && typeof result[option.titleNode] == 'undefined')
                if(typeof option.title != 'undefined')
                    title = option.title;
                else
                    title = '';

            if(option.dataType == 'json' && typeof result[option.contentNode] == 'undefined')
                content = result;

            /** Remove the script in the content */
            content = content.replace(scriptTag, ' ');

            /** Replace the title in the state */
            state['title'] = title;

            var data = {container: Option.container,
                        content: content,
                            url: url,
                          title: title,
                          state: state,
                           time: Math.floor(Date.now() / 1000)};

            /** Store this PJAX to web storage as cache, localStorage don't eat object, so we conver it to json format */
            localStorage.setItem(cachedName, JSON.stringify(data));

            pjax(data);
        }
    });
}





/**
 * Load
 *
 * Load a html by XHR, then push the content to this element.
 */

jA.fn.load = function(url, data, callback)
{
    if(!this.length)
        return this;

    return this.each(function()
    {
        var that    = this,
            options = {type: 'POST',
                       url: url,
                       dataType: 'html',
                       data: data},
            /** Split URL to two parts, first one is the URL, second one is the selector */
            split = url.split(/\s/), selector;

        /** If selector is existed, then we get it */
        if(split.length > 1)
            options.url = split[0];
            selector    = split[1];

        options.success = function(result)
        {
            var scriptTag = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

            /** Replace the html, use selector if existed */
            jA(that).html(selector ? jA(document.createElement('div')).html(result.replace(scriptTag, ' ')).find(selector).html() : result);
        }

        jA.ajax(options);
    });
}