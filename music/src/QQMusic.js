function getJsonArrayLength(jsonArray) {
    let length = 0;
    for (let i in jsonArray) {
        length++;
    }
    return length;
};

function getInput() {
    let log = self.sessionStorage.getItem('log');
    let time = dayjs().format('MMDDHHmmss') + dayjs().millisecond();
    let searchKey = document.getElementById('name').value;
    let successful = document.getElementById('songTable');
    if (successful != null) successful = true;
    else successful = false;
    let logFormat = {
        "time": time,
        "do": "search",
        "value": [
            {
                "searchKey": searchKey,
                "downloadIndex": null,
                "changeTarget": null,
            }
        ],
        "successful": successful
    };
    let index = getJsonArrayLength(log);
    log[index] = logFormat;
    self.sessionStorage.setItem('log', JSON.stringify(log));
    getSongList(searchKey);
};

function getSongList(parameter){
    axios.get('/adpro/oi/API/QQ_Music/?msg=' + parameter)
    .then(function(data){
        if(data.data.code == '1'){
            var songData = data.data.data;
            initTable = `
            <table id="songTable" border="1">
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
                var songSingers;
                songSingers = '';
                for(var j in songData[i].singers){
                    songSingers += songData[i].singers[j] + '，';
                }
                eachSongDetails += `
                <tr>
                    <td><img src="${songData[i].picture}" height="100" weight="100"></td>
                    <td>${songSingers}</td>
                    <td>${songData[i].album}</td>
                    <td>${songData[i].song}</td>
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
    axios.get('/adpro/oi/API/QQ_Music/?msg=' + document.getElementById('name').value + '&n=' + index)
    .then(function(data){
        if(data.data.code == '1'){
            var songData = data.data.data;
            downloadPage.location = songData.music;
        }
        else downloadPage.alert('该歌曲出于各种原因下载失败，换一首试试吧');
    });
};