alert('因QQ音乐对非加密请求做了限制，QQ音乐基本寄了，目前还勉强能用。等待上游API抢救');

function getJsonArrayLength(jsonArray) {
    let length = 0;
    for (let i in jsonArray) {
        length++;
    }
    return length;
};

function getInput() {
    let log = JSON.parse(self.localStorage.getItem('log'));
    let time = dayjs().format('MMDDHHmmss') + dayjs().millisecond();
    let searchKey = document.getElementById('name').value;
    let successful = setTimeout(1000, () => {
        return document.getElementById('songTable');
    });
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
    self.localStorage.setItem('log', JSON.stringify(log));
    layer.msg('正在搜索',{icon: 0});
    getSongList(searchKey);
};

function getSongList(parameter) {
    axios.get('/adpro/oi/API/QQ_Music/?msg=' + parameter)
        .then(function (data) {
            if (data.data.code == '1') {
                var songData = data.data.data;
                initTable = `
            <table id="songTable" class="layui-table">
                <thead>
                    <tr>
                        <th>封面图</th>
                        <th>歌手</th>
                        <th>歌名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>`;
                document.getElementById('songList').innerHTML = initTable;
                var eachSongDetails = '';
                for (var i in songData) {
                    var songSingers;
                    songSingers = '';
                    for (var j in songData[i].singer) {
                        songSingers += songData[i].singer[j] + '，';
                    }
                    eachSongDetails += `
                    <tr>
                        <td><img id="songPic" class="flow-demo-lazyimg" src="${songData[i].picture}" height="100" weight="100"></td>
                        <td>${songSingers}</td>
                        <td>${songData[i].song}</td>
                        <td><button name="download" class="layui-btn layui-btn-primary layui-border-green" index=${String(i)}>下载</button></td>
                    </tr>`;
                };
                var songList = document.querySelector('tbody');
                songList.innerHTML = eachSongDetails;
                songList.addEventListener('click', function (e) {
                    if (e.target.getAttribute('name') == 'download') {
                        var index = String(Number(e.target.getAttribute('index')) + 1);
                        download(index);
                    }
                });
            }
            else alert('搜索失败，换个关键词试试');
        });
};

function download(index) {
    let log = JSON.parse(self.localStorage.getItem('log'));
    let time = dayjs().format('MMDDHHmmss') + dayjs().millisecond();
    let searchKey = document.getElementById('name').value;
    let downloadIndex = Number(index) - 1;
    let logFormat = {
        "time": time,
        "do": "download",
        "value": [
            {
                "searchKey": searchKey,
                "downloadIndex": downloadIndex,
                "changeTarget": null
            }
        ],
        "successful": true,
    };
    let arrayIndex = getJsonArrayLength(log);
    log[arrayIndex] = logFormat;
    self.localStorage.setItem('log', JSON.stringify(log));

    let downloadPage = window.open('', '_blank');
    axios.get('/adpro/oi/API/QQ_Music/?msg=' + document.getElementById('name').value + '&n=' + index)
        .then(function (data) {
            if (data.data.code == '1') {
                var songData = data.data.data;
                downloadPage.location = songData.music;
            }
            else downloadPage.alert('该歌曲出于各种原因下载失败，换一首试试吧');
        });
};