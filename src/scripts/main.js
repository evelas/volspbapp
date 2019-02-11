$(document).ready(function() {
    $.ajax({
        url: "https://volspb.ru/json/greeting.json",
    headers: {
    "accept": "application/json",
    "content-type": "application/x-www-form-urlencoded"
  },

    }).then(function(data) {
        $('.greeting-id').append(data.content);
        
    });
});
 