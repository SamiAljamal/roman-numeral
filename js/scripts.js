var romanNumberal= function(number){
  var result= '';
  var i;
  debugger;

  var romanDict= { M: 1000, D: 500,C: 100,L: 50, X: 10, IX: 9, V: 5, IV:4, I: 1 };

  for (i in romanDict) {
    while(number >= romanDict[i]) {
      result += i;
      number -= romanDict[i];
    }
  }

  // var str = new Array();
  // var str = number.toString();
  //
  // str.forEach(function(num) {
  //   if ()
  // })

    return result;

 };

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = romanNumberal(number);

    $(".number").text(result);

    $("#result").show();
  });
});
