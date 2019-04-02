$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    $(".response").hide();
    var sym = $("input:checkbox[name=stressS]:checked").length;
    var health = $("input:checkbox[name=stressH]:checked").length;
    var manage = $("input:checkbox[name=stressM]:checked").length;
    $('#transportation_survey').hide();
    if(sym + health >= 5 && manage >= 5){
      $("#managed").show();
    }else if(sym + health >=5){
      $("#stressed").show();
    }else{
      $("#notstressed").show();
    }

  });
});
