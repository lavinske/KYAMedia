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