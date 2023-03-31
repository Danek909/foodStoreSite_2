const menu = document.querySelector('.liUlcontainer');

document.addEventListener("click", liUlcontainer);

function liUlcontainer(event) {
  if (event.target.closest('.ulHederButton')){
    menu.classList.toggle('active');
  }
  if (!event.target.closest('.liUlcontainer')) {
      menu.classList.remove('active');
  }
}

const closeopUp = document.getElementById("divX");
const present = document.getElementById("divTop");
closeopUp.addEventListener("click", function(){
  present.style.display = "none";

});

const scrolltop = document.getElementById("scrollTop");
window.onscroll = () =>{
  if(window.scrollY <500){
    scrolltop.style.display = "none";
  }

  else if(window.scrollY >500){
    document.querySelector('.isShowBtn');
    scrolltop.style.display = "block";
  }
};

scrolltop.onclick = () =>{
  window.scrollTo(0,0);
  
};




const menu2 = document.querySelector('.liUlcontainer2');
document.addEventListener("click", liUlcontainer2);
function liUlcontainer2(event) {
  if (event.target.closest('.ulHederButton2')){
    menu2.classList.toggle('active');
  }
  if (!event.target.closest('.liUlcontainer2')) {
      menu2.classList.remove('active');
  }
}

const menu3 = document.querySelector('.liUlcontainer3');
document.addEventListener("click", liUlcontainer3);
function liUlcontainer3(event) {
  if (event.target.closest('.ulHederButton3')){
    menu3.classList.toggle('active');
  }
  if (!event.target.closest('.liUlcontainer3')) {
      menu3.classList.remove('active');
  }
}

const factory = document.getElementById('buttonHeder2');
if (factory) {
  const isHeder = document.getElementById('spanStrilka2');
  factory.addEventListener("click", function (e) {
    isHeder.classList.toggle('_activee');
  });
}

const factory3 = document.getElementById('buttonHeder3');
if (factory3) {
  const isHeder = document.getElementById('spanStrilka3');
  factory3.addEventListener("click", function (e) {
    isHeder.classList.toggle('_activee');
  });
}

$(document).ready(function () {
  $('.divSlider').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: true,
    dots: false,
    speed: 1000,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 1166,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
        }
      },
    ]
  });

  const factory = document.getElementById('burgerMenu');
  if (factory) {
    const isHeder = document.getElementById('heder');
    factory.addEventListener("click", function (e) {
      isHeder.classList.toggle('_activee');
    });
  }

  const body = document.getElementById('burgerMenu');
  if (factory) {
    const isHeder = document.getElementById('body');
    factory.addEventListener("click", function (e) {
      isHeder.classList.toggle('_activee');
    });
  }

  const isHeder = document.getElementById('divTop');
  const divX = document.getElementById('divX');
  divX.addEventListener("click", () => {
    isHeder.classList.toggle("present");
  });
});
