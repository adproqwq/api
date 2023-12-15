function getInput(){
    var emoji1 = document.getElementById('emoji1').value;
    var emoji2 = document.getElementById('emoji2').value;
    mix(emoji1,emoji2);
};

function mix(emoji1,emoji2){
    axios.get('/adpro/oi/API/EmojiMix?emoji1=' + emoji1 + '&emoji2=' + emoji2).then(function(data){
        if(data.data.code == '1'){
            var result = data.data.data;
            showEmoji = `<img src=${result.url}>`;
            document.getElementById('emojiDisplay').innerHTML = showEmoji;
        }
        else alert('合成失败');
    });
};