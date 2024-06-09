$(document).ready(function() {
    $('.phone').on('click', function() {
        var phoneNumber = $(this).find('p').text();
        window.location.href = 'tel:' + phoneNumber;
    });

    $('.email').on('click', function() {
        var email = $(this).find('p').text();
        console.log(email);
        window.location.href = 'mailto:' + email;
    });
});