const sel = [];
$(document).ready(function () {
  $('input[type=checkbox]').on('change', function () {
    if ($(this).is(':checked')) {
      sel.push($(this).attr('data-name'));
    } else {
      sel.shift($(this).attr('data-name'));
    }
    $('.amenities h4').text(Object.values(sel).join(', '));
  });
});
