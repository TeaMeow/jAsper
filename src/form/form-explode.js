/**
 * formExplode
 *
 * 將一個表單的內容轉換成 FormData 格式。
 */

jA.fn.formExplode = function(extraData)
{
    var formData  = {}
    var extraData = extraData || null

    this.find('[name]').each(function()
    {
        if(this.type !== 'file')
            formData[this.name] = this.value == '' ? undefined : this.value
    })

    if(extraData !== null)
        for(var name in extraData)
            formData[name] = extraData[name]

    return formData
}