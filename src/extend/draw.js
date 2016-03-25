/**
 * Color Wheel
 *
 * Generate a color wheel on this canvas with autofill.
 * http://ariya.ofilabs.com/2011/02/color-wheel-on-canvas.html
 */

jA.fn.colorWheel = function(Sat, Hue)
{
    return this.each(function()
    {
        var el = this,
            context = el.getContext('2d'),
            width = parseInt(jA(this).css('width')),
            height = parseInt(jA(this).css('height')),
            cx = width / 2,
            cy = height / 2,
            radius = width / 1,
            imageData,
            pixels,
            hue, sat, value,
            i = 0, x, y, rx, ry, d,
            f, g, p, u, v, w, rgb

        imageData = context.createImageData(width, height)
        pixels = imageData.data

        for (y = 0; y < height; y = y + 1)
        {
            for (x = 0; x < width; x = x + 1, i = i + 4)
            {
                rx = x - cx
                ry = y - cy
                d = rx * rx + ry * ry
                if (d < radius * radius)
                {
                    hue = 6 * (Math.atan2(ry, rx) + Math.PI) / (2 * Math.PI)
                    sat = Math.sqrt(d) / (width / 2.3)
                    g = Math.floor(hue)
                    f = hue - g
                    u = 255 * (1 - sat)
                    v = 255 * (1 - sat * f)
                    w = 255 * (1 - sat * (1 - f))
                    pixels[i] = [255, v, u, u, w, 255, 255][g]
                    pixels[i + 1] = [w, 255, 255, v, u, u, w][g]
                    pixels[i + 2] = [u, u, w, 255, 255, v, u][g]
                    pixels[i + 3] = 255
                }
            }
        }

        context.putImageData(imageData, 0, 0)
    })
}




/**
 * Color Picker
 *
 * Use this canvas as a color picker, then call the function and brings the color info where user click.
 */

jA.fn.picker = function(Callback)
{
    if(typeof Callback !== 'undefined')
        return this.each(function()
        {
            mouseDown = false

            jA(this).mousedown(function()
            {
                mouseDown = true
            })
            jA(this).mouseup(function()
            {
                mouseDown = false
            })
            jA(this).mousemove(function(e)
            {
                if(mouseDown)
                {
                    /** Get canvas as 2d first, so we can use getImageData later */
                    var c2d = this.getContext('2d'),
                        /** Get the position where the user click */
                        rect = this.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top,
                        color = c2d.getImageData(x, y, 1, 1).data

                    /** Call the function which the user want and brings the color info */
                    Callback(color)
                }
            })
        })
}




/**
 * Grayscale Picker
 *
 * Generate a wide stick with grayscale style.
 */

jA.fn.grayColor = function()
{
    return this.each(function()
    {
        var c2d = this.getContext('2d'),
            w = parseInt(jA(this).css('width')),
            h = parseInt(jA(this).css('height')),
            /** Generate gradient */
            grd = c2d.createLinearGradient(w, 0, 0, 0)

        grd.addColorStop(0, 'black')
        grd.addColorStop(1, 'white')

        /** Create a rect then fill with the gradient */
        c2d.fillStyle = grd
        c2d.fillRect(0, 0, w, h)
    })
}




/**
 * Drawable
 *
 * This function makes your canvas can be drawed.
 */

jA.fn.drawable = function()
{
    return this.each(function()
    {
        /**
         * Create A Temporary Canvas
         */

        var canvas = document.createElement('canvas')

        /** name this canvas, so we can generate many of them ;) */
        canvas.id = this.id + '-temp'
        canvas.width = this.width
        canvas.height = this.height

        /** Hide this temp canvas */
        canvas.className += ' ' + 'hidden'

        /** Write into document */
        this.parentNode.appendChild(canvas)


        /**
         * Set Value
         */

        /** Set the name of the temporary canvas */
        this.drawTemp = canvas.id

        /** Set default tool */
        this.drawUsing = 'pencil'

        /** Set line width */
        this.drawWidth = 1

        /**
         * Tool Calling
         *
         * Everytime we get the event(mousemove, down, up), we call the tool function which we using now.
         */

        /** Create a handle function for those drawing */
        this.drawProcess = function(e)
        {
            /** Get mouse position in canvas */
            if (e.layerX || ev.layerX == 0) {
                e._x = e.layerX;
                e._y = e.layerY;
            // Opera
            } else if (e.offsetX || e.offsetX == 0) {
                e._x = e.offsetX;
                e._y = e.offsetY;
            }

            var tool = new this.drawTools[this.drawUsing]

            /** Call the tool which we are using and our action(mouseup, down, move) now  */
            tool[e.type](e)
        }



        /** Bind this canvas with mouse events, so we can handle it */
        jA(this).on('mousedown mouseup mousemove', this.drawProcess)


    })
}




/**
 * Tool
 *
 * What kind of the tools are allowed to use in this canvas?
 * We'll add that kind of the tools into this canvas for later to use.
 */

jA.fn.tool = function(tools)
{
    return this.each(function()
    {
        this.drawTools = {}
        var canvas = this,
            c2d = this.getContext('2d'),
            /** Split the tools by space */
            list = tools.split(' ')

        /** Add tools into the object of the canvas, so we can use it */
        for(var i in list)
        {
            switch(list[i])
            {
                case 'pencil':
                    this.drawTools.pencil = function()
                    {

                        this.mousedown = function(e)
                        {
                            canvas.drawSwitch = true

                            c2d.beginPath()
                            c2d.moveTo(e._x, e._y)
                        }

                        this.mousemove = function(e)
                        {
                            /** Only do it while drawing */
                            if(!canvas.drawSwitch) return

                            c2d.lineTo(e._x, e._y)
                            c2d.lineCap = 'round'
                            c2d.lineWidth = canvas.drawWidth
                            c2d.strokeStyle = canvas.drawColor
                            c2d.stroke()
                        }

                        this.mouseup = function(e)
                        {
                            canvas.drawSwitch = false
                        }
                    }
                    break

                case 'rect':
                    this.drawTools.rect = function()
                    {

                        this.mousedown = function(e)
                        {
                            canvas.drawSwitch = true

                            canvas.x0 = e._x
		                    canvas.y0 = e._y
                        }

                        this.mousemove = function(e)
                        {
                            if(!canvas.drawSwitch) return

                            var x = Math.min(e._x,	canvas.x0),
                                y = Math.min(e._y,	canvas.y0),
                                w = Math.abs(e._x - canvas.x0),
                                h = Math.abs(e._y - canvas.y0);

                            c2d.clearRect(0, 0, canvas.width, canvas.height);

                            if (!w || !h) {
                                return;
                            }

                            c2d.strokeStyle = canvas.drawColor
                            c2d.strokeRect(x, y, w, h);
                        }

                        this.mouseup = function(e)
                        {
                            canvas.drawSwitch = false
                        }
                    }
                    break
            }
        }
    })
}




/**
 * Change Drawing Color
 *
 * Change the line or the pencil color by HEX.
 */

jA.fn.changeColor = function(HEX)
{
    return this.each(function()
    {
        /** If we got an array, we convert it to HEX, otherwise just apply it */
        this.drawColor = (typeof HEX !== 'string') ? ToHEX(HEX)
                                                   : HEX
    })
}




/**
 * Change Tool
 */

jA.fn.changeTool = function(tool)
{
    return this.each(function()
    {
        this.drawUsing = tool
    })
}



/**
 * Return Canvas 2D
 */

jA.fn.c2d = function()
{
    return 0 in this ? this[0].getContext('2d')
                     : null
}




/**
 * Line Preview
 *
 * Create an canvas with line preview
 */

jA.fn.linePreview = function(width, lineCap)
{
    width = width || 1
    lineCap = lineCap || 'round'

    return this.each(function()
    {
        var c2d = this.getContext('2d')

        /** Clear the last time we drawed */
        c2d.clearRect(0, 0, this.width, this.height)

        /** Draw a 'S' line */
        c2d.beginPath()
        c2d.moveTo(20,20)
        c2d.bezierCurveTo(50, 50, 120, 0, 150, 20)

        /** Set the style of this line */
        c2d.lineWidth = width
        c2d.lineCap = lineCap

        c2d.stroke()
    })
}




/**
 * Set Line Width
 */

jA.fn.setLineWidth = function(width)
{
    width = width || 1

    return this.each(function()
    {
        this.drawWidth = width
    })
}


/**
 * RGB To HEX
 */

function ToHEX(rgb)
{
    return '#' + ((rgb[0] << 16) | (rgb[1] << 8) | rgb[2]).toString(16)
}




/**
 * Temporary Canvas
 *
 * Sometimes, we'll need this because canvas don't support something which we need.
 */

jA.fn.tempCanvas = function()
{
    return this.each(function()
    {
        /** Create a temporary canvas */
        var canvas = document.createElement('canvas')

        /** name this canvas, so we can generate many of them ;) */
        canvas.id = this.id + '-temp'
        canvas.width = this.width
        canvas.height = this.height

        /** Hide this temp canvas */
        canvas.className += ' ' + 'hidden'

        /** Write into document */
        this.parentNode.appendChild(canvas)

        this.drawTemp = canvas.id
    })
}




/**
 * Update Canvas
 *
 *
 */

jA.fn.updateCanvas = function()
{
    return this.each(function()
    {
        var canvas = jA('#' + this.drawTemp)[0],
            c2do = this.getContext('2d'),
            c2d = canvas.getContext('2d')


        c2do.drawImage(canvas, 0, 0);
        c2d.clearRect(0, 0, canvas.width, canvas.height);
    })
}