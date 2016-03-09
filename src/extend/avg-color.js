/**
 * Avg Color
 * 
 * Converts an image to canvas and return the average color of the image.
 * 
 * @param string type   The color we want to get: R, G, B, RGB.
 * 
 * @return int|string
 */
 
jA.fn.avgColor = function(type)
{
    type = type || null;
    
    if(0 in this)
    {
        var img = this[0];
            
        /** Create a canvas for getting avg color */
        var canvas    = document.createElement('canvas');
        canvas.width  = img.width;
        canvas.height = img.height;
        
        /** Draw this picture to the canvas */
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, img.width, img.height);

        if(img.width <= 0 || img.height <= 0)
            return false;
        
        /** Get the result of the pixels */
        var data = context.getImageData(0, 0, img.width, img.height).data,
            r    = 0, g = 0, b = 0;

        /** Get the all average of the pixels */
        for (var row = 0; row < img.height; row++)
        {
            for (var col = 0; col < img.width; col++)
            {
                r += data[((img.width * row) + col) * 4];
                g += data[((img.width * row) + col) * 4 + 1];
                b += data[((img.width * row) + col) * 4 + 2];
            }
        }

        r /= (img.width * img.height);
        g /= (img.width * img.height);
        b /= (img.width * img.height);

        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);

        if(type !== null)
        {
            switch(type.toUpperCase())
            {
                case 'R'   : return r; break;
                case 'G'   : return g; break;
                case 'B'   : return b; break;
                case 'RGB' : return [r, g, b]; break;
            }
        }
        
        /** Return the color with 16 bits */
        return '#' + ((r << 16) | (g << 8) | b).toString(16);
    }
    else
    {
        return null;
    }
};