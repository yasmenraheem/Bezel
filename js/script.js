
let aboutOffset = ($("#about").offset().top); // 619px


$(window).scroll(function(){
      
    let wScroll = $(window).scrollTop()

    if( wScroll > aboutOffset)
      {
        $("#btnUp").fadeIn(500)
        $("nav").css("backgroundColor" , "rgba(0,0,0,0.6)");
      }
      else
      {
        $("#btnUp").fadeOut(500)
        $("nav").css("backgroundColor" , "transparent");
      }
  
})

$("#btnUp").click(function(){
   
    $("html,body").animate({scrollTop:"0"} , 2000);
})

$("a").click(function(){   //#section id
   let aHref = $(this).attr("href");
   let sectionOffset = $(aHref).offset().top;
   $("html,body").animate({scrollTop:sectionOffset} , 1500)
})
