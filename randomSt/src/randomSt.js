function getImage(){
    showImage = document.createElement('img');
    showImage.setAttribute('id','st');
    showImage.setAttribute('src','https://se.csnmb.com/API/ql.php');
    document.getElementById('imageDisplay').appendChild(showImage);
};