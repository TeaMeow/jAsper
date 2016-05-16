jA.binder = function(binds, rebind)
{
    rebind = rebind || false;

    for(var i in binds)
    {
        /** Split the event and the target first */
        var splits  = i.split('|'),
        /** The first array is events */
            events  = splits[0],
        /** Split the targets */
            targets = splits[1].split('&');


        /** Detect what to bind based on different events */
        function bindThis(target, events, bind)
        {
            var event = events.split(' ');


            switch(target)
            {
                case ' window':
                case ' Window':
                    target = window;
                    break;

                case ' document':
                case ' Document':
                    target = document;
                    break;
            }


            for(var i in event)
            {
                var e = event[i];

                /** Different ways to bind with different events */
                if(e == 'scrollBottom')
                {
                    if(rebind)
                        jA(target).off('scroll');

                    jA(target).scrollBottom(bind);
                }
                else if(e == 'ready')
                {
                    if(rebind)
                        jA(target).off('DOMContentLoaded');

                    jA(target).ready(bind);
                }
                else if(e != '')
                {
                    if(rebind)
                        jA(target).off(e);

                    jA(target).on(e, bind);
                }
            }
        }


        /** Each target */
        for(var t in targets)
            /** Bind each callback if it's a callback array */
            if(typeof binds[i] !== 'undefined' && binds[i].isArray)
                for(var f in binds[i])
                    bindThis(targets[t], events, binds[i][f]);
            /** Or not, lol */
            else
                bindThis(targets[t], events, binds[i]);
    }
}
