function getTextareaValue(){
    var parameter = document.getElementById('url').value;
    get(parameter);
};

function get(parameter){
    $.get('api/dy.php?lj=' + parameter + '&return=json',function(data){
        alert('解析完成！视频直链：' + data.url);
    });
};