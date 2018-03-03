$(document).ready(function() {
    $('section#gallery a').on('click', function() {
        $('div#modal img').attr('src', $(this).attr('data-image-url') );
    });
});
