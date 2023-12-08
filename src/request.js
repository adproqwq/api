function getInput(){
    var parameter = document.getElementById('name').value;
    get(parameter);
};

function get(parameter){
    axios.get('/oi/API/QQ_Music/?msg=' + parameter)
    .then(function(data){
            console.log(data);
            initTable = `
            <table border="1">
                <thead>
                    <tr>
                        <th>收藏</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>`;
            document.getElementById('songList').innerHTML = initTable;
        }
    );
};