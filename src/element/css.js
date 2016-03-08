/**
 * Css Animate
 * 
 * Animate a css animation.
 * 
 * @param string   animate    The name of the animation
 * @param func|int callback   The callback when the animation ended, or the animation time.
 * @param int      time       The animation time.
 */

$.fn.cssAnimate = function(animate, callback, time)
{
    /** Animate list */
    //var animateList = 'slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp'
    
    /** If someone using callback field as time.. */
    if(typeof callback == 'number')
        time = callback;
    
    /** Turn millionsecond to float (ex: 300 -> 0.3), then turn float to string and remove the dot (0.3 -> 03 -> 3)*/
    var timer = parseInt((time / 1000).toString().replace('.', ''), 10);
        timer = time < 1000 ? '0' + timer : timer;

    /** Select animation duration by Time */      
    time = isNaN(time) ? '' : ' animated' + timer + 's';
    
    return this.each(function()
    {
        /** For passing $(this) to inside function */
        var that = this;
        
        /** If last animation not end .. */
        //if($(this).hasClass(Animate))
            //$(this).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend').removeClass(animateList).removeClass(animate + ' animated' + time)

        /** Add animation */
        $(this).addClass(animate + ' animated' + time)
               /** Once the animation end, we remove the animate class and callback **/
               .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function()
                {
                   $(that).removeClass(animate + ' animated' + time);
                   
                   if((typeof callback !== 'undefined' && callback != null) && typeof callback !== 'number')
                        callback.call(that);
                });
    });
}

  
  
  
/**
 * CSS
 *
 * Set CSS to elements or get CSS from elements.
 * 
 * @param mixed      property   Can be a object and the key as the css property, and the value as the property value.
 * @param int|string value      The value of the css property.
 * 
 * @return mixed
 */

$.fn.css = function(property, value)
{
    var css = '';
    
    /** Set single CSS : If CSS and content is not empty, then set the CSS */
    if(property != null && value != null)
    {
        css = property + ':' + value + ';';
    }
    /** Set multi CSS : If CSS is a Object */
    else if(typeof Property === 'object' && !Array.isArray(property) && value == null)
    {
        for(var i in property)
            if(property.hasOwnProperty(i))
                css += i + ':' + property[i] + ';';
    }
    /** Get multi CSS : If style name is a array and have only key */
    else if(Array.isArray(property) && value == null)
    {
        var cssObject = {};
        
        this.each(function(){ for(var i in property) cssObject[property[i]] = $(this).getCss(property[i]); })
        
        return cssObject;
    }
    /** Get single CSS : If only style name */
    else if(property != null && value == null)
    {
        return $(this).getCss(property);
    }
    
    return this.each(function()
    {
        if(typeof this.style == 'undefined')
            return;
        
        this.style.cssText = this.style.cssText + css;
    })
}




/**
 * Has Class
 * 
 * Returns true when the class(es) does exist.
 * 
 * @param string classes   The class name, can be a list split by the space.
 * 
 * @return bool
 */

$.fn.hasClass = function(classes)
{
    if(0 in this)
        if(this[0].classList)
            return this[0].classList.contains(classes);
        else
            return new RegExp('(^| )' + classes + '( |$)', 'gi').test(this[0].className);
}
        
        
        

/**
 * Class List
 * 
 * Returns a class list of the element.
 * 
 * @return array
 */

$.fn.classList = function()
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
 * Add Class
 * 
 * Add a single or multiple classes to an element.
 * 
 * @param string classes   The name of the class, can be a list split by space.
 * 
 * @return object
 */

$.fn.addClass = function(classes)
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
 * Remove Class
 * 
 * Remove a single or multiple classes of the element.
 * 
 * @param string classes   The name of the class can be a list split by the space.
 * 
 * @return object
 */

$.fn.removeClass = function(classes)
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
 * Toggle Class
 * 
 * Toggle a single or multiple classes, add the class when the class is not existed, and remove the class when it does exist.
 * 
 * @param string classes   The name of the class, can be a list split by the space.
 * 
 * @return object
 */

$.fn.toggleClass = function(classes)
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
 * Get CSS
 */

$.fn.getCss = function(property)
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