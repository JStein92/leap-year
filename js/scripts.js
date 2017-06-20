var leapYear = function(year){
  if ( (year % 4 === 0) && (year % 100 !== 0) || (year %400 ===0)){
    return true;
  }
  else{
      return false;
  }
};

var factorial = function(number){
var num = 1;
  for (var i = number; i>0; i--) {
    console.log(num = (num *i));
 }
}

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $('.year').text(year);
    if(!result){
      $('.not').text('not');
    }else{
      $('.not').text('');
    }
    $('#result').show();
  });

    $("form#factorial").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = factorial(number);
      $('#product').text(result);
      $('#product').show();
    });
});
