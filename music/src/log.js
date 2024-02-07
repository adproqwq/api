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

document.getElementById('ok').addEventListener('click',()=>{
  let log = JSON.parse(self.sessionStorage.getItem('log'));
  let time = dayjs().format('MMDDHHmmss') + dayjs().millisecond();
  let searchKey = document.getElementById('name').value;
  let successful = document.getElementById('songTable');
  if(successful != null) successful = true;
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
  self.sessionStorage.setItem('log',JSON.stringify(log));
});

document.getElementsByName('download').addEventListener('click',(e)=>{
  let log = JSON.parse(self.sessionStorage.getItem('log'));
  let time = dayjs().format('MMDDHHmmss') + dayjs().millisecond();
  let searchKey = document.getElementById('name').value;
  let downloadIndex = e.target.index;
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