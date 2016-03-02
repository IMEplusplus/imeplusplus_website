$('.nav a').on('click', function() {
    if ($('.navbar-collapse.in')[0])
        $('.navbar-toggle').click();
});
