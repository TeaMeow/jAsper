/**
 * avgColor
 *
 * 將圖片轉換成 Canvas 然後取得其中的平均色。
 *
 * 來源 https://tech.mozilla.com.tw/posts/5355/%E5%9C%A8-firefox-os-%E5%8F%96%E5%9C%96%E7%89%87%E8%89%B2%E5%BD%A9%E5%B9%B3%E5%9D%87%E5%80%BC%E4%B9%8B%E4%BA%8C%E4%B8%89%E4%BA%8B
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