axios.get('/adpro/ybapi/API/kfc.php').then(function(data){
    var result = data.data;
    result = result.slice(1,-1);
    result = result.replace(/\\n/,'<br>');
    document.getElementById('content').innerHTML = result;
});