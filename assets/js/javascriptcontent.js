// ======================================== SLIDER JS CONTENT PAGE ==========================================
// START HEADER SEARCH BOX SLIDER JS 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// END HEADER SEARCH BOX SLIDER
// start slider 1
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});
// start slider 2
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });
  // start slider 3
var swiper = new Swiper(".slider3", {
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    360: {
      enabled:false,
      slidesPerView:4,
      spaceBetween: 12,
      grid: {
        fill:	'row',
        rows: 2,
      },
    },
    1024: {
   
      slidesPerView:'auto',
      spaceBetween:12,
     loop:true
    },
  }
});
 // start slider 4
 var swiper = new Swiper(".slider4", {
 

  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    360: {
      enabled:false,
      slidesPerView:4,
      spaceBetween: 12,
      grid: {
        fill:	'row',
        rows: 2,
      },
    },
    1024: {
   
      slidesPerView:'auto',
      spaceBetween:12,
     loop:true
    },
  }
});
// start slider akhbar va maghalat
var swiper = new Swiper(".akhbar", {
 
  breakpoints: {
    1024: {
      enabled:false,
      slidesPerView:3,
      spaceBetween: 12,
      grid: {
        fill:	'row',
        rows: 1,
      },
    },
    360: {
      enabled:true,
      slidesPerView:'auto',
      spaceBetween:12,
    },
  }


});
// start slider sliderproductversion

var swiper = new Swiper(".mySwiper3", {
  breakpoints: {
    1204:{
      enabled:false,
      slidesPerView:'auto',
      spaceBetween: 15,
    },
    360:{
      enabled:true,
      slidesPerView:'auto',
      spaceBetween: 5,
      loop:true
    }
  }
 
  
 
});

var swiper = new Swiper(".commendslider", {

  breakpoints: {
    1204:{
     
  slidesPerView: 12,
  spaceBetween: 6,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
  },

    },
    360:{
      slidesPerView:3,
      spaceBetween: 5,
      loop:true
    }
  }
 
});

var swiper = new Swiper(".regestercommendslider", {

  breakpoints: {
    1204:{
  slidesPerView: 3,
  spaceBetween: 6,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
  },

    },
    360:{
      slidesPerView:3,
      spaceBetween: 5,
      loop:true
    }
  }
 
});

var swiper = new Swiper(".qustionmoblileslider", {

  breakpoints: {
    1204:{
  slidesPerView: 3,
  spaceBetween: 6,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
  },

    },
    360:{
      slidesPerView:3,
      spaceBetween: 5,
      loop:true
    }
  }
 
});

var swiper = new Swiper(".fancyboxandslider1", {
  spaceBetween: 20,
  slidesPerView:'auto',
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".fancyboxandslider2", {
  
  slidesPerView:'auto',
  loop: true,
  spaceBetween:0,
  thumbs: {
    swiper: swiper,
  },

  breakpoints: {
    1204:{
      slidesPerView:'auto',
      loop: true,
      spaceBetween:0,
      thumbs: {
        swiper: swiper,
      },

    },
    360:{

      loop: false,
      spaceBetween:0,
      thumbs: {
        swiper: '',
      },

    }
  },
 
});

var swiper = new Swiper(".sliderthumbstab", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".sliderthumbstab2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
// ============================================= JAVASCRIPT CONTENT PAGE ==================================

// JAVASCRIPT OPEN AND CLOSE MOBILEMENU

var iconmobil= document.getElementById("iconmenu");
var menumobile=document.getElementById("menumoblile");
var closeiconmobile=document.getElementById("closeiconmobile");
iconmobil.addEventListener("click",()=>{
  menumobile.style.display="block";
});
  closeiconmobile.addEventListener("click",()=>{
    menumobile.style.display="none";
});

// END OPEN AND CLOSE JS MENU MOBILE 
// ===================================================== JAVA SCRIPT INPUT SEARCH BOX HEADER ================================================

var inputheader=document.getElementById("inputheadersearchbox");
var parentinput=document.getElementById("parentinput");
var submenuinputheader=document.getElementById("submenuinputheaderserchbox");

inputheader.addEventListener("click",()=>{
  parentinput.style.borderRadius="20px 20px 0px 0px";
  submenuinputheader.style.display="block";
  console.log("click");
});

submenuinputheader.onmousemove=()=>{
  submenuinputheader.style.display="block";
  parentinput.style.borderRadius="20px 20px 0px 0px";
  console.log("mouseover");

}
submenuinputheader.onmouseleave=()=>{
  parentinput.style.borderRadius="20px";
  submenuinputheader.style.display="none";
}

inputheader.onmouseleave=()=>{
  parentinput.style.borderRadius="20px";
  submenuinputheader.style.display="none";
  console.log("moseleave");
}
// ===================================================== END JAVA SCRIPT INPUT SEARCH BOX HEADER ================================================
// ===================================================== START JAVA SCRIPT MENU MOBILE DROP DOWN ================================================

var dropdownmenu=document.getElementById("dropdownmenu");
var menudroupdown=document.getElementById("menudroupdown");

menudroupdown.addEventListener("click",()=>{
  if(dropdownmenu.classList.contains('h-0')){

    dropdownmenu.classList.remove("h-0");
    dropdownmenu.classList.add("h-[500px]");

  }
  else{
    dropdownmenu.classList.remove("h-[500px]");
    dropdownmenu.classList.add("h-0");

  }
});
// ===================================================== END JAVA SCRIPT MENU MOBILE DROP DOWN ================================================
// ===================================================== START JAVA SCRIPT MENU FOOTER DROP DOWN ================================================

  var dropdownmenufooter=document.querySelectorAll(".dropdownmenufooter");
  var iconmenufooterdown=document.querySelectorAll(".iconmenufooterdown");

  dropdownmenufooter.forEach((item,index)=>{
    item.addEventListener("click",()=>{
      if(item.classList.contains("h-[50px]")){
          item.classList.remove("h-[50px]");
          item.classList.add("h-[200px]");
        iconmenufooterdown[index].classList.add("transform");
        iconmenufooterdown[index].classList.add("rotate-180");
      }
      else{
        item.classList.remove("h-[200px]");
        item.classList.add("h-[50px]");
        iconmenufooterdown[index].classList.remove("rotate-180");
      }
    });

  });
  // ===================================================== END JAVA SCRIPT MENU FOOTER DROP DOWN ================================================
// ======================================================= START JAVA SCRIPT TAB PRODUCT ========================================================
var fullscreenicon=document.getElementById("fullscreenproducticon");
var tabcontrolproduct=document.getElementById("tabcontrolproduct");
var closeicontabproduct=document.getElementById("closeicontabproduct");

fullscreenicon.addEventListener("click",()=>{
  
  tabcontrolproduct.classList.remove("hidden");
  tabcontrolproduct.classList.add("block");

});

closeicontabproduct.addEventListener("click",()=>{

tabcontrolproduct.classList.remove("block");
tabcontrolproduct.classList.add("hidden");
});

  // ======================================================= END JAVA SCRIPT TAB PRODUCT ========================================================
  // ======================================================= START JAVA SCRIPT CUSTOM VEDIO PLAYER TAP PROUDUCT =================================


  var vedioslidertabcontrol=document.getElementById("vedioslidertabcontrol");
  var playiconproducttabcontrol=document.getElementById("playiconproducttabcontrol");
  var puseeiconproducttabcontrol=document.getElementById("puseeiconproducttabcontrol");
  var backwrdiconproducttabcontrol=document.getElementById("backwrdiconproducttabcontrol");
  var forwardiconproducttabcontrol=document.getElementById("forwardiconproducttabcontrol");
  var soundoniconproducttabcontrol=document.getElementById("soundoniconproducttabcontrol");
  var soundofficonproducttabcontrol=document.getElementById("soundofficonproducttabcontrol");
 
  soundoniconproducttabcontrol.addEventListener("click",()=>{
    soundoniconproducttabcontrol.classList.replace("block","hidden");
    soundofficonproducttabcontrol.classList.replace("hidden","block");
    vedioslidertabcontrol.volume=0.0;

  });

  soundofficonproducttabcontrol.addEventListener("click",()=>{
    soundoniconproducttabcontrol.classList.replace("hidden","block");
    soundofficonproducttabcontrol.classList.replace("block","hidden");
    vedioslidertabcontrol.volume=0.5;
  });

  playiconproducttabcontrol.addEventListener('click',()=>{
  vedioslidertabcontrol.paused ? vedioslidertabcontrol.play() : vedioslidertabcontrol.pause();
  playiconproducttabcontrol.classList.replace("block","hidden");
  puseeiconproducttabcontrol.classList.replace("hidden","block");

});
  puseeiconproducttabcontrol.addEventListener('click',()=>{
    vedioslidertabcontrol.paused ? vedioslidertabcontrol.play() : vedioslidertabcontrol.pause();
    playiconproducttabcontrol.classList.replace("hidden","block");
    puseeiconproducttabcontrol.classList.replace("block","hidden");
  });

  backwrdiconproducttabcontrol.addEventListener("click",()=>{
    vedioslidertabcontrol.currentTime -=5;
  });
  forwardiconproducttabcontrol.addEventListener("click",()=>{
    vedioslidertabcontrol.currentTime +=5;
  });


  


