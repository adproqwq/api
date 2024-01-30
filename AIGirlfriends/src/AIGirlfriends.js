function getMsg(){
    let msg = document.getElementById('msg').value;
    let userselect = document.getElementById("personality");
    let index = userselect.selectedIndex;
    let personality = userselect.options[index].value;
    getResponse(msg,personality);
};

function getResponse(msg, personality){
    let name = {
        "jj": "婧枫",
        "mm": "沫沫"
    };
    document.getElementById('chatArea').innerHTML += `你：${msg}<br>`;
    axios.get(`/adpro/lolimi/API/AI/${personality}.php?msg=${msg}`).then(function(data){
        if(data.data.code == '200'){
            let result = data.data.data;
            setTimeout(function(){
                document.getElementById('chatArea').innerHTML += `${name[personality]}：${result.output}<br>`;
            },1000);
        }
        else document.getElementById('chatArea').innerHTML += `System：对方暂时离线<br>`;
    });
};