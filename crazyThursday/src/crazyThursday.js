axios.get('/adpro/ybapi/API/kfc.php').then(function(data){
    var result = data.data;
    result = result.replace(/\\n/g,'<br>');
    document.getElementById('content').innerHTML = result;
});