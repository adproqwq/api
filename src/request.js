function getInput(){
    var parameter = document.getElementById('name').value;
    get(parameter);
};

function get(parameter){
    axios('/oi/API/QQ_Music/?msg=' + parameter)
    .then(data => {
            alert(data.data[0].song);
        }
    );
};