jA.fn.genDate = function(type, direction)
{
    type      = type      || 'day';
    direction = direction || 'past';
    
    var now = new Date();

    return this.each(function(index, el)
    {
        var year  = now.getFullYear(),
            month = 1,
            day   = 1;
                
        switch(type)
        {
            case 'year':
                for(var i = 0; i < 110; i++)
                {
                    var option      = document.createElement('option');
                        option.text = (direction == 'Past') ? year-- : year++;
                    el.add(option);
                }
                break;

            case 'month':
                for(var i = 0; i < 12; i++)
                {
                    var option      = document.createElement('option');
                        option.text = (month < 10) ? '0' + month : month;
                        
                    month++;
                    el.add(option);
                }
                break;
             
            case 'day':
                for(var i = 0; i < 31; i++)
                {
                    var option      = document.createElement('option');
                        option.text = (day < 10) ? '0' + day : day;
                        
                    day++;
                    el.add(option);
                }
                break;
        }
    });
}