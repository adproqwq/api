self.sessionStorage.setItem('log','');

function getJsonArrayLength(jsonArray){
  let length = 0;
  for(let i in jsonArray){
    length++;
  }
  return length;
};

function output(){
  let log = self.sessionStorage.getItem('log');
  let blob = new Blob([log],{
    type: 'application/json'
  });
  const logOutput = URL.createObjectURL(blob);
  const aTag = document.createElement('a');
  aTag.href = logOutput;
  aTag.download = 'log.json';
  aTag.click();
  URL.revokeObjectURL(logOutput);
}

document.querySelector('tbody').addEventListener('click',(e)=>{
  let log = JSON.parse(self.sessionStorage.getItem('log'));
  let time = dayjs().format('MMDDHHmmss') + dayjs().millisecond();
  let searchKey = document.getElementById('name').value;
  let downloadIndex = (a=e)=>{
    if(a.target.getAttribute('name') == 'download'){
      return a.target.getAttribute('index');
    }
  };
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
  let index = getJsonArrayLength(log);
  log[index] = logFormat;
  self.sessionStorage.setItem('log',JSON.stringify(log));
});