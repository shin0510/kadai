$(function(){
   
 
  $('header .slider').slick({
  
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows:false,
          centerMode: false,
        },
      },
      
    ],
    
  });
  $('.regular_2').slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
          
        },
      },
      
    ],
  });

  $('.regular_3').slick({
    fade: false,
    infinite: false,
    arrows: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          swipe:true,
          centerMode:true,
          arrows:false,
          centerMode: true,
          centerPadding: "20%"
          
        },
      },
      
    ],
  });
  $('.regular_4').slick({
    fade: false,
    infinite: false,
    arrows: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          swipe:true,
          centerMode:false,
          
          
        },
      },
      
    ],
  });

  $('.slick-next').click(function () {
    if ($(this).hasClass('slick-disabled')) {
      $('.regular_3').slick('slickGoTo', 0);
     
      
    };
  });
 

});
$(function(){
  const pagetop=$("#page-top");
  pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  
            pagetop.fadeIn(600);
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });

})
$(function(){
  if (window.matchMedia("(min-width:750px)").matches) {
    $(".sub").hover(
      function(){
        $("this").css("display","flex");
        $("nav>ul").css("margin-bottom","100px")
      },
      function(){
        $("this").css("display","flex");
        $("nav>ul").css("margin-bottom","100px");
      }
      );
    }
  
    $("nav>ul>li").hover(
    function(){
      $("nav>ul").css("margin-bottom","100px");
      

    },
    function(){
      $("nav>ul").css("margin-bottom","0")
    }
  );

  
  $('.accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });

  $('.switch h3').click(function() {
    var index = $('.switch h3').index(this);
    $('.switch h3, .switch-con').removeClass('active');
    $(this).addClass('active');
    $('.switch-con').eq(index).addClass('active');
  });
  
  
  if (window.matchMedia("(max-width:750px)").matches) {
  $('nav ul li').on('click', function () {
      $('nav ul li').not(this).removeClass("open");
      //クリックされたjs-accordion-title以外のcontentを閉じる
      $('nav ul li').not(this).children("ul").slideUp(300);
     
      //thisにopenクラスを付与
      $(this).toggleClass("open");
      //thisのcontentを展開、開いていれば閉じる
      $(this).children("ul").slideToggle(300);
      
      $(this).children("ul").css("display", "flex");
      
     
    });
  }
  $(".burger").on("click", function(){
    if($(".sp-nav").hasClass("open-nav")){

      $(".sp-nav").removeClass("open-nav")
    }else {
      $(".sp-nav").addClass("open-nav")
    }
      
  })
  $("h6.sp-menu").on("click", function(){
    if($("form.sp-menu").hasClass("open-form")){

      $("form.sp-menu").removeClass("open-form")
      $(".hot-word").removeClass("open-hot")
    }else {
      $("form.sp-menu").addClass("open-form")
      $(".hot-word").addClass("open-hot")
    }
      
  })

   
});