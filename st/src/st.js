function getInput(){
    var parameter = document.getElementById('tag').value;
    parameter = parameter.replace('&','&tag=');
    getImage(parameter);
};

function getImage(parameter){
    axios.get('/adpro/st/v2?r18=1&tag=' + parameter).then(function(data){
        var imageData = data.data.data;
        var showImage = `<img src=${imageData.urls.original} alt=${imageData.title}>`;
        document.getElementById('imageDisplay').innerHTML = showImage;
    });
};

/*function download(index){
    let downloadPage = window.open('','_blank');
    axios.get('/adpro/oi/API/QQ_Music/?msg=' + document.getElementById('name').value + '&n=' + index)
    .then(function(data){
        if(data.data.code == '1'){
            var songData = data.data.data;
            downloadPage.location = songData.music;
        }
        else downloadPage.alert('该歌曲出于各种原因下载失败，换一首试试吧');
    });
};*/