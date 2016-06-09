var romanNumberal= function(number){
  var result;
  debugger;

  var romanDict= {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
  Object.keys(romanDict).forEach(function(key){
    if(number === romanDict[key]){
     result= key;
    }

  });
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
