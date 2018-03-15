jQuery(document).ready(function($) {
  'use strict';

  // // ставим цифру какой день сегодня, вчера и завтра

  // var today = '8',   // сегодня
  //     tomorrow = '9',  // завтра
  //     yesterday = '7';  // вчера


  // // пишем даты для каждого дня

  // var day1 = "12 июня",
  //     day2 = "13 июня",
  //     day3 = "14 июня",
  //     day4 = "15 июня",
  //     day5 = "16 июня",
  //     day6 = "17 июня",
  //     day7 = "18 июня",
  //     day8 = "19 июня",
  //     day9 = "20 июня",
  //     day10 = "21 июня";

  // // то что здесь, тебе не нужно
  // $(".day-" + today).addClass("active-day");
  // $(".day-" + tomorrow).addClass("next-day");
  // $(".day-" + yesterday).addClass("prev-day");
  // $(".day-1 .date").text(day1);
  // $(".day-2 .date").text(day2);
  // $(".day-3 .date").text(day3);
  // $(".day-4 .date").text(day4);
  // $(".day-5 .date").text(day5);
  // $(".day-6 .date").text(day6);
  // $(".day-7 .date").text(day7);
  // $(".day-8 .date").text(day8);
  // $(".day-9 .date").text(day9);
  // $(".day-10 .date").text(day10);


  //embed "date algorithm" 
  var DAYS_QTY = 10,
    ONE_DAY = 24 * 60 * 60 * 1000,
    NOW = new Date(),
    START_DATE = new Date(2017, 5, 12),
    TODAY = new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate());

  // var test = new Date( 2017, 5, 20 );
  // TODAY = test;

  var current_day_menu = (Math.round((TODAY - START_DATE) / (1000 * 60 * 60 * 24))) % DAYS_QTY + 1;

  var month_names = ["января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];

  $(".day-" + current_day_menu).addClass("active-day");
  $(".day-" + (current_day_menu == DAYS_QTY ? 1 : current_day_menu + 1)).addClass("next-day");
  // if( current_day > 1 ) $(".day-" + ( current_day - 1 )).addClass("prev-day");

  for (var i = 0; i < DAYS_QTY; i++) {
    var a = new Date(TODAY),
        b = (current_day_menu - 1 + i) % DAYS_QTY + 1;

    a.setDate(TODAY.getDate() + i);
    $(".day-" + b + " .date").text(a.getDate() + " " + month_names[a.getMonth()]);
  }

  //==========================

  $('.slider-ten-days').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    cssEase: 'ease-in-out',
    arrows: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: '50px'
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerPadding: '50px'
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px'
      }
    }]
  });
  $('.slider-ten-days').slick('slickGoTo', current_day_menu - 1);



});


