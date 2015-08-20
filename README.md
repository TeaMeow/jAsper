# Tocas

**嗨，歡迎來到新世界。**

Tocas 提供 CSS3 介面元件和 JS 函式庫，

如果你知道如何使用 jQuery，那麼想必你就一定會 TocasJS 了，

不過當然地，我們多了很多東西。

**需要注意的是：這篇文件尚未完成，還有許多功能尚未提及。**

#使用方法
```javascript
$(元素)    // 這個是 TocasJS 的選擇器
$_(元素)   // 這個則是原生的 DOM 選擇器，我們稱之為第二選擇器。
```

#瀏覽器支援
![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ | Chrome 4.0+ | Firefox 16.0+ | Opera 15.0+ | Safari 4.0+ |

#功能列表
**[基礎核心](#core)**  
**[Content](#content)**  
**[Style](#style)**  
**[Events](#events)**  
**[Others](#others)**  

##基礎核心
**[.each()](#each)** **[.eq()](#eq)** 
###Each —— 每個
替每一個元素都呼叫一次函式。
```javascript
.each(回傳函式(元素, 索引, 元素))
```

###Eq —— 跳到
當你的選擇器中有很多元素，你可以透過此指令選擇指定的索引元素。
```javascript
.eq(索引)
```

##內容
**[.text()](#text)** **[.val()](#value)** **[.html()](#html)** **[.empty()](#empty)** **[.clone()](#clone)** 
###Text —— 文字
你可以取得、設置一個元素的內容文字。
```javascript
.text() // 回傳元素的文字。
```
或者是：
```javascript
.text('Hello') // 設定該元素的文字為「Hello」。
```

###Value —— 值
取得，或是設置一個元素的值，我們通常將它用在一個 input 中。
```javascript
.val() // 取得值。
```
或者是：
```javascript
.val('Hello') // 設置一個值。
```

###HTML
取得 HTML 內容，或是設置一個 HTML 內容。
```javascript
.html() // 取得 HTML 內容。
```
或者是：
```javascript
.html('Hello') // 設置 HTML 內容。
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
.cssAnimation(Animate, Callback, AnimationSpeed)
```
**BEWARE:** AnimationSpeed is just about add another duration class on the same object,

such as 800 millionseconds, we'll add a ".animated08s" class on it. 

**SUPPORTED: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000**

for example:
```javascript
.cssAnimate('fadeInDown', function(){ alert('Animation End!') }, 500)
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

###Geo
Get the location with the HTML5 geolocation function.
```javascript
$.geo(Options)
```
The following is the options that you can use:
```javascript
{
  highAccurary: true
  timeout:       3600
  maxAge:        10000
  success:       function(Position)
  error:         function(Error)
  notSupported:  function()
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
