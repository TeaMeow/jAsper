/**
 * wrap
 *
 * 將目前元素用一個指定元素包起來。
 */

jA.fn.wrap = function(element)
{
    return this.each(function()
    {
        this.parentNode.insertBefore(element, this)
        element.appendChild(this)
    })
}

/**
 * append
 *
 * 在目前元素後面新增一個元素。
 */

jA.fn.append = function(html)
{
    if(html != null && typeof html == 'object')
        return this.each(function(){ this.appendChild(html) })
    else if(html != null)
        return this.each(function(){ this.innerHTML += html })
}

/**
 * after
 *
 * 在目前元素後面以 HTML 新增一個元素。
 */

jA.fn.after = function(html)
{
    if(html != null)
        return this.each(function(){ this.insertAdjacentHTML('afterend', html) })
}

/**
 * before
 *
 * 在目前元素前面以 HTML 新增一個元素。
 */

jA.fn.before = function(html)
{
    if(html != null)
        return this.each(function(){ this.insertAdjacentHTML('beforeBegin', html) })
}

/**
 * prepend
 *
 * 在目前元素前面以 HTML 新增一個元素。
 */

jA.fn.prepend = function(html)
{
    if(html != null)
    {
        return this.each(function()
        {
            var template = document.createElement('template')
            template.innerHTML = html

            if(typeof this.nodeType !== 'undefined')
                if(this.firstChild)
                    return this.insertBefore(template.content, this.firstChild)
                else
                    return this.appendChild(template.content)
        })
    }
}

/**
 * appendTo
 *
 * 將目前的元素移動到指定元素的後面。
 */

jA.fn.appendTo = function(selector)
{
    return this.each(function()
    {
        var that = this

        jA(selector).each(function()
        {
            this.appendChild(that, this.nextSibling)
        })
    })
}

/**
 * prependTo
 *
 * 將目前的元素移動到指定元素的前面。
 */

jA.fn.prependTo = function(selector)
{
    return this.each(function()
    {
        var that = this

        jA(selector).each(function()
        {
            if(this.firstChild)
                return this.insertBefore(that, this.firstChild)
            else
                return this.appendChild(that)
        })
    })
}

/**
 * insertAfter
 *
 * 將目前的元素插入到指定元素的後面。
 */

jA.fn.insertAfter = function(selector)
{
    return this.each(function()
    {
        var that = this

        jA(selector).each(function()
        {
            this.parentNode.insertBefore(that, this.nextSibling)
        })
    })
}

/**
 * insertBefore
 *
 * 將目前的元素插入到指定元素的前面。
 */

jA.fn.insertBefore = function(selector)
{
    return this.each(function()
    {
        var that = this

        jA(selector).each(function()
        {
            this.insertAdjacentHTML('beforeBegin', that)
        })
    })
}

/**
 * template
 *
 * 取得 `<template>` 的內容。
 */

jA.fn.template = function()
{
    return jA(this.clone()[0].content).children()
}

/**
 * clone
 *
 * 複製元素。
 */

jA.fn.clone = function(deep)
{
    /** Copy child too? */
    deep = (typeof deep == 'undefined') ? true : deep

    var cloneList = []

    /** Clone the elements */
    this.each(function()
    {
        cloneList.push(this.cloneNode(deep))
    })

    /** Using the elements which we cloned */
    return jA(cloneList)
}

/**
 * remove
 *
 * 移除元素。
 */

jA.fn.remove = function()
{
    return this.each(function(){ this.parentNode.removeChild(this) })
}

/**
 * children
 *
 * 取得元素的子節點。
 */

jA.fn.children = function()
{
    var list = []

    this.each(function(i, el)
    {
        /** Push the child nodes to the list*/
        list.push.apply(list, el.children)
    })

    /** Return the list with $ */
    return jA(list)
}

/**
 * find
 *
 * 在目前的元素中搜尋指定節點。
 */

jA.fn.find = function(selector)
{
    /** The selector must be string */
    if(typeof selector !== 'string')
        return null

    var list = []

    this.each(function(i, el)
    {
        /** Push the child nodes to the list*/
        list.push.apply(list, el.querySelectorAll(selector))
    })

    /** Return the list with $ */
    return list.length ? jA(list) : null
}

/**
 * parent
 *
 * 取得目前元素的父節點。
 */

jA.fn.parent = function()
{
    return 0 in this ? jA(this[0].parentNode) : null
}

/**
 * parents
 *
 * 取得目前元素的所有父節點。
 */

jA.fn.parents = function(selector)
{
    var that     = this,
        selector = selector || null,
        parents  = []

    if(selector !== null)
        var selector = jA(selector)

    /** Non stop loop, until there's no parent of the element */
    while(that)
    {
        /** Not this one, we go upper */
        that = jA(that).parent()[0]

        /** No parent? */
        if(!that)
            break

        /** Push to the parents list if it's in the selector or just push it if we don't set a selector */
        if(selector == null || (selector !== null && Array.prototype.indexOf.call(selector, that) !== -1))
            parents.push(that)
    }

    return jA(parents)
}

/**
 * closest
 *
 * 取得此元素的指定父節點。
 */

jA.fn.closest = function(selector)
{
    var that     = this,
        selector = jA(selector)

    /** Non stop loop, until there's no parent of the element */
    while(true)
    {
        /** Not this one, we go upper */
        that = jA(that).parent()[0]

        /** No parent? */
        if(!that)
            return null

        /** Is the parent in the closest selector? If it do, then the parent is the closest element which we want */
        if(Array.prototype.indexOf.call(selector, that) !== -1)
            return jA(that)
    }
}

/**
 * contains
 *
 * 此元素是否含有我們指定的子節點。
 */

jA.fn.contains = function(wants)
{
    var selector = jA(wants),
        isTrue   = false

    this.each(function(i, el)
    {
        var children = el.childNodes

        for(var si = 0; si < selector.length; si++)
        {
            if(Array.prototype.indexOf.call(children, selector[si]) != -1)
                isTrue = true
        }
    })

    return isTrue
}

/**
 * next
 *
 * 取得此元素的下一個元素。
 */

jA.fn.next = function()
{
    if(0 in this)
    {
        var next = this[0].nextElementSibling

        if(next)
            return jA(next)
        else
            return null
    }
    else
    {
        return null
    }
}

/**
 * prev
 *
 * 取得此元素的上一個元素。
 */

jA.fn.prev = function()
{
    if(0 in this)
    {
        var prev = this[0].previousElementSibling

        if(prev)
            return jA(prev)
        else
            return null
    }
    else
    {
        return null
    }
}
