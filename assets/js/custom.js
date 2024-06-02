// Hiển thị sub-nav ở header
$(document).ready(function(){
    $('.nav-item.dropdown').hover(function(){
        $(this).find('.sub-menu').stop(true, true).slideDown(300); /* Hiển thị sub-menu tương ứng với thẻ li */
    }, function(){
        $(this).find('.sub-menu').stop(true, true).slideUp(100); /* Ẩn sub-menu khi hover ra khỏi thẻ li */
    });
});

// function rotateImage() {
//     $('.rotating-image').css({ transform: 'rotate(0deg)' }).animate(
//         { deg: 360 },
//         {
//             duration: 20000,
//             step: function(now) {
//                 $(this).css({ transform: 'rotate(' + now + 'deg)' });
//             },
//             complete: rotateImage // Lặp lại animation
//         }
//     );
// }

// rotateImage(); // Khởi động animation

function rotate() {
    $('.rotating-bg').css({ transform: 'rotate(0deg)' }).animate({ borderSpacing: 360 }, {
        step: function(now, fx) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
        },
        duration: 20000,
        easing: 'linear',
        complete: rotate
    });
}

rotate();