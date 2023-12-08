function getTextareaValue(){
    var parameter = document.getElementById('url').value;
    get(parameter);
};

function get(parameter){
    $.ajax({
        type: 'GET',
        url: 'api/dy.php?lj=' + parameter + '&return=json',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
        },
        success: function(data){
            alert('解析完成！视频直链：' + data.url);
        }
    });
};