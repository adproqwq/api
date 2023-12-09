document.getElementById("searchTarget").addEventListener("change",function(e){
    if(e.target.tagName == "SELECT"){
        var userselect = document.getElementById("searchTarget");
        var index = userselect.selectedIndex;
        document.getElementById('import').src = './src/' + userselect.options[index].value + '.js';
        axios.get(document.getElementById('import').src);
    };
});