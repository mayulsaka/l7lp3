
// ---------- スライダー ---------- 

$('.visual').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll:3,
  autoplay: true, 
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 767.9, 
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        centerMode:true,  
        centerPadding:"8%", 
      },
    }, 
  ],
 });


// $('.visual').slick({
//     dots: false,
//     slidesToShow: 3,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 767.9, 
//         settings: {
//           dots: true,
//           slidesToShow: 1,
//           slidesToScroll:1,
//           autoplay: false, 
//           autoplaySpeed: 5000,
//           centerMode:true,  
//           centerPadding:"8%", 
//         },
//       }, 
//     ],
//    });


