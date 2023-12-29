axios.get('/adpro/ybapi/API/kfc.php').then(function(data){
    console.log(data);
    document.getElementById('emojiDisplay').innerHTML = data;
});