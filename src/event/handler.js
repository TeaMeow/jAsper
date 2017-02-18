/**
 * on
 *
 * 綁定事件監聽器。
 */

jA.fn.on = function(eventName, selector, handler, once)
{
    once            = once || false
    var hasSelector = true

    if(typeof selector !== 'string')
    {
        hasSelector = false
        handler     = selector
    }

    if(typeof handler !== 'function')
        once = handler

    /**
     * [ts_eventHandler]
     *
     *        registered   :bool
     *      /
     * Click      func :func
     *      \   /
     *       [0]
     *          \
     *            once :bool
     */

    return this.each(function()
    {
        if(typeof this.addEventListener == 'undefined')
        {
            console.log('TOCAS ERROR: Event listener is not worked with this element.');
            return false;
        }

        /** If the main event list of the element is not existed, we create one */
        if(typeof this.ts_eventHandler == 'undefined')
            this.ts_eventHandler = {};

        /** Split the event by space */
        var events = eventName.split(' ');

        for(var i in events)
        {
            var event = events[i];

            /** If the event handler list is not existed, we create an object, we will store function in here */
            /** so if someone triggered the event, we can just call this list. */
            if(typeof this.ts_eventHandler[event] == 'undefined')
                this.ts_eventHandler[event] = {registered: false, list: []};

            /** Bind if haven't bind yet */
            if(this.ts_eventHandler[event].registered === false)
            {
                this.addEventListener(event, function(evt)
                {
                    /** Just make sure this event still existed */
                    if(typeof this.ts_eventHandler[event] != 'undefined')
                    {
                        /** Execute all of the functions */
                        for(var e in this.ts_eventHandler[event].list)
                        {
                            /** If there's a selector */
                            if(typeof this.ts_eventHandler[event].list[e].selector !== 'undefined')
                            {
                                var inSelector = false;

                                /** If this element is in the selector, then we set InSelector as true */
                                jA(this.ts_eventHandler[event].list[e].selector).each(function(i, el)
                                {
                                    if(evt.target === el) inSelector = true;
                                })

                                /** We won't call this function if this elements which is triggered is not in the selector */
                                if(!inSelector) return;
                            }

                            /** Execute */
                            this.ts_eventHandler[event].list[e].func.call(this, evt);

                            /** If "once" is true, we remove it after call it */
                            if(this.ts_eventHandler[event].list[e].once)
                                delete this.ts_eventHandler[event].list[e];
                        }
                    }
                })

                this.ts_eventHandler[event].registered = true;
            }

            /** Push handler or anonymous function into that event list */
            var eventHandler = this.ts_eventHandler[event].list,
                data         = {func: handler, once: once};

            /** Store the selector if there's selector */
            if(hasSelector)
                data.selector = selector;

            /** Store the function info*/
            eventHandler.push(data);

            this.ts_eventHandler[event].list = eventHandler;
        }
    })
}

/**
 * one
 *
 * 綁定僅觸發一次的事件監聽器。
 */

jA.fn.one = function(eventName, selector, handler)
{
    return this.each(function()
    {
        /** Set "once" true, it will auto remove once we call it */
        jA(this).on(eventName, selector, handler, true);
    });
}

/**
 * off
 *
 * 移除指定的事件監聽器。
 */

jA.fn.off = function(eventName, handler)
{
    return this.each(function()
    {
        /** No list no talk */
        if(typeof this.ts_eventHandler            == 'undefined') return;
        if(typeof this.ts_eventHandler[eventName] == 'undefined') return;

        /** If there's no handler name, we remove all handler */
        if(handler == null)
        {
            this.ts_eventHandler[eventName].list = [];
            return;
        }

        /** Otherwise we search for the index of function, then remove it */
        for(var e in this.ts_eventHandler[eventName].list)
            if(handler === this.ts_eventHandler[eventName].list[e].func) 
                delete this.ts_eventHandler[eventName].list[e];
    });
}



