document.getElementById("searchTarget").addEventListener("change",function(e){
    if(e.target.tagName == "SELECT"){
        var userselect = document.getElementById("searchTarget");
        var index = userselect.selectedIndex;
        if(document.getElementById(userselect.options[index].value)){
            document.body.removeChild(document.getElementById(userselect.options[index].value));
        }
        var newScript = document.createElement('script');
        newScript.id = userselect.options[index].value;
        newScript.src = './music/src/' + userselect.options[index].value + '.js';
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
                "changeTarget": userselect.options[index].value
            }
            ],
            "successful": true,
        };
        let arrayIndex = getJsonArrayLength(log);
        log[arrayIndex] = logFormat;
        self.localStorage.setItem('log',JSON.stringify(log));
    };
});

function getJsonArrayLength(jsonArray){
    let length = 0;
    for(let i in jsonArray){
      length++;
    }
    return length;
};