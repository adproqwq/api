function getInput(){
    var parameter = document.getElementById('name').value;
    get(parameter);
};

function get(parameter){
    $.ajax({
        type: 'GET',
        url: '/oi/API/QQ_Music/?msg=' + parameter,
        success: function(data){
            alert(data.data[0].url);
        }
    });
};