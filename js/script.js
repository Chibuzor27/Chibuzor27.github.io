function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        // } else {
        //     reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// $("[name='email-notification-checkbox']").bootstrapSwitch();
//$('[data-toggle="switch"]').bootstrapSwitch();

$(document).ready(function () {
//     $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //     var target = $(e.target);
    
    //     if (target.parent().hasClass('disabled')) {
    //         return false;
    //     }
    // });

    $(".next-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');

        if (active.hasClass('first-tab'))
        {
            $('.preview-btn').addClass('d-none');
            $('.back-btn').removeClass('d-none');
        }

        if (active.next().hasClass('last-tab'))
        {
            $('.finish-btn').removeClass('d-none');
            $('.next-btn').addClass('d-none');
        }

        active.next().find('a[data-toggle="tab"]').click();

    });
    
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');       

        if (active.prev().hasClass('first-tab'))
        {
            $('.preview-btn').removeClass('d-none');
            $('.back-btn').addClass('d-none');
        }

        if (active.hasClass('last-tab'))
        {
            $('.finish-btn').addClass('d-none');
            $('.next-btn').removeClass('d-none');
        }

        active.prev().find('a[data-toggle="tab"]').click();
    });

    // TODO: Ensure first page always starts the modal preview content
});

// $('.nav-tabs').on('click', 'li', function() {
//     $('.nav-tabs li.active').removeClass('active');
//     $(this).addClass('active');
// });