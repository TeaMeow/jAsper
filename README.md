# TocasJS
**如果你在尋找中文文件，請參閱另一份「讀我.md」**

**NOTE: There's a lot of function are not writen in this document**

A lighter JQuery-like library, we made it on our own,

if you know JQuery, then you already know how to use TocasJS,

and it's supported more functions .. such as $.cookie(), and more ..

#Usage
```
$(Element)
```

#Browser Support
![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ | Chrome 4.0+ | Firefox 16.0+ | Opera 15.0+ | Safari 4.0+ |

#Supported Functions
##Core

###Each
Call function for each elements.
```
.each(Callback(Element, Index, Element))
```

###Eq
Jump to target element.
```
.eq(Index)
```

##Style
###Show
Turn css display to "X".
```
.show(Display[Optional])
```
for example:
```
.show('table-cell')
```

###Hide
Turn css to "display: none".
```
.hide()
```

###Toggle
Display or hide a element.
```
.toggle(Display[Optional])
```

###AddClass
Add a class or many classes.
```
.addClass(Class)
```
```
.addClass('test class-1 class-2 class-3')
```

###RemoveClass
Remove a class or many class, if class name is empty, we clean all of the classes.
```
.removeClass(Class)
```
```
.removeClass('tb tb-none')
```
```
.removeClass()    //Clean all of the classes.
```

###ToggleClass
Remove a class if it's already existed, otherwise add it.(multiple classes is not supported yet.)
```
.toggleClass(Class)
```

###HasClass
Is this class existed in the element?

It will return a true or false.(multiple classes is not supported yet.)
```
.hasClass(Class)
```

###CSSAnimation
**this function with [Animate.css](http://github.com/daneden/animate.css) is required.**
```
.cssAnimation(Animate, Time, Callback)
```
**BEWARE:** The "Time" doesn't mean the speed of the animation,

it means the milliseconds to callback when the animation ends.

for example:
```
.cssAnimate('fadeInDown', 3000, function(){ alert('Animation End!') })
```

##Events
###On
Trigger a handler when an event was happened.
```
.on(EventName, Handler)
```
for example:
```
.on('click keyup input', function(){alert('Here comes another world.')})
```

###One
Same as above, but only triggered once.
```
.one(EventName, Handler)
```

###Off
Remove a handler which has name or remove the whole event handlers
```
.off(EventName, Handler[Optional])
```
for example:
```
.off('click keyup input')
```
```
.off('paste', Test)
```

###Ready
Once it ready(DOMContentLoaded), we trigger the handler.
```
.ready(Callback)
```

##Others
###Cookie (jQuery does not support this function.)
Read or write, delete a cookie.
```
$.cookie(Name, Value, Options[Optional])
```
The following is the options that you can use:
```
{
  expires : 10,             //Days for expiration.      (default: 365 days)
  path    : '/',            //The path of cookie.       (default: '/')
  domain  : 'TeaMeow.com'   //The domain of the cookie. (default: none)
}
```
So you can set, read, and unset it like this:
```
$.cookie('Foo', 'bar', {expires: 30})  //Name a cookie with 30 days expiration.
$.cookie('Foo')                        //Get a cookie which is called 'Foo'
$.cookie('Foo', '', -1)                //Expires a cookie(another words: unset).
```

###Ajax
Get data without refresh page, **same usage as jQuery**.
```
$.ajax(Options)
```
The following is the options that you can use:
```
{
  async: true, 
  type: 'POST',       //Type of form. (GET, POST)
  data: Data,         //Data that you want to send.
  dataType: 'json',   //Type of result. (json, html, text, string)
  
  url: 'http://www.teameow.com/test.php',
  timeout: 10000,
  contentType: false,  //BEWARE: FALSE IS NOT SAME AS THE DEFAULT.
                       //(default: application/x-www-form-urlencoded; charset=UTF-8)
                       
  success: function(XHR.responseText, XHR)
  error:   function(XHR, XHR.responseText)
  headers: {'Connection': 'keep-alive'}
}
```

##License

[MIT license]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
