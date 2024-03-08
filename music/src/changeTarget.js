const form = layui.form;
const layer = layui.layer;

layui.use(function(){
    form.on('select(searchTarget)', function(data){
        let value = data.value; // 获得被选中的值
        if(document.getElementById(value)){
            document.body.removeChild(document.getElementById(value));
        }
        var newScript = document.createElement('script');
        newScript.id = userselect.options[index].value;
        newScript.src = './music/src/' + value + '.js';
        document.body.appendChild(newScript);

        let log = [];
        let time = dayjs().format('MMDDHHmmss') + dayjs().millisecond();
        let searchKey = document.getElementById('name').value;
        let logFormat = {
            "time": time,
            "do": "change",
            "value": [
            {
                "searchKey": searchKey,
                "downloadIndex": null,
                "changeTarget": value
            }
            ],
            "successful": true,
        };
        let arrayIndex = getJsonArrayLength(log);
        log[arrayIndex] = logFormat;
        self.localStorage.setItem('log',JSON.stringify(log));
    });
  });

function getJsonArrayLength(jsonArray){
    let length = 0;
    for(let i in jsonArray){
      length++;
    }
    return length;
};