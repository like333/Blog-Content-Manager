function parseFormData(form){
    let f = form.serializeArray();
    let result = {};
    f.forEach(function(item){
        result[item.name] =item.value;
    })
    return result;
}