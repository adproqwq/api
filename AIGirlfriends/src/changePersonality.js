document.getElementById("personality").addEventListener("change",function(e){
    if(e.target.tagName == "SELECT"){
        document.getElementById('chatArea').innerHTML = '';
    };
});