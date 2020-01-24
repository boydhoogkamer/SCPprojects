function randomImg() {

    var myImages = ["img/randomimage1.jpg", "img/randomimage2.jpg", "img/randomimage3.jpg", "img/randomimage4.jpg", "img/randomimage5.jpg", "img/randomimage6.jpg", "img/randomimage7.jpg", "img/randomimage8.jpg", "img/randomimage9.jpg", "img/randomimage10.jpg"];


    var rnd = Math.floor(Math.random() * myImages.length);
    if(rnd == 0){
        rnd = 1;
    }

    document.write('<img class="section1__rimage" src="'+myImages[rnd]+'" border="0">')   
}

randomImg();