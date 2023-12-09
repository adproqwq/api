document.getElementById("searchTarget").addEventListener("change",function(e){
    if(e.target.tagName == "SELECT"){
        var userselect = document.getElementById("searchTarget");
        var index = userselect.selectedIndex;
        document.getElementById('import').src = './src/' + userselect.options[index].value + '.js';
        document.body.appendChild(document.getElementById('import'));
        document.body.appendChild('<script src="./src/changeTarget.js"></script>');
    };
});