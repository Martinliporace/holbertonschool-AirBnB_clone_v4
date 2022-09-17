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
const hostname = window.location.hostname;
    $.getJSON('http://' + hostname + ':5001/api/v1/status/', function (data) {
      if (data.status === 'OK') {
          $('#api_status').addClass('available')
        } else {
          $('#api_status').removeClass('available')
        }
  })
});
