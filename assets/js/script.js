function changeImg(){
    let x = carouselCount
    $(".carousel-item").attr("src","./assets/img/promo"+x+".jpg" );
}

var totalCarousel = 5
var carouselCount = 1

function addCarouselCount(){
    carouselCount+=1;
    if(carouselCount>totalCarousel) carouselCount=1;    
    
}

let changeCarousel
let addCounter

function carouselTrigger(){
    
    changeCarousel = setInterval(changeImg,2000)
    addCounter = setInterval(addCarouselCount,2000)
    
}

function stopTrigger(){
    clearInterval(changeCarousel)
    clearInterval(addCounter)
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
    if(carouselCount==0)carouselCount=totalCarousel;
    else carouselCount-=1;
    // console.log("prev"+" "+carouselCount)
    changeImg();
    carouselTrigger();
}

function content1(){
    let title = "Our Company";
    let contentx = "KYamedia is our company name. Our Company is one of many companies that sells books. There are two kinds of books that we sell. The first is paper book and the second one is electronic book.";
    $(".about-title").html(title);
    $(".about-isi").html(contentx);
    
}

function content2(){
    let title = "Our History";
    let contentx = "The History of our company started back March 2020 when our CEO thought of starting a book selling company. It doesn't take long to make the company big. Because of the diligence of the CEO and the power of togetherness of the employeess, our company has become the greatest company in indonasei.";
    $(".about-title").html(title);
    $(".about-isi").html(contentx);
    
}

function content3(){
    let title = "Our Stores";
    let contentx = "We has many stores and outlets scattered in Indonasei. We have over 100 stores in Java Island and Over 200 stores all around Indonasei.";
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
