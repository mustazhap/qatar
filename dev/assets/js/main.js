// Шапка меню
var h_hght = 118; 
var h_mrg = 0;    
$(function(){
$(window).scroll(function(){
   var top = $(this).scrollTop();
   var elem = $('#header');
   if (top+h_mrg < h_hght) {
    $('.header__bottom').removeClass('fixed');
    $('.header__right').removeClass('pos');
   } else {
    $('.header__bottom').css({'height': $('.header__bottom').height(),'width': $('.header__bottom').width()}).addClass('fixed');
    $('.header__right').addClass('pos');
   }
 });

// Menu + Mobile Menu 


var container = $('.menu__inner');
var containerMobile = $('.menu__mobile');
var w = $(window).width();

$('.header__button-login').click(function() {
  container.fadeIn(500);
});
$('.header__button-login_mobile').click(function() {
  containerMobile.stop().css("marginLeft", "-400px").animate({
            marginLeft: "0"
        }, 1000, function() {
            
        }
        );
});

$('.icon-close').click(function() {
  container.fadeOut(500);
});

$('.menu__mobile--close').click(function() {
  containerMobile.stop().css("marginLeft", "0").animate({
            marginLeft: "-400px"
        }, 1000, function() {
            
        }
        );
});

$(document).mouseup(function(e) 
{

    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.fadeOut(500);
    }
    if (!containerMobile.is(e.target) && containerMobile.has(e.target).length === 0  && containerMobile.css("marginLeft") == "0px")
    {   
        containerMobile.stop().css("marginLeft", "0").animate({
            marginLeft: "-320px"
        }, 1000, function() {
            
        }
        );
    }
});
});

// Mobile Menu -accardeon (Navigation menu)
$(document).ready(function() {
  $('.menu__mobile--nav .menu__mobile--text').on('click', f_acc);
});
 
function f_acc(){
  $('.menu__mobile--nav .menu__mobile--body').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(700);
  $('.menu__mobile--nav .menu__mobile--text').not($(this)).removeClass("menu__mobile--nav-rotate");
    if ($(this).hasClass("menu__mobile--nav-rotate")) {
      $(this).removeClass("menu__mobile--nav-rotate");
      console.log("asdd");
    }
    else {
      $(this).addClass("menu__mobile--nav-rotate");
    }
}
