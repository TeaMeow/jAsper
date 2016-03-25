jA.fn.formExplode = function()
{
    var formData = {};

    this.find('[name]').each(function()
    {
        if(this.type !== 'file')
            formData[this.name] = this.value == '' ? undefined : this.value;
    });

    return formData;
}