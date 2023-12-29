axios.get('/adpro/ybapi/API/kfc.php').then(function(data){
    var result = data.data;
    result.replace(/\\n/,'<br>');
    document.getElementById('content').innerHTML = result;
});