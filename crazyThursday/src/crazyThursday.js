axios.get('/adpro/ybapi/API/kfc.php').then(function(data){
    document.getElementById('emojiDisplay').innerHTML = data;
});