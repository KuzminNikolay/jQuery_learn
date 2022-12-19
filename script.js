$(function() {
  $('#btn_start').click(function() {
    $('#message')
      .html('MESSAGE')
      .css('background-color', 'red')
      .parent()
      .css('background-color', 'blue')
      .width(150)
      .height(80)
  });

  $('#btn_reset').click(function() {
    location.reload();
  });
});
