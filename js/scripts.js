var romanNumberal= function(number){
  var result= '';
  var i;
  debugger;

  var romanDict= { M: 1000, CM: 900,  D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV:4, I: 1 };


  for (i in romanDict) {
    while(number >= romanDict[i]) {
      result += i;
      number -= romanDict[i];
    }
  }


    return result;

 };

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = romanNumberal(number);

    if (number >= 4000){
      $(".why").show();
    }
    else{
      $(".number").text(result);

      $("p").show();
    }

  });
});
