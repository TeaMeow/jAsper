/**
 *
 * @source http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
 * @supported THEtheChad
 */

jA.deferred = function()
{
    this._always = [];
    this._done   = [];
    this._fail   = [];
}

jA.deferred.prototype =
{
    execute: function(list, args)
    {
        var i = list.length;

        args = Array.prototype.slice.call(args);

         while(i--) list[i].apply(null, args);
    },

    anyway: function()
    {
        this.execute(this._always, arguments);
        return this
    },

    resolve: function()
    {
        this.execute(this._done, arguments);
        return this
    },

    reject: function()
    {
        this.execute(this._fail, arguments);
        return this
    },

    then: function()
    {
        return this
    },

    done: function(callback)
    {
        this._done.push(callback);
        return this
    },

    fail: function(callback)
    {
        this._fail.push(callback);
        return this
    },

    always: function(callback)
    {
        this._always.push(callback);
        return this
    }
}

