# TocasJS
**如果你在尋找中文文件，請參閱另一份「讀我.md」**

**NOTE: There's a lot of function are not writen in this document**

A lighter JQuery-like library, we made it on our own,

if you know JQuery, then you already know how to use TocasJS,

and it's supported more functions .. such as $.cookie(), and more ..

#Usage
```javascript
$(Element)    // This one for TocasJS
$_(Element)   // This one for DOM, we called it secondary selector.
```

#Browser Support
![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ | Chrome 4.0+ | Firefox 16.0+ | Opera 15.0+ | Safari 4.0+ |

#Supported Functions
**[Core](#core)**  
**[Content](#content)**  
**[Style](#style)**  
**[Events](#events)**  
**[Others](#others)**  

##Core
**[.each()](#each)** **[.eq()](#eq)** 
###Each
Call function for each elements.
```javascript
.each(Callback(Element, Index, Element))
```

###Eq
Jump to target element.
```javascript
.eq(Index)
```

##Content
**[.text()](#text)** **[.val()](#value)** **[.html()](#html)** **[.empty()](#empty)** **[.clone()](#clone)** 
###Text
Get the text or set a text of a element.
```javascript
.text() //Get the text.
```
for example:
```javascript
.text('Hello') // Set the text.
```

###Value
Get the value or set a value of a element.
```javascript
.val() //Get the value.
```
for example:
```javascript
.val('Hello') // Set the value.
```

###HTML
Get the innerHTML or set the innerHTML of a element.
```javascript
.html() //Get the HTML content.
```
for example:
```javascript
.html('Hello') // Set the HTML content.
```

###Empty
Clean the value or a html content of the element.
```javascript
.empty()
```

###Clone
Clone this element, so we can edit the .attr() or .append() to somewhere.
```javascript
.clone()
```
for example:
```javascript
.clone().attr('test-id', 12345).prependTo('#i-am-div')
// Set the attr value to 12345 with this new clone element, then move to the div.
```


##Style
**[.show()](#show)**
**[.hide()](#hide)**
**[.toggle()](#toggle)**
**[.addClass()](#addclass)** 
**[.removeClass()](#removeclass)**
**[.toggleClass()](#toggleclass)**
**[.hasClass()](#hasclass)**
**[.cssAnimation()](#cssanimation)**
###Show
Turn css display to "X".
```javascript
.show(Display[Optional])
```
for example:
```javascript
.show('table-cell')
```

###Hide
Turn css to "display: none".
```javascript
.hide()
```

###Toggle
Display or hide a element.
```javascript
.toggle(Display[Optional])
```

###AddClass
Add a class or many classes.
```javascript
.addClass(Class)
```
```javascript
.addClass('test class-1 class-2 class-3')
```

###RemoveClass
Remove a class or many class, if class name is empty, we clean all of the classes.
```javascript
.removeClass(Class)
```
```javascript
.removeClass('tb tb-none')
```
```javascript
.removeClass()    //Clean all of the classes.
```

###ToggleClass
Remove a class if it's already existed, otherwise add it.
```javascript
.toggleClass(Class)
```

###HasClass
Is this class existed in the element?

It will return a true or false.(multiple classes is not supported yet.)
```javascript
.hasClass(Class)
```

###CSSAnimation
**this function with [Animate.css](http://github.com/daneden/animate.css) is required.**
```javascript
.cssAnimation(Animate, Time, Callback)
```
**BEWARE:** The "Time" doesn't mean the speed of the animation,

it means the milliseconds to callback when the animation ends.

for example:
```javascript
.cssAnimate('fadeInDown', 3000, function(){ alert('Animation End!') })
```

##Events
**[.on()](#on)**
**[.one()](#one)**
**[.off()](#off)**
**[.trigger()](#trigger)**
**[.longpress()](#longpress)**
**[.scrollBottom()](#scrollbottom)**
**[.ready()](#ready)**
**[.load()](#load)**
###On
Trigger a handler when an event was happened.
```javascript
.on(EventName, Handler)
```
for example:
```javascript
.on('click keyup input', function(){alert('Here comes another world.')})
```

###One
Same as above, but only triggered once.
```javascript
.one(EventName, Handler)
```

###Off
Remove a handler which has name or remove the whole event handlers
```javascript
.off(EventName, Handler[Optional])
```
for example:
```javascript
.off('click keyup input')
```
```javascript
.off('paste', Test)
```

###Trigger
Trigger an element by special event.
```javascript
.trigger(EventName)
```
for example:
```javascript
.trigger('click')
```

###LongPress
Detect a longpress event, if it's not reach the press time, then we call the click callback.
```javascript
.longpress(Longpress, Click(OrPressTime), PressTime[Optional])
```
for example:
```javascript
.longpress(function(){alert('Long Press!')}, 1000)
// Hold 1 second to trigger the longpress event.
```
```javascript
.longpress(Longpress, ClickMe, 500)
// Hold 500 milliseconds to trigger Longpress(), otherwise call ClickMe() function. 
```

###ScrollBottom
Call Scrolling(Distance) callback with a parameter which tells you how far are you away from the bottom,

If user reach the bottom of the page, ReachBottom will be call.
```javascript
.scrollBottom(Scrolling(Distance), ReachBottom)
```
for example:
```javascript
.scrollBottom(function(D){ console.log('How close to the bottom you are:' + D)})
// Print the info every time the user scrolling.
```
```javascript
.scrollBottom(null, function(){ alert("STOP SCROLLING!! IT'S THE END OF THE WORLD!!") })
// Trigger a message when user scroll down to the bottom of the page.
```

###Ready
Once it ready(DOMContentLoaded), we trigger the handler.
```javascript
.ready(Callback)
```

###Load
same as onLoad.
```javascript
.load(Callback)
```

##Others
**[.cookie()](#cookie)**
**[.ajax()](#ajax)**
**[.rand()](#rand)**
**[.urlParam()](#urlparam)** 
###Cookie (jQuery does not support this function.)
Read or write, delete a cookie.
```javascript
$.cookie(Name, Value, Options[Optional])
```
The following is the options that you can use:
```javascript
{
  expires : 10,             // Days for expiration.      (default: 365 days)
  path    : '/',            // The path of cookie.       (default: '/')
  domain  : 'TeaMeow.com'   // The domain of the cookie. (default: none)
}
```
So you can set, read, and unset it like this:
```javascript
$.cookie('Foo', 'bar', {expires: 30})  // Name a cookie with 30 days expiration.
$.cookie('Foo')                        // Get a cookie which is called 'Foo'
$.cookie('Foo', '', -1)                // Expires a cookie(another words: unset).
```

###Ajax
Get data without refresh page, **same usage as jQuery**.
```javascript
$.ajax(Options)
```
The following is the options that you can use:
```javascript
{
  async: true, 
  type: 'POST',                // Type of form. (GET, POST)
  data: Data,                  // Data that you want to send.
       {'Name': 'TeaMeow',     // Such as object,
        'PW': 'Yami'}
        
        'Name=TeaMeow&PW=Yami' // or params,
        
        $('Form').serialize()  // or even a serialize form by tocas function.
  
  
  
  dataType: 'json',   // Type of result. (json, html, text, string)
  
  url: 'http://www.teameow.com/test.php',
  timeout: 10000,
  statusCode: {401: alert('God, We got 401'),
               500: alert('Server is now something wrong.')}
               
  contentType: false,  // BEWARE: FALSE IS NOT SAME AS THE DEFAULT.
                       // (default: application/x-www-form-urlencoded; charset=UTF-8)
                       
  success: function(XHR.responseText, XHR)
  error:   function(XHR, ErrorStatus)       // ErrorStatus: timeout, error, parsererror, success
                                            // timeout:     When timeout.
                                            // error:       When XHR error.
                                            // parsererror: When parser error, such as JSON.parser error.
                                            // success:     When XHR.status is not >= 200 and < 400.
  
  uploading: function(Percent, Event)       // Percent: percent of uploading process
                                            // Event: Event of XHR.upload.addEventListener('progress')
  headers: {'Connection': 'keep-alive'}
}
```

###Rand
Generate a random number with a specific range.
```javascript
$.rand(Min, Max)
```

###URL Parameters
Get the all parameters or just a special one.
```javascript
$.urlParam(ParamName[Optinal])
```
for example:
```javascript
$.urlParam()      // Get all paramemters, return an object.
$.urlParam('ID')  // Return the value of 'ID'
```
**BEWARE: anything you get will be a string even if it's an number.**

return:
```javascript
"?ID=123 & Type=Remove"  //$.urlParam():     {ID: "123", Type: "Remove"}
"?ID="                   //$.urlParam():     {ID: ""}
""                       //$.urlParam():     undefined
""                       //$.urlParam('ID'): undefined
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
