function getInput(){
    let parameter = document.getElementById('name').value;
    let userselect = document.getElementById("searchLine");
    let index = userselect.selectedIndex;
    let line = userselect.options[index].value;
    getAnimeList(parameter,line);
};

function getAnimeList(parameter, line){
    axios.get(`/adpro/xingzhige/API/anime/?msg=${parameter}&type=${line}`).then(function(data){
        if(data.data.code == '0'){
            var result = data.data.data;
            initTable = `
            <table id="animeListTable">
                <thead>
                    <tr>
                        <th>封面</th>
                        <th>番名</th>
                        <th>状态</th>
                        <th>年份</th>
                        <th>详情</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>`;
            document.getElementById('animeList').innerHTML = initTable;
            var eachAnimeDetails = '';
            for(var i in result){
                eachAnimeDetails += `
                <tr>
                    <td><img src="https://images.weserv.nl/?url=${result[i].image}" height="200" weight="140"></td>
                    <td>${result[i].name}</td>
                    <td>${result[i].ji}</td>
                    <td>${result[i].year}</td>
                    <td><button name='more' index=${String(i)}>详情</button></td>
                </tr>`;
            };
            var animeList = document.querySelector('tbody');
            animeList.innerHTML = eachAnimeDetails;
            animeList.addEventListener('click',function(e){
                if(e.target.getAttribute('name') == 'more'){
                    var index = String(Number(e.target.getAttribute('index')) + 1);
                    localStorage.setItem('name',parameter);
                    localStorage.setItem('index',index);
                    localStorage.setItem('line',line);
                    window.open('./anime/more.html');
                }
            });
        }
        else alert('没有结果呢~换部番看看吧');
    });
};

function more(){
    let name = localStorage.getItem('name');
    let index = localStorage.getItem('index');
    let line = localStorage.getItem('line');
    axios.get(`/adpro/xingzhige/API/anime/?msg=${name}&n=${index}&type=${line}`).then(function(data){
        if(data.data.code == '0'){
            let animeData = data.data.data;
            document.getElementById('animeImg').setAttribute('src',`https://images.weserv.nl/?url=${animeData.image}`);
            document.getElementById('animeName').innerText = animeData.name;
            document.getElementById('country').innerText = animeData.country;
            document.getElementById('year').innerText = animeData.year;
            document.getElementById('animeDesc').innerText = animeData.desc;
            document.getElementById('animeClass').innerText = animeData.class;
            let episodeList = document.getElementById('episodeList');
            for(let i in animeData.playlist){
                let episodeBtn = document.createElement('button');
                episodeBtn.setAttribute('id',`episode${String(Number(i) + 1)}`);
                episodeBtn.setAttribute('class','btn btn1');
                episodeBtn.setAttribute('type','button');
                episodeBtn.setAttribute('onclick',`play(${Number(i) + 1});`);
                episodeList.appendChild(episodeBtn);
                document.getElementById(`episode${String(Number(i) + 1)}`).textContent = animeData.playlist[i];
            }
        }
    });
};

function play(episode){
    let playPage = window.open('','_blank');
    let name = localStorage.getItem('name');
    let index = localStorage.getItem('index');
    let line = localStorage.getItem('line');
    axios.get(`/adpro/xingzhige/API/anime/?msg=${name}&n=${index}&nn=${episode}&type=${line}`).then(function(data){
        if(data.data.code == '0'){
            let animeData = data.data.data;
            playPage.location = animeData.play_url;
        }
    });
};