self.localStorage.setItem('log','');

function getJsonArrayLength(jsonArray){
  let length = 0;
  for(let i in jsonArray){
    length++;
  }
  return length;
};

function output(){
  let log = self.localStorage.getItem('log');
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