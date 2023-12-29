axios.get('/adpro/ybapi/API/kfc.php').then(function(data){
    document.getElementById('content').innerText = data.data;
});