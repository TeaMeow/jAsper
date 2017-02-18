/**
 * cookie
 *
 * 設置、編輯、移除 Cookie。當傳入的值是空白的時候會取得該 Cookie，
 * 如果傳入的選項是 `-1` 那麼則是移除該 Cookie。選項接受 `expires`、`domain` 和 `path`。
 */

jA.cookie = function(name, value, options)
{
    /** If value is not null, means this is SET a cookie, not GET a cookie */
    if(value != null)
    {
        var expire = (options instanceof Object && typeof options.expires != 'undefined') ? options.expires : 365,
            domain = (options instanceof Object && typeof options.domain  != 'undefined') ? ' domain=' + options.domain + ';' : '',
            path   = ' path=' + (options instanceof Object && typeof options.path != 'undefined' ? options.path : '/') + ';';

        var d = new Date();

        /** If Options is not object but -1, means user want to delete this cookie, so we given a expired time */
        if(!options instanceof Object && options === -1)
            d.setTime(d.getTime() - (24 * 60 * 60 * 1000));
        else
            d.setTime(d.getTime() + (expire * 24 * 60 * 60 * 1000));

        /** Convert the time to cookie format */
        var expires = 'expires=' + d.toUTCString() + ';';

        /** Set the cookie */
        document.cookie = name + '=' + (value || '') + '; ' + expires + domain + path;
    }
    else
    {
        var cookieName = name + '=',
            list       = document.cookie.split(';');

        for(var i in list)
        {
            var cookie = list[i];

            /** If first word is blank, then get content without blank */
            while(cookie.charAt(0)==' ')
                cookie = cookie.substring(1);

            /** Get the value of cookie*/
            if(cookie.indexOf(cookieName) != -1)
                return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return 'undefined';
}