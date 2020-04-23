function changeImg(){
    let x = carouselCount
    // $(".carousel-item").animate({opacity: '0'}, 1000);
    // $(".carousel-item").animate({width: "toggle"}, "fast");
    $(".carousel-item").animate({width: "hide"}, 1);
    // while(true){
        // if($(".carousel-item").opacity==1){
            $(".carousel-item").attr("src","./assets/img/promo"+x+".jpg" );
        // }
    // };
    $(".carousel-item").css("opacity","0");
    // $(".carousel-item").animate({opacity: '1'}, 1000);
    $(".carousel-item").animate({width: "toggle",opacity:'1'}, 750);
    // $(".carousel-item").animate({width: "show"}, 1000);
    setLegend(x);
    hideImg = setTimeout(hide,4250);
}

function hide(){
    $(".carousel-item").animate({width: "hide",opacity:'0'}, 750);
}

function legendClick(x){
    stopTrigger();
    carouselCount=x;
    changeImg();
    carouselCount=x+1;
    carouselTrigger();
}

function whiten(){
    for(var i=1;i<=totalCarousel;i++){
        // console.log($("#legend-"+i).css("background-color"));
        $("#legend-"+i).css("background-color","rgba(255,255,255,0.5)");
        $("#legend-"+i).css("border","1px solid black");
    }
}

function setLegend(x){
    whiten();
    $("#legend-"+x).css("background-color","rgba(255,255,255,1)");
    $("#legend-"+x).css("border","2px solid black");
    carouselCount=x;
    if(carouselCount>totalCarousel)carouselCount=1;
}

var totalCarousel = 5
var carouselCount = 1

function addCarouselCount(){
    carouselCount+=1;
    if(carouselCount>totalCarousel) carouselCount=1;    
    
}

let changeCarousel
let addCounter
let hideImg

var firstTime=1;
function carouselTrigger(){
    if(firstTime==1){
        changeImg();
        firstTime=0;
        // carouselCount+=1;
    }
    addCounter = setInterval(addCarouselCount,5000)
    changeCarousel = setInterval(changeImg,5000)
    
}

function stopTrigger(){
    clearInterval(changeCarousel)
    clearInterval(addCounter)
    clearTimeout(hideImg)
}

function next(){
    
    stopTrigger();
    addCarouselCount();
    // console.log("next"+" "+carouselCount)
    changeImg();
    carouselTrigger();
}
function prev(){
    
    stopTrigger();
    carouselCount-=1;
    if(carouselCount==0) carouselCount=totalCarousel;
    // console.log("prev"+" "+carouselCount)
    changeImg();
    carouselTrigger();
}

function content1(){
    let title = "Perusahaan Kami";
    let contentx = "Nama perusahaan kami adalah KYAMedia. Perusahaan kami adalah salah satu perusahaan yang menjual bermacam-macam buku. Terdapat dua macam buku yang kami jual, buku kertas, dan buku elektronik. <br> <br> Kantor Pusat kami beralamat di <b>Jl. Interaksi Nomor 10101 Kota Manusia</b>";
    $(".about-title").html(title);
    $(".about-isi").html(contentx);
    
}

function content2(){
    let title = "Sejarah Kami";
    let contentx = "Perusahaan kami terbentuk pada bulan Maret 2020. CEO kami memiliki visi untuk meningkatkan angka literasinya. oleh karena itu, CEO kami membuat toko buku online sehingga memudahkan orang untuk membeli tanpa harus pergi. ide CEO kami didapat saat ia kesulitan mencari sebuah buku di toko online dan harus pergi ke toko fisik. hal tersebut membuatnya merasa tidak nyaman. ia tidak ingin orang lain memiliki pengalaman kurang menyenangkan tersebut.";
    $(".about-title").html(title);
    $(".about-isi").html(contentx);
    
}

function content3(){
    let title = "Toko Kami";
    let contentx = "Kami memiliki banyak toko dan agen yang tersebar di seluruh Indonesia. Kami memiliki lebih dari 100 toko di pulau jawa dan lebih dari 200 toko di seluruh indonesia.";
    $(".about-title").html(title);
    $(".about-isi").html(contentx);
    
}

var juduls = ["Gen","Hak Angket Kawal Demokrasi","Kepunahan Keenam:<br>Sebuah Sejarah Tak Alami","Detektif Conan 95","Malik & Elsa 2","Komik: Jingga dan Senja","Bukan Cinderella","Unexpected Prince","Kartun Fisika (2020)","Nanti Kita Cerita Tentang Hari Ini:<br>Dari Surat-surat ke Sinema","Kartun Kimia (2020)","Never Be Alone","HR: Touch of a Rogue","Inestable","Too Much of A Good Thing?","Amore: Back Into You","Hai, Miiko! 32 (bonus postcard)","Mariposa - Cover film","Sd/Mi Spm Plus Usbn 2020","Detektif Conan 96","HR: The Naked Earl (Collector`s Edition)","HR: Rule`s Bride","Dongeng Sebelum Tidur","Noda Tak Kasatmata - Cover Baru","Setiap Hari (Every Day)","Boys do Write Love Letters","Bluebell","Harlequin: Haven Point#3 - Evergreen Springs (Cinta Bersemi di Evergreen Springs)","HR: The Perfect Waltz","It's not Me, It's You (Bukan Salahku)","Amore: I Love You Dearly","Accidental Fiancee"]

var authors = ["Artha Mukherjee","A.M Sallatu","Elisabeth Kolbert","Aoyama Gosho","Boy Candra","Esti Kinasih","Dheti Azmi","Ainur RahmaAinurrahmah","Larry Gonick","Melarissa Sjarief","Larry Gonick","Chelsea Karina","Mia Marlowe","Eko Ivano Winata","Joss Wood","Teresa Bertha","Ono Eriko","Luluk Hf","New Teaching Resources","Aoyama Gosho","Sally Mackenzie","Kat Martin","Agnes Jessica","Agnes Jessica","David Levithan","Kansa Airlangga","Elvira Natali","Rae Anne Thayne","Anne Gracie","Mhairi McFarlane","Ria N. Badaria","Mary Moore"]

var prices = ["Rp 120.000","Rp 86.400","Rp 60.000","Rp 60.000","Rp 44.000","Rp 20.000","Rp 31.500","Rp 30.000","Rp 49.500","Rp 29.500","Rp 35.000","Rp 37.500","Rp 39.900","Rp 69.500","Rp 36.500","Rp 31.400","Rp 50.000","Rp 25.000","Rp 66.000","Rp 65.000","Rp 173.000","Rp 197.000","Rp 175.000","Rp 79.000","Rp 74.800","Rp 65.000","Rp 58.800","Rp 66.000","Rp 99.000","Rp 97.000","Rp 74.800","Rp 79.800"]

function tryGetItem(){
    let row = document.getElementsByClassName("book-list d-flex");
    let x = 0;
    for(var i=0;i<row.length;i++){
        for(var j=0;j<row[i].children.length;j++){
            let item = row[i].children[j];
            item.children[0].children[0].src = "./assets/img/book-item-"+(x+1)+".jpg"; 
            item.children[1].children[0].innerHTML = juduls[x];
            item.children[2].innerHTML = authors[x]; 
            item.children[3].innerHTML = prices[x];
            x+=1;
            // console.log(item.children[0].children[0].src);
            // console.log(item.children[1].children[0].innerHTML);
            // console.log(item.children[2].innerHTML);
            // console.log(item.children[3].innerHTML);   
             
        }
    }
}

function randomizeRating(){
    $(".dummy").css("display","none");
    var containers = document.getElementsByClassName("star-container");
    containers = $(".star-container");
    for (var i=0;i<containers.length;i++){
        var rating = Math.floor(Math.random()*5+1);
        for(var j=0;j<rating;j++){
            containers[i].innerHTML+='<i class="fas fa-star fill-rating"></i>';
            // containers[i].append('<i class="fas fa-star fill-rating"></i>');
        }
        for(var j=0;j<5-rating;j++){
            containers[i].innerHTML+='<i class="far fa-star fill-rating"></i>';
            // containers[i].append('<i class="far fa-star fill-rating"></i>');
        }
        var rating = Math.floor(Math.random()*1000+1);
        containers[i].append("("+rating+")");

    }
}
var open=0;
function dropdownShow(){
    if(open==0) {
        $("#dropdown-mobile").css("display","flex");
        $("#dropdown-mobile").css("flex-flow","column");
        open=1;
    }else{
        $("#dropdown-mobile").css("display","none");
        open=0;
    }
}

function comprobarEmail(email) {

    if(email==undefined) return false;

    email.trim();
    
    if(email.length <= 2) return false;

    if(email.indexOf("@") == -1) return false;

    if(email.lastIndexOf(".") < email.lastIndexOf("@")) return false;

    // 3. Email can only have 1 '@'

    if(email.lastIndexOf("@")!=email.indexOf("@")) return false;

    // 4. Email format for '.' can't be next to '@'

    if(email.indexOf(".") + 1 == email.indexOf("@") || email.indexOf(".") - 1 == email.indexOf("@")) return false;

    // 2. Email must be endswith 'gmail.com' or 'gmail.co.id'

    if(!email.endsWith("gmail.com") && !email.endsWith("gmail.co.id"))  return false;


    if(email.endsWith(".")) return false;

    return true;
};

function comprobarContrasena(pass){
    // 5. Password length must be at least 5 character

    if(pass == undefined) return false;
    if(pass.length < 5) return false;           

    return true;
}

function comprobarNombre(nombre){

if(nombre==undefined) return false;

var nombre_temp = nombre.trim().split(" ");

console.log(nombre_temp.length);

// 1. Full name must be at least 2 words

if(nombre_temp.length < 1) return false;

return true;
}


function comprobarRegion(region){

if(region<34){
    return false;
}

return true;

}


function comprobarGenero(genero){

var arrayDuGenero = ["hombre","mujer","rns"];

for(var i=0;i<arrayDuGenero.length;i++){
    if(genero === arrayDuGenero[i]){
        return true;
    }
}

return false;

}


function hacerValidacion(){

var error = new Array();
var txtMail = document.getElementsByName("email").value;
var txtFName = document.getElementsByName("fname").value;
var txtLName = document.getElementsByName("lname").value;
var region = document.getElementsByName("region").value;
var genero = document.getElementsByName("gender").value;
var txtPass = document.getElementsByName("pass").value;
var txtCPass = document.getElementsByName("cpass").value;
var txtDOB = document.getElementsByName("dob").value;
var acuerdo = document.getElementsByName("agreement");
var errorBox = document.getElementsByName("errorAlert");

if(!comprobarNombre(txtFName)) error.push("Nama Depan bermasalah.");
if(!comprobarNombre(txtLName)) error.push("Nama Belakang bermasalah.");
if(!comprobarEmail(txtMail)) error.push("Email bermasalah.");
if(!acuerdo.checked) error.push("Agreement bermasalah.");
if(!comprobarContrasena(txtPass)) error.push("Password bermasalah.");
if(txtPass !== txtCPass) error.push("Konfirmasi Password beda");
if(!comprobarGenero(genero)) error.push("Gender kacaww.");
if(!comprobarRegion(region)) error.push("Region bukan di Indonesia.");

console.warn(error);

return false;

}
