

// $(document).ready(function() {
//   $('.category-title').click(function() {
//     const $grid = $(this).next('.ingradient-grid');

//     $('.ingradient-grid').not($grid).slideUp(); // закриває всі інградієнти крім того який відповідає поточній категорії
//     $('.category-title').not(this).removeClass('active'); // забирає клас у тих які не відкриті

//     $(this).toggleClass('active'); // додає або забирає клас для натиснутого заголовка

//     if ($grid.css('display') === 'none') {

//       $grid.css('display', 'flex').hide().slideDown(300);
//     } else {
//       $grid.slideUp(300, function() {
//         $(this).css('display', 'none');
//       });
//     }
//   });
// });


// $(document).ready(function() {
//     let totalPrice = 50;     // базова ціна піци

//     $('.ingradient-item').click(function() {
//         const price = parseInt($(this).data('price'));      // беремо ціну інгредієнта
//         totalPrice += price;        // додаємо до загальної суми
//         $('.payment-amount').text(totalPrice + ' грн');      // оновлюємо текст
//     });
// });



$(document).ready(function () {
  // $('category-title').click(function(){

  // })


  let totalPrice = 100;

  $('.ingradient-grid').hide(0)

  $('#category-1').click(function () {
    $('#ingradient-grid-1').slideToggle();
  })
  $('#category-2').click(function () {
    $('#ingradient-grid-2').slideToggle();
  })
  $('#category-3').click(function () {
    $('#ingradient-grid-3').slideToggle();
  })
  $('#category-4').click(function () {
    $('#ingradient-grid-4').slideToggle();
  })


  $('.ingradient_on_pizza').hide(0);


  // $('#cheder').click(function () {
  //   $('#chederPizza').show(200);
  //   $('#cheder').hide(200);
  // })
  // $('#feta').click(function () {
  //   $('#fetaPizza').show(200);
  //   $('#feta').hide(200);
  // })
  // $('#mozzarella').click(function () {
  //   $('#mozzarellaPizza').show(200);
  //   $('#mozzarella').hide(200);
  // })
  // $('#bergarder').click(function () {
  //   $('#bergarderPizza').show(200);
  //   $('#bergarder').hide(200);
  // })
  // $('#parmezan').click(function () {
  //   $('#parmezanPizza').show(200);
  //   $('#parmezan').hide(200);
  // })



  $('.ingradient-item').click(function(){
    let ingradient = $(this).data('ingradient');
    let price = $(this).data('price');
    let ingradientOnPizza = $('[data-ingradient-pizza="' + ingradient +'"]')
    console.log(ingradient);
    
    $(`#${ingradient}Pizza`).show(200);
    $(this).hide(200)

    totalPrice += price
    console.log(totalPrice);
    $('.payment-amount').text(totalPrice + 'грн');
    
  })


$('.ingradient_on_pizza').click(function(){
  let ingradientOnPizza = $(this).data('ingradient-pizza');
  console.log(ingradientOnPizza); 
  let ingradient = $('[data-ingradient="' + ingradientOnPizza +'"]')
  $(this).hide(200);
  $(ingradient).show(200);

  let price = $('[data-ingradient="' + ingradientOnPizza + '"]').data('price');
  console.log(price);

  totalPrice -= price
  $('.payment-amount').text(totalPrice + 'грн');
  
  
})

})








