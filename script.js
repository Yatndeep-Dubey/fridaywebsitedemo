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

 var check_button = 0;
function activateButton(buttonIndex) {
    const button = `btn${buttonIndex}`
    if(check_button == 0 )
    {
      document.getElementById(button).style.backgroundColor='#4BFF7E'
      document.getElementById(button).style.boxShadow = '5px 5px black'
      check_button=buttonIndex
    }
    else if(check_button)
    {
      const another_button = `btn${check_button}`
      document.getElementById(another_button).style.backgroundColor='white'
      document.getElementById(another_button).style.boxShadow='0px 0px white'
      document.getElementById(button).style.boxShadow = '5px 5px black'
      document.getElementById(button).style.backgroundColor='#4BFF7E'
      check_button=buttonIndex
    }
}

  

    
   
   function openqueries(btnIndex)
   {
      const button = `openquery${btnIndex}`
      const action1 = `open-body-${btnIndex}`
       const action2 = `openbutton${btnIndex}`
   
      if(document.getElementById(action1).style.display =='block')
      {
        document.getElementById(action1).style.display='none'
        document.getElementById(button).style.backgroundColor='white'
        document.getElementById(action2).style.rotate='360deg'
      }
      else
      {
        document.getElementById(action1).style.backgroundColor='#4BFF7E'
        document.getElementById(button).style.backgroundColor='#4BFF7E'
        document.getElementById(action1).style.display='block'
        document.getElementById(action2).style.rotate='180deg'
      }

   }
      




