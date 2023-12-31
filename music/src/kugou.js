function getInput(){
    var parameter = document.getElementById('name').value;
    getSongList(parameter);
};

function getSongList(parameter){
    axios.get('/adpro/xingzhige/API/Kugou_GN_new/?name=' + parameter)
    .then(function(data){
        if(data.data.code == '0'){
            var songData = data.data.data;
            initTable = `
            <table border="1">
                <thead>
                    <tr>
                        <th>封面图</th>
                        <th>歌手</th>
                        <th>专辑</th>
                        <th>歌名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>`;
            document.getElementById('songList').innerHTML = initTable;
            var eachSongDetails = '';
            for(var i in songData){
                eachSongDetails += `
                <tr>
                    <td><img src="${songData[i].cover}" height="100" weight="100"></td>
                    <td>${songData[i].name}</td>
                    <td>${songData[i].album}</td>
                    <td>${songData[i].songname}</td>
                    <td><button name='download' index=${String(i)}>下载</button></td>
                </tr>`;
            };
            var songList = document.querySelector('tbody');
            songList.innerHTML = eachSongDetails;
            songList.addEventListener('click',function(e){
                if(e.target.getAttribute('name') == 'download'){
                    var index = String(Number(e.target.getAttribute('index')) + 1);
                    download(index);
                }
            });
        }
        else alert('搜索失败，换个关键词试试');
    });
};

function download(index){
    let downloadPage = window.open('','_blank');
    axios.get('/adpro/xingzhige/API/Kugou_GN_new/?name=' + document.getElementById('name').value + '&n=' + index)
    .then(function(data){
        if(data.data.code == '0'){
            var songData = data.data.data;
            downloadPage.location = songData.songurl;
        }
        else downloadPage.alert('该歌曲出于各种原因下载失败，换一首试试吧');
    });
};