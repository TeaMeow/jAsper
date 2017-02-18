## 索引

* type Attribute
    * [.attr(attr *[string|object]*, value *[string|undefined]*) [string|null]]()
    * [.removeAttr(attr *[string]*)]()
* type Content
    * [.val(value *[string|int|undefined]*) *[string|null]*]()
    * [.empty()]()
    * [.text(text *[string|undefined]*) *[string|null]*]()
    * [.html(html *[string|undefined]*) *[string|null]*]()
    * [.fdPush(obj *[object]*) *[FormData]*]()
    * [.map(callback *[func]*) *[array]*]()
* type CSS
    * .cssAnimate(animate [string], callback [func|int], time [int])
    * .css(property [object|array|string], value [string|undefined]) [object|string]
    * .hasClass(classes [string]) [bool]
    * .classList() [array]
    * .addClass(classes [string])
    * .removeClass(classes [string])
    * .toggleClass(classes [string])
    * .getCss(property [string]) [string|null]
* type DOM
    * .wrap(element [HTMLHtmlElement])
    * .append(html [HTMLHtmlElement|string])
    * .after(html [string])
    * .before(html [string])
    * .prepend(html [string])
    * .appendTo(selector [string])
    * .prependTo(selector [string])
    * .insertAfter(selector [string])
    * .insertBefore(selector [string])
    * .template()
    * .clone(deep [bool])
    * .remove()
    * .children()
    * .find(selector [string])
    * .parent()
    * .parents(selector [string])
    * .closest(selector [string])
    * .contains(wants [string|jAsper])
    * .next()
    * .prev()
* type Validate
    * .validate() [string|bool]
* type Visibility
    * .hide()
    * .show()
    * .isHidden()
    * .toggle()
* type Event
    * .mousedown(callback [func])
    * .mouseup(callback [func])
    * .keyup(callback [func])
    * .mousemove(callback [func])
    * .click(callback [func])
    * .dragstart(callback [func])
    * .longPress(callback [func], clickCallback [func], timer [int])
    * .trigger(event [string])
    * .scrollBottom(scroll [func], reachBottom [func])
    * .ready(callback [func])
    * .focus()
    * .isBottom() [bool]
    * .delayKeyup(callback [func], ms [int])
    * .on(eventName [string], selector [string|func], handler [func|undefined], once [bool])
    * .one(eventName [string], selector [string|func], handler [func|undefined])
    * .off(eventName [string], handler [string|undefined])

     * jA.binder(binds, rebind)
* type Extend
    * .avgColor(type)
    * .dropzone(config)
    * .genDate(type, direction)
    * .urlParam(paramName)

    * jA.geo(option)
    * jA.cookie(name, value, options)
* type Form
    * .formExplode(extraData)
    * .formValidate(rules, stopAtFirst)
* type Network
    * .load(url, data, callback)

    * jA.ajax(obj, type)
    * jA.getJSON(url, callback)
    * jA.xhrResponse(XHR, type)
    * jA.pjax(option)
    * jA.post(url, data, dataType)
    * jA.patch(url, data, dataType)
    * jA.delete(url, data, dataType)
    * jA.put(url, data, dataType)
    * jA.get(url, data, dataType)
    * jA.sse(obj)


















## .attr
## .removeAttr(attr string)

## .val(value)
## .empty()
## .text(text)
## .html(html)
## .fdPush(obj)
## .map(callback)

## .cssAnimate(animate, callback, time)
## .css(property, value)
## .hasClass(classes)
## .classList()
## .addClass(classes)
## .removeClass(classes)
## .toggleClass(classes)
## .getCss(property)

## .wrap(element)
## .append(html)
## .after(html)
## .before(html)
## .prepend(html)
## .appendTo(selector)
## .prependTo(selector)
## .insertAfter(selector)
## .insertBefore(selector)
## .template()
## .clone(deep)
## .remove()
## .children()
## .find(selector)
## .parent()
## .parents(selector)
## .closest(selector)
## .contains(wants)
## .next()
## .prev()

## .validate()

## .hide()
## .show()
## .isHidden()
## .toggle()

## jA.binder(binds, rebind)

## .mousedown(callback)
## .mouseup(callback)
## .keyup(callback)
## .mousemove(callback)
## .click(callback)
## .dragstart(callback)
## .longPress(callback, clickCallback, timer)
## .trigger(event)
## .scrollBottom(scroll, reachBottom)
## .ready(event)
## .focus()
## .isBottom()
## .delayKeyup(callback, ms)

## .on(eventName, selector, handler, once)
## .one(eventName, selector, handler)
## .off(eventName, handler)

## .avgColor(type)
## .dropzone(config)
## .genDate(type, direction)
## jA.geo(option)
## .urlParam(paramName)

## .formExplode(extraData)
## .formValidate(rules, stopAtFirst)

## jA.ajax(obj, type)
## jA.getJSON(url, callback)
## jA.xhrResponse(XHR, type)
## jA.pjax(option)
## .load(url, data, callback)

## jA.post(url, data, dataType)
## jA.patch(url, data, dataType)
## jA.delete(url, data, dataType)
## jA.put(url, data, dataType)
## jA.get(url, data, dataType)

## jA.sse(obj)

## jA.cookie(name, value, options)



