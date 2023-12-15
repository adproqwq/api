document.getElementById("searchTarget").addEventListener("change",function(e){
    if(e.target.tagName == "SELECT"){
        var userselect = document.getElementById("searchTarget");
        var index = userselect.selectedIndex;
        if(document.getElementById(userselect.options[index].value)) document.body.removeChild(document.getElementById(userselect.options[index].value));
        var newScript = document.createElement('script');
        newScript.id = userselect.options[index].value;
        newScript.src = './music/src/' + userselect.options[index].value + '.js';
        document.body.appendChild(newScript);
    };
});