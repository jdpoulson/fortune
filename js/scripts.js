var unlucky = 0
var lucky = 0
$(document).ready(function(){
  $("form#fortune_teller").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unlucky++
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      lucky++
    });
    $("#fortune_teller").hide();
    if((unlucky >= 4) && (lucky <= 3)) {
      $("#unlucky-fortune").show();
      $("#lucky-fortune").hide();
      $("#even-fortune").hide();
    };
    if((lucky >= 4) && (unlucky <= 3)) {
      $("#lucky-fortune").show();
      $("#unlucky-fortune").hide();
      $("#even-fortune").hide();
    };
    if((lucky = 1) && (unlucky = 1)) {
      $("#lucky-fortune").hide();
      $("#unlucky-fortune").hide();
      $("#even-fortune").show();
    };
  });
});
