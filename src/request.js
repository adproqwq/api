function getInput(){
    var parameter = document.getElementById('name').value;
    get(parameter);
};

function get(parameter){
    axios.get('/oi/API/QQ_Music/?msg=' + parameter)
    .then(function(data){
            console.log(data);
        }
    );
};