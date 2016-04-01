###
   ,,
   db       db
           ;MM:
 `7MM     ,V^MM.    ,pP"Ybd `7MMpdMAo.  .gP"Ya `7Mb,od8
   MM    ,M  `MM    8I   `"   MM   `Wb ,M'   Yb  MM' "'
   MM    AbmmmqMA   `YMMMa.   MM    M8 8M""""""  MM
   MM   A'     VML  L.   I8   MM   ,AP YM.    ,  MM
   MM .AMA.   .AMMA.M9mmmP'   MMbmmd'   `Mbmmd'.JMML.
QO MP                         MM
`bmP                        .JMML.
                   contributors
          ZeptoJS   : http://goo.gl/yFtHui
          Slide     : http://goo.gl/VjYiOU
          Serialize : http://goo.gl/UTqTzI
          AvgColor  : http://goo.gl/eGcxJ5
          Library   : http://goo.gl/ECZAWR
          isNumeric : http://goo.gl/0qmDLc
###

Jasper = do ->
	
  jasper    = {}
  queue     = []
  container = []
  slice     = container.slice
  filter    = container.filter
  isArray   = Array.isArray || (obj) -> obj instanceof Array
  isObject  = (obj) -> obj instanceof Object

  
  
  ###
  Init
  
  Detect the type of the selector, and do the right choose.
  ###
  
  jasper.init = (selector, context) ->
		
    # If the selector is a string not an object
    if typeof selector is 'string'
      
      # Call the fragment function if the selector contains the "tag" syntax
      if selector[0] is '<'
      	return jasper.fragment selector
      
      # Remove the spaces in the selector
      selector = selector.trim()
     	
      # Call the jAsper with the find function if there's a context
      if context?
      	return jA(selector).find context
      
      dom = jasper.select document, selector
    
    
    # If the selector is a jAsper object
    else if jasper.isJasper selector
      return selector
    
    # Or none of them
    else
    	
      # Remove the null value if the selector is an array (from eq())
      if isArray selector
        dom = filter.call selector, (item) -> item isnt null

      else if isObject selector
        dom      = [selector]
        selector = null
      
    return jasper.Jasper dom, selector
  
  
  
  ###
  Is Jasper
  
  Returns true when the object is a jAsper object.
  ###
  
  jasper.isJasper = (obj) ->
  	obj instanceof jasper.Jasper;
    
  
  
  ###
  Select
  
  Select the dom elements by the selector.
  ###

  jasper.select = (main, selector) ->
  	try
      slice.call main.querySelectorAll selector
    catch error
    	console.log '[jAsper ERR] Cannot select the elements with the selector:' + selector
  
  
  
  ###
  Fragment
  
  Build up the fragments, make the <tag> become a real element.
  ###
  
  jasper.fragment = (selector) ->
    
    noContent    = /^<([^\/].*?)>$/
    regEx        = /(?:<)(.*?)( .*?)?(?:>)/
    match        = regEx.exec selector
    # <div class="foo" bar="BARRRR">
    mainAll      = match[0]
    # div
    mainElement  = match[1]
    # class="foo" bar="BARRRR"
    mainAttrs    = match[2]
    hasAttr      = typeof mainAttrs isnt 'undefined'
    hasContent   = !mainAll.match noContent


    # Is this tag IS a container tag? (ex: div, section)
    if hasContent
      
      # Capture the contents of it
      contentRegEx = new RegExp(mainAll + '(.*?)(?:<\/' + mainElement + '>)$')
      contentMatch = contentRegEx.exec selector
      content      = contentMatch[1]


    # Split Attrs into an array like this [KEY, VALUE, KEY, VALUE]
    if hasAttr
      attrs   = mainAttrs.split(/(?:\s)?(.*?)=(?:"|')(.*?)(?:"|')/).filter Boolean
      attrObj = {}
          
      # Get odd and even values, convert [KEY, VALUE, KEY, VALUE] to {KEY: VALUE, KEY: VALUE}
      for i in attrs.length
        if (i + 2) % 2 is 0
          attrObj[attrs[i]] = attrs[i + 1];


    $element = jA document.createElement mainElement

    if hasAttr
      $element.attr attrObj

    if hasContent
      $element.html content

    return $element

  
  
  ###
  Jasper
  
  
  ###
  
  jasper.Jasper = (dom, selector) -> 
    dom           = dom || [];
    dom.__proto__ = jA.fn;
    dom.selector  = selector || '';
    
    return dom
      


  ###
  jA

  The main function.
  ###

  jA = (selector, context) ->

    if typeof selector is 'function'
      document.addEventListener 'DOMContentLoaded', selector
    else
      jasper.init selector, context

  
  
  ###
  Library
  
  The core functions.
  ###
  
  jA.fn = 
    
    
    
    ###
    Each
    
    
    ###
    
    each: (callback) ->
      container.every.call @, (index, element) ->
        callback.call(index, element, index) isnt false
      
      return @
      
    
    
    ###
    Slice
    
    
    ###
    
    slice: ->
      jA slice.apply @, arguments
    
    
    
    ###
    Eq
    
    
    ###
    
    eq: (index) ->
      @.slice index, index + 1
  
  
  
  # Bind the global function
  window.jA = jA if !window.jA
    
jA ->
	console.log jA 'div'