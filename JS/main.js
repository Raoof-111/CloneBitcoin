$(document).ready(function(){
    $("#drp").mouseenter(function(){
        $(".dp-content").css("display","block")
    });
    $(".dp-content").mouseleave(function(){
        $(".dp-content").css("display","none")
    });
    $(window).scroll(function(){
        if
        ($(window).scrollTop()>100)

        {
            $("#header").css("background"," rgba(4,9,30,0.5)");
            $("#phone-header").css("background"," rgba(4,9,30,0.5)");

            $(".dp-content").css("display","none")
        }
            else
            {
                $("#header").css("background-color","transparent")
                $("#phone-header").css("background-color","transparent")

            }
        });  
    });


$(document).ready(function(){

    $(".counter").each(function(){
        var cnt = $(this),

        countTo = cnt.attr("data-count");
        
        $({countNum:cnt.text()}).animate({
          countNum:countTo
        },
        {
            duration:2000,
            easing:'linear',
            step:function(){
                cnt.text(Math.floor(this.countNum));
            },
            complete:function(){
                cnt.text(this.countNum)
            }
        }
        )
    })
})


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
 
  }
  $(document).ready(function(){
      $(".log").click(function(){
          $(".log").css("display","none");
          $(".exit").css("display","block");
      });
      $(".exit").click(function(){
          $(".exit").css("display","none");
          $(".log").css("display","block");
      });
  });



  


  $(document).ready(function(){
      $("#cvn").click(function(){
          $(".aaa").css("color","#fc7527");
          $("#cvn").css("display","none");
          $("#cvn-b").css("display","block");
          $(".dp-cnt").slideDown(200);
      });
      $("#cvn-b").click(function(){
        $(".aaa").css("color","#fff");
        $("#cvn").css("display","block");
        $("#cvn-b").css("display","none");
        $(".dp-cnt").slideUp(200);
    });
  });

  
  $(document).ready(function(){
    $('.your-class').slick({

        dots: false,
        autoplay:true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]



    });
  });
  $(document).ready(function(){

    $(".counter-s").each(function(){
        var cnt = $(this),

        countTo = cnt.attr("data-count");
        
        $({countNum:cnt.text()}).animate({
          countNum:countTo
        },
        {
            duration:10000,
            easing:'linear',
            step:function(){
                cnt.text(Math.floor(this.countNum));
            },
            complete:function(){
                cnt.text(this.countNum)
            }
        }
        )
    })
})


$(document).ready(function() {
	// Users can skip the loading process if they want.
	$('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})
	
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 5000)
	});
	
	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 60000);
})