$(document).ready(function () {
    $('#menuleft').hide()
});


$('.burger').click(function () {
    $('#menuleft').animate({
        width: 'toggle'
    }, "slow")
});