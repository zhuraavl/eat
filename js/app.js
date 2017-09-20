$('.time-range-slider-nav li').on('click', function() {
    var val = $(this).find("span").text(),
      $range = $('#time-range-slider');
    $range.val(val);
    $range.trigger('input');
  });
  $('#time-range-slider').on('input', function() {
    var val = $(this).val();
    $('.time-range-slider-nav li').each(function(i) {
      if (i == val) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
        
      }
    });
  });





jQuery(document).ready(function ($) {
  'use strict';

$(function() {
	$("#no-meat").click(function() {
		var target = $(".my-text");
		var pic = $(".my-pic");
		if($(this).prop('checked')) {
			target.html('Без мяса');
			pic.html('<img src="img/icon/emoji/7.png" alt="">');
		} else {
			target.html('С мясом');
      pic.html('<img src="img/icon/emoji/6.png" alt="">');
		}
	})
})

$(".form-steps button.next").click(function () {
    event.preventDefault();
    if ($(this).prev().val().length == 0) {
      $(this).parent().addClass('red');
    } else {
      $(this).parent().removeClass("go-show");
      $(this).parent().addClass("go-out");
      $(this).parent().next().addClass("go-show");
    };

  });

  $(".form-steps button.back").click(function () {
  event.preventDefault();
    $(this).parent().removeClass("go-show");
    $(this).parent().addClass("go-out");
    $(this).parent().prev().addClass("go-show");
  });
  
  $('input[name=address]').keyup(function () {
    var lengthAdress = $(this).val().length;
    if (lengthAdress > 10) {
      $('span.okay').addClass('done');
    } else {
    };
    
  });




//  function parseDate(str) {
//    var mdy = str.split('/');
//    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
//  }
//
//  function daydiff(first, second) {
//    return Math.round((second - first) / (1000 * 60 * 60 * 24));
//  }
//
//  console.log(daydiff(parseDate($('#first').val()), new Date()));
//  var currentDays = daydiff(new Date(), parseDate($('#first').val())),
//    div = currentDays % 10,
//    menuDay;
//    if (currentDays == 0) {
//      menuDay = 1;
//    } else if (div == 0) {
//      menuDay = 10;
//    }
//    else {
//      menuDay = (1 + div);
//    }
//  
//  $(".day-" + menuDay).addClass("active-day");
//  $(".day-" + menuDay).parent().next().find(".menu-item").addClass("next-day");
//  $(".day-" + menuDay).parent().prev().find(".menu-item").addClass("prev-day");

  






  $(".menu-tabs-content").find('.tabs-item').hide();
  $(".menu-tabs-content").find('.tabs-item:nth-child(2)').show();
  (function ($) {

    var tabs = $(".tabs li a");

    tabs.click(function () {

      var content = this.hash.replace('/', '');
      tabs.removeClass("active");
      $(this).addClass("active");
      $(".menu-tabs-content").find('.tabs-item').hide();

      $(content).fadeIn(500);

      $('.slider-week').each(function () {
        $(this).slick("getSlick").refresh();
      });
    });

  })(jQuery);




  var loader = function () {
    $('body').removeClass("load");
  };
  setTimeout(loader, 1000);


  //  var nowWeekOne = function () {
  //    if ($("body").is(".week1")) {
  //      $(".on-week1").click().addClass("active");
  //    }
  //  };
  //  setTimeout(nowWeekOne, 100);
  //  
  //  var nowWeekTwo = function () {
  //    if ($("body").is(".week2")) {
  //      $(".on-week2").click().addClass("active");
  //
  //    }
  //  };
  //  setTimeout(nowWeekTwo, 100);
  //  
  //  var nowWeekThree = function () {
  //    if ($("body").is(".week3")) {
  //      $(".on-week3").click().addClass("active");
  //
  //    }
  //  };
  //  setTimeout(nowWeekThree, 100);




  $(".sms-call").click(function () {
    $(".sms-call").toggleClass("move");
    $(".modal-overlay").toggleClass("show");
  });

  $(".open-new-form, .go-to-new-form").click(function () {
    $(".new-form").slideToggle("");
    $(this).toggleClass("active");
    $('html, body').animate({
      scrollTop: $(".new-form").offset().top
    }, 1000);
  });



  // weeks select


  $(".week1-on").click(function () {
    $('html, body').animate({
      scrollTop: $("#form-in").offset().top
    }, 1000);
  });
  $(".week2-on").click(function () {
    $('html, body').animate({
      scrollTop: $("#form-in").offset().top
    }, 1000);
  });
  $(".week3-on").click(function () {
    $('html, body').animate({
      scrollTop: $("#form-in").offset().top
    }, 1000);
  });
  $(".week4-on").click(function () {
    $('html, body').animate({
      scrollTop: $("#form-in").offset().top
    }, 1000);
  });



  // template tooggle class function

  $('.menu-item-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: "200px",
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    asNavFor: '.menu-item-slider-nav',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "0px"
        }
    }
  ]
  });
  $('.menu-item-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.menu-item-slider',
    cssEase: 'ease-in-out',
    arrows: false,
    focusOnSelect: true
  });


  

  // slider
  $('.slider-hero').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false
  });
  $('.slider-week').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    cssEase: 'ease-in-out',
    dots: true
  });

  // loader make

  // scroll top or down button
  $(".scroll-to-menu").click(function () {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $("#update-menu").offset().top
    }, 1000);

  });

  $(".scroll-to-form").click(function () {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $("#form-in").offset().top
    }, 1000);

  });




});

//function Weeks () {
//    var currentWeek = '';
//    if ($("body").is(".week1")) currentWeek = 'week1';
//    if ($("body").is(".week2")) currentWeek = 'week2';
//    if ($("body").is(".week3")) currentWeek = 'week3';
//    if (currentWeek != '') $("#" + currentWeek).addClass("active").click();
//  };
//Weeks();

// SEND FORM
jQuery(document).ready(function ($) {


  //    $("#send_form").click(function reset(){
  //        $('input[type=text]').val('');  
  //        $('input[type=radio]').val('');
  //    });



  //    $("#send_form").click(function reset(){
  //        $('input[type=text]').val('');  
  //        $('input[type=radio]').val('');
  //            
  //    });


  //    $('#send_form').click(function (event) {
  //        
  //        if ($('#modal_send_ifcomplete').hasClass('.true').each(function reset{
  //                
  //              });
  //        )
  //        //$('input[type=radio]').getElementById("#chois-ration") = false;
  //    });




  $("#call_send").click(function () {
    $('.has-error').removeClass('has-error');

    var err = false;

    var data = new FormData();
    var subject = $("#call_subject");
    var username = $("#call_username");
    var phone = $("#call_phone");

    if ($(username).val() == '') {
      err = true;
      $(username).parents('.form-item-modal:first').addClass('has-error');
    }
    if ($(phone).val() == '') {
      err = true;
      $(phone).parents('.form-item-modal:first').addClass('has-error');
    }

    data.append("action", "send_form");
    data.append('subject', $(subject).val());
    data.append('username', $(username).val());
    data.append('phone', $(phone).val());
    if (err == false) {
      jQuery.ajax({
        type: 'POST',
        url: '/send.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
          console.log(data);
          $('#call_ifcomplete').addClass('true');
          $('#call_modal').fadeOut("slow");
        },
        complete: function (data) {
          console.log("Complete ajax.");
        },
        error: function (data) {
          console.log("Error ajax.");
        }
      });
    } else {
      console.log("Ошибка формы.");
    }
    $('#call_username').click(function () {
      $(this).parent().removeClass('has-error');
    });
    $('#call_phone').click(function () {
      $(this).parent().removeClass('has-error');
    });
  });

  $(".form-item-submit input[type=submit]").click(function () {
    $('.has-error').removeClass('has-error');
    var err = false;
    var additional_field = false;
    var addition = $(".open-new-form");

    var data = new FormData();

    var subject = $("input[name=subject]");

    var username = $("input[name=username]");
    var address = $("input[name=address]");
    var phone = $("input[name=phone]");
    var alergiya = $("input[name=alergiya]");
    var vozrast = $("input[name=vozrast]");
    var rost = $("input[name=rost]");
    var ves = $("input[name=ves]");
    var calories = $('input[name=calories]:checked');
    var howmenu = $('input[name=howmenu]:checked');
    var comment = $('textarea[name=comment]');
    var callme = $('input[name=callme]');
    var time = $('.time-range-slider-nav li.active');
    var days = $('input[name=days]');
    var person = $('select[name=person] option:selected');
    var goal = $('input[name=goal]:checked');
    var activity = $('input[name=activity]:checked');

    
    if (($(calories).val() == '' || $(calories).length == 0) && !$(addition).hasClass('active')) {
      err = true;
      $('#chois-ration').addClass('has-error');
    }
    if ($(addition).hasClass('active')) {
      if ($(activity).val() == undefined || $(activity).length == 0) {
        err = true;
        $('#your-activity').addClass('has-error');
      }
      if ($(goal).val() == undefined || $(goal).length == 0) {
        err = true;
        $('#your-goal').addClass('has-error');
      }
      if ($(rost).val() == '') {
        err = true;
        $(rost).parents('.form-item:first').addClass('has-error');
      }
      if ($(ves).val() == '') {
        err = true;
        $(ves).parents('.form-item:first').addClass('has-error');
      }
      if ($(vozrast).val() == '') {
        err = true;
        $(vozrast).parents('.form-item:first').addClass('has-error');
      }
      additional_field = true;
    }

    data.append("action", "send_form");
    data.append('subject', $(subject).val());
    data.append('username', $(username).val());
    data.append('address', $(address).val());
    data.append('phone', $(phone).val());
    data.append('alergiya', $(alergiya).val());
    data.append('vozrast', $(vozrast).val());
    data.append('rost', $(rost).val());
    data.append('ves', $(ves).val());
    data.append('calories', $(calories).val());
    data.append('howmenu', $(howmenu).val());
    data.append('comment', $(comment).val());
    data.append('callme', $(callme).is(':checked'));
    data.append('time', $(time).text());
    data.append('days', $(days).val());
    data.append('person', $(person).val());
    data.append('goal', $(goal).val());
    data.append('activity', $(activity).val());
    if (err == false) {
      jQuery.ajax({
        type: 'POST',
        url: '/send.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
          console.log(data);
          $('#modal_send_ifcomplete').addClass('true');
          setTimeout(function () {
            $('#modal_send_ifcomplete').css({
              "opacity": "0",
              "visibility": "hidden"
            });
          }, 3500);
          $('html, body').animate({
            scrollTop: $(".hero").offset().top
          }, 2000);

          // reset input after send form
          $('input[type=checkbox]').prop("checked", false);
          $('input[type=radio]').prop("checked", false);
          $('input[type=text]').val('');
        },
        complete: function (data) {
          console.log("Complete ajax.");
        },
        error: function (data) {
          console.log("Error ajax.");
        }
      });
    } else {
      $('body, html').animate({
        scrollTop: $('#form-in').position().top
      }, 'slow');
      console.log("Ошибка формы.");
    }
  });
});

$('#call_username, #call_phone').click(function () {
  $(this).parent().removeClass('has-error');
});