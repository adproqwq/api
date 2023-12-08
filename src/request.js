function getInput(){
    var parameter = document.getElementById('name').value;
    getSongList(parameter);
};

function getSongList(parameter){
    axios.get('/oi/API/QQ_Music/?msg=' + parameter)
    .then(function(data){
            var songData = data.data.data;
            console.log(songData);
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
            for(var i in songData){
                for(var j in songData[i].singers){
                    var songSingers;
                    songSingers += songData[i].singers[j] + '，';
                }
                var eachSongDetails;
                eachSongDetails += `
                <tr>
                    <td><img src="${songData[i].picture}" height="100" weight="100"></td>
                    <td>${songSingers}"</td>
                    <td>${songData[i].album}"</td>
                    <td>${songData[i].song}</td>
                    <td><button name='download' index=${String(i)}>下载</button></td>
                </tr>`;
            };
            document.querySelector('tbody').innerHTML = eachSongDetails;
        }
    );
};

function download(index){
    axios.get('/oi/API/QQ_Music/?msg=' + document.getElementById('name').value + '&n=' + index)
    .then(function(data){
        var songData = data.data.data;
        window.open(songData.music);
    });
};

var songList = document.querySelector('tbody');
songList.addEventListener('click',function(e){
    if(e.target.getAttribute('name') == 'download'){
        var index = String(Number(e.target.getAttribute('index')) + 1);
        download(index);
    }
});