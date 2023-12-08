function getTextareaValue(){
    var parameter = document.getElementById('url').value;
    get(parameter);
};

function get(parameter){
    $.ajax({
        type: 'GET',
        url: 'http://api.tangdouz.com/tangdouz/dy.php?lj=' + parameter + '&return=json',
        success: function(data){
            alert('解析完成！视频直链：' + data.url);
        }
    });
};