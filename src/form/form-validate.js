jA.fn.formValidate = function(rules, stopAtFirst)
{
    var pass    = true,
        isFirst = true;
        rules       = rules       || null,
        stopAtFirst = stopAtFirst || false;



    jA(this).find('[name]').each(function()
    {
        var jAthis     = jA(this),
            name       = this.getAttribute('name'),
            validation = jAthis.validate();

        if(!pass && !isFirst && stopAtFirst)
            return false;

        if(validation === true)
        {
            if(rules !== null && rules[name] !== undefined && rules[name].valid !== undefined)
                rules[name].valid.call(this);

            return true;
        }

        pass = false;

        if(rules !== null)
        {
            if(rules[name] !== undefined)
            {
                if(rules[name][validation] !== undefined)
                    rules[name][validation].call(this);

                if(rules[name].invalid !== undefined)
                    rules[name].invalid.call(this, name);

                isFirst = false;
            }
        }
    })

    return pass;
}