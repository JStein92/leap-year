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

var palindrome = function (word){
  if (word === word.split("").reverse().join("")){
    return ("True");
  }
  else {
    return ("False");
  }
}

var primes = function(max){

  var sieve = [];
  var primes = [];

    for (var i = 2; i <= max; i++) {
    //  console.log(sieve[i] + " " + i)
        if (sieve[i] == undefined) {  // i has not been marked -- it is prime
            primes.push(i);
            for (var j = i*2; j <= max; j += i) { //set all multiples of i to true
                sieve[j] = true;
            }
        }
    }
    return primes;
  };

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
    $("form#palindrome").submit(function(event) {
      event.preventDefault();
      var word = $("input#word").val();
      var output = palindrome(word);
      $('#output').text(output);

    });

    $("form#primes").submit(function(event) {
      event.preventDefault();
      var number = $("input#primeNumber").val();
      var output = primes(number);
      $('#primeOutput').text(output);

    });

  });
