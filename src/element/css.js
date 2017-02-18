/**
 * cssAnimate
 *
 * 進行 CSS 動畫，很適合用在 Animate.css。
 */

jA.fn.cssAnimate = function(animate, callback, time)
{
    /** If someone using callback field as time.. */
    if(typeof callback == 'number' && typeof time != 'function')
        time = callback;

    if(typeof callback == 'number' && typeof time == 'function')
    {
        var trueCallback = time,
            trueTime     = callback;

        callback = trueCallback,
        time     = trueTime;
    }

    /** Turn millionsecond to float (ex: 300 -> 0.3), then turn float to string and remove the dot (0.3 -> 03 -> 3)*/
    var timer = parseInt((time / 1000).toString().replace('.', ''), 10);
        timer = time < 1000 ? '0' + timer : timer;

    /** Select animation duration by Time */
    time = isNaN(time) ? '' : ' animated' + timer + 's';

    return this.each(function()
    {
        /** For passing jA(this) to inside function */
        var that = this;

        /** Add animation */
        jA(this).addClass(animate + ' animated' + time)
               /** Once the animation end, we remove the animate class and callback **/
               .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function()
                {
                   jA(that).removeClass(animate + ' animated' + time);

                   if((typeof callback !== 'undefined' && callback != null) && typeof callback !== 'number')
                        callback.call(that);
                });
    });
}

/**
 * css
 *
 * 替元素設置或移除單個、多個 CSS 屬性。
 */

jA.fn.css = function(property, value)
{
    var css = ''

    /** Set single CSS : If CSS and content is not empty, then set the CSS */
    if(property != null && value != null)
    {
        css = property + ':' + value + ';'
    }
    /** Set multi CSS : If CSS is a Object */
    else if(typeof property === 'object' && !Array.isArray(property) && value == null)
    {
        for(var i in property)
            if(property.hasOwnProperty(i))
                css += i + ':' + property[i] + ';'
    }
    /** Get multi CSS : If style name is a array and have only key */
    else if(Array.isArray(property) && value == null)
    {
        var cssObject = {}

        this.each(function(){ for(var i in property) cssObject[property[i]] = jA(this).getCss(property[i]) })

        return cssObject
    }
    /** Get single CSS : If only style name */
    else if(property != null && value == null)
    {
        return jA(this).getCss(property)
    }

    return this.each(function()
    {
        if(typeof this.style == 'undefined')
            return

        this.style.cssText = this.style.cssText + css
    })
}

/**
 * hasClass
 *
 * 檢查元素是否有該類別（Class）名稱。
 */

jA.fn.hasClass = function(classes)
{
    if(0 in this)
        if(this[0].classList)
            return this[0].classList.contains(classes)
        else
            return new RegExp('(^| )' + classes + '( |$)', 'gi').test(this[0].className)
}

/**
 * classList
 *
 * 回傳元素的類別陣列。
 */

jA.fn.classList = function()
{
    var classes = [];

    if(0 in this)
        if(this[0].classList)
            for(var i=0; i<this[0].classList.length; i++)
                classes.push(this[0].classList[i]);
        else
            for(var i in this[0].className.split(' '))
                classes.push(this[0].className.split(' ')[i]);

    return classes;
}

/**
 * addClass
 *
 * 替元素加上單個、多個樣式類別。
 */

jA.fn.addClass = function(classes)
{
    if(classes === null)
        return;

    return this.each(function()
    {
        var list = classes.split(' ');

        for(var i in list)
        {
            if(list[i] === '')
                continue;

            if(this.classList)
                this.classList.add(list[i]);
            else
                this.className += ' ' + list[i];
        }
    });
}

/**
 * removeClass
 *
 * 替元素移除單個、多個樣式類別。
 */

jA.fn.removeClass = function(classes)
{
    return this.each(function()
    {
        if(!classes)
        {
            this.className = '';
        }
        else
        {
            var list = classes.split(' ');

            for(var i in list)
            {
                if(list[i] == '')
                    continue;

                /** If there's classList, the just remove it from classList, otherwise we replace the string which is in the (class="")*/
                if(this.classList)
                    this.classList.remove(list[i]);
                else if(typeof this.className !== 'undefined')
                    this.className = this.className.replace(new RegExp('(^|\\b)' + classes.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }
    })
}

/**
 * toggleClass
 *
 * 替元素切換單個、多個樣式類別。
 */

jA.fn.toggleClass = function(classes)
{
    return this.each(function()
    {
        var list, index, objClassList;

        list = classes.split(' ');

        for(var i in list)
        {
            if(this.classList)
            {
                this.classList.toggle(list[i])
            }
            else
            {
                /** Split the class */
                objClassList = this.className.split(' ');
                /** Is the class in class list already? */
                index = list.indexOf(list[i]);

                /** If already existed, we remove it, otherwise we add it */
                if(index >= 0)
                    objClassList.splice(index, 1);
                else
                    objClassList.push(list[i]);

                this.className = list[i].join(' ');
            }
        }
    });
}

/**
 * getCss
 *
 * 取得元素的已計算樣式。
 */

jA.fn.getCss = function(property)
{
    /** Get computed style */
    try
    {
        return 0 in this ? document.defaultView.getComputedStyle(this[0], null).getPropertyValue(property) : null;
    }
    catch(err)
    {
        return null;
    }
}