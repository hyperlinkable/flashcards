$(document).ready(function() {
  $("#term1_word").click(function() {
    $("#term1_definition").toggle();
        });

  $("#term2_word").click(function() {
    $("#term2_definition").toggle();
    $("#term2_word").toggle();
        });

  $("#term3").click(function() {
    $("#initially_hidden").toggle();
    $("#initially_shown").toggle();
        });

  $("#term4").click(function() {
    $("#term4_word").toggle();
    $("#term4_def").toggle();
        });

  $("#term5").click(function() {
    $("#term5_word").toggle();
    $("#term5_def").toggle();
        });
});
