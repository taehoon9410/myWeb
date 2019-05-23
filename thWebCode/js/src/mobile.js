/*mobile.js*/

(function($){


//===================================widhth pack
var winW = $(window).width();
var mob = 480;
var tab = 768;
var pc = 1366;
var device; 
// console.log(winW);


// ===================================reload

var div = function(winW){
    if(winW <= mob){device = "mob"}
    else if(mob < winW && tab >= winW){device = "tab"}
    else if(tab < winW && pc >= winW){device = "pc"}
    else {device = "pcfull"}
  };

var before = div(winW);

$(window).on('resize', function(){
  var nw = $(window).width();
  var nowD = div(nw);
  if(nw !== nowD){
  location.reload();
  }; }); 


//====================================mobile.js start

if(winW <= mob){

var win = $(window);
$(document).ready(function(){ 
	
    $('h1').fadeIn(1500)
	$('.header_text').children('p').fadeIn(800).css({fontSize:'12px',
													 marginTop:'8px',
													 })
    $('.my_name').css({opacity:'1'})
                                                     
    

});


// ================================start text




// ===================================hello text
var hello = $('.hello_text'); 
var helloAc = function(){
        var st = win.scrollTop();
          if(st <= 20){hello.fadeOut().stop();}
          	else
          		{hello.fadeIn().stop().css({
  			 						fontSize: '60px',
  			 						color : '#000000',
			 						marginTop: '50px',
			 						opacity: '1'
			 					    });
                }
                    };


//=========helloAC 실행          
win.on('scroll' ,function(e){
       helloAc();
       });     
// ==================================================info


var info = $('.info'); 


var infoAc = function(){
          var st = win.scrollTop();
          if(st <= 200){info.stop().css({
          						 opacity:'1',
                                 paddingTop: '50px'
          							});
                      }
                       };


//=========infoAc 실행          
win.on('scroll' ,function(){
       infoAc();
       });     

// ====================================infoR


var infoCon = $('.info_icon'); 


var infoR = function(){
          var str = win.scrollTop();
          if(str <= 400){infoCon.stop().css({
          						 marginRight: '5px',
                       height: '50px',
                       width: '50px'
          							});
                      }
                       };


//=========infoR 실행          
win.on('scroll' ,function(){
       infoR();
       });     






};
//==================mob.js end



})(jQuery);