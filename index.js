$(function(){
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(document).scrollTop() >140){
                $(".navbar").css("background-color", "darkgray");
                $(".nav-link").css("color", "blue");
            } else {
                $(".navbar").css("background-color", "#f8f8f8");
                $(".nav-link").css("color", "#777");
            }
        })
    })
    
   $(".stopanska1").on("mouseenter", function(){
       $(".stopanska1").hide();
       $(".stopanska2").show();

   })
   $(".stopanska2").on("mouseleave", function(){
    $(".stopanska1").show();
    $(".stopanska2").hide();
    });
    $(".neptun1").on("mouseenter", function(){
        $(".neptun1").hide();
        $(".neptun2").show();
 
    })
    $(".neptun2").on("mouseleave", function(){
     $(".neptun1").show();
     $(".neptun2").hide();
     });

     $(".gorska1").on("mouseenter", function(){
        $(".gorska1").hide();
        $(".gorska2").show();
 
    })
    $(".gorska2").on("mouseleave", function(){
     $(".gorska1").show();
     $(".gorska2").hide();
     })

})