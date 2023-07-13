const burger = document.getElementById("burger");
      const navlist = document.getElementById("navlist");
      const closeburger = document.getElementById("closeburger");
      burger.addEventListener("click", () => {
        navlist.style.display = "flex";
        burger.style.display = "none";
        closeburger.style.display = "block";
      });
      closeburger.addEventListener("click", () => {
        navlist.style.display = "none";
        closeburger.style.display = "none";
        burger.style.display = "block";
      });

     
 
        $(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 778,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});

$(document).ready(function(){
  $('.customer-logos2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 778,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
function activateButton(buttonIndex) {
  var buttons = document.getElementsByClassName("clicks");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];

    // Check if the button is the active button
    if (i + 1 === buttonIndex) {
      button.classList.add("active");
      button.disabled = true;
    } else {
      button.classList.remove("active");
      button.disabled = false;
    }
  }
}

  

    function activate_color(btnIndex)
    {
      
        const button = `openquery${btnIndex}`
        const action = `accordion-collapse-body-${btnIndex}`
       
        const button_element = document.getElementById(button)
        if(window.getComputedStyle( button_element ,null).getPropertyValue('background-color')=='rgb(243, 244, 246)')
        {
          button_element.style.backgroundColor='#4bff7e'
          document.getElementById(action).style.backgroundColor='#4bff7e'
        } 
        else
        {
          button_element.style.backgroundColor='rgb(243, 244, 246)'
          document.getElementById(action).style.backgroundColor='white'
        }
    }
   
   



