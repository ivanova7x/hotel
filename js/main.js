$(document).ready(function() {
    $('section#gallery a').on('click', function() {
        $('div#modal img').attr('src', $(this).attr('data-image-url') );
    });
});

/* Toggle between adding and removing the "responsive" class to navigation when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNavigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}
