/**
 * serialize
 *
 * 將表單轉換成參數字串。
 */

jA.fn.serialize = function()
{
    var array = [];

    this.each(function()
    {
        var z, a;

        for (var z = 0; z < this.elements.length; z++)
        {
            var elements = this.elements[z],
                 name    = elements.name,
                 value   = elements.value;

            /** If element's name is empty or disabled or no value, we skip this one */
            if(!name || elements.disabled || !value)
                continue;

            switch (elements.nodeName)
            {
                case 'INPUT':
                    switch(elements.type)
                    {
                        case 'text'    :
                        case 'hidden'  :
                        case 'password':
                        case 'button'  :
                        case 'reset'   :
                        case 'submit'  :
                        case 'number'  :
                        case 'email'   :
                            array.push(name + '=' + encodeURIComponent(value));
                            break;

                        case 'checkbox':
                        case 'radio'   :
                            /** No checked, we skip. */
                            if(!elements.checked)
                                continue;

                            array.push(name + '=' + encodeURIComponent(value));
                            break;
                    }
                    break;

                case 'TEXTAREA':
                    array.push(name + '=' + encodeURIComponent(value));
                    break;

                case 'SELECT':
                    switch(elements.type)
                    {
                        case 'select-one':
                            array.push(name + '=' + encodeURIComponent(value));
                            break;

                        case 'select-multiple':
                            for(var a = 0; a < elements.options.length; a++)
                            {
                                var optionValue = elements.options[a].value;

                                if (elements.options[a].selected)
                                    array.push(name + '=' + encodeURIComponent(optionValue));
                            }
                    }
                    break;

                case 'BUTTON':
                    switch(elements.type)
                    {
                        case 'reset' :
                        case 'submit':
                        case 'button':
                            array.push(name + '=' + encodeURIComponent(value));
                    }
            }
         }
    });

    /** Prevent sending a object or array via XHR cause an error */
    return array.join('&').toString();
}