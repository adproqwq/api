document.getElementById("searchTarget").addEventListener("change",function(e){
    if(e.target.tagName == "SELECT"){
        var userselect = document.getElementById("searchTarget");
        var index = userselect.selectedIndex;
        if(userselect.options[index].value == 'QQMusic') document.getElementById('import').src = './src/' + userselect.options[index].value + '.js';
        else if(userselect.options[index].value == 'netease') document.getElementById('import').src = './src/' + userselect.options[index].value + '.js';
    };
});