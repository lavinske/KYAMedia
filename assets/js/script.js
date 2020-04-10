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
    console.log("next"+" "+carouselCount)
    changeImg();
    carouselTrigger();
}
function prev(){
    
    stopTrigger();
    if(carouselCount==0)carouselCount=totalCarousel;
    else carouselCount-=1;
    console.log("prev"+" "+carouselCount)
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
