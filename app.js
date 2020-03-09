
var i = 0;
var images = [];
var time = 1700;

images[0] ='proizvodi/Gauda krug-1-1.png';
images[1] ='proizvodi/Jogurt 2%-1.png';
images[2] ='proizvodi/Jogurt 3,2% 1l-1.png';
images[3] ='proizvodi/Kravlji sir vakum-1.png';
images[4] ='proizvodi/Pasterizovano mlijeko-1.png';
images[5] ='proizvodi/Pavlaka 12% 0,18l-1.png';
images[6] ='proizvodi/Pavlaka 20% 0,18l-1.png';
images[7] ='proizvodi/Tecni jogurt 3,2& 0,18l-1.png';
images[8] ='proizvodi/Zbir-3.png';

function imgslide(){
    document.slide.src = images[i];

    if (i< images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("imgslide()",time);
}
window.onload = imgslide;
