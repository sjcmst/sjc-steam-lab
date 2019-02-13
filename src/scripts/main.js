let x = 'allo world';

console.log(x);


$(document).ready(function(){
    dropdownHandler();
    console.log("document ready");
});


function dropdownHandler(){
    $('.navbar-nav > li').hover(
        function(){
            console.log("hover");
            $(this).find(".dropdown-menu").show();
        },
        function(){
            $(this).find(".dropdown-menu").hide();
        }
    );
    $('.navbar-nav > li').click(
        function(){
            console.log("click");
            window.location.href = 'about.html';
        }
    );

}

    // $('#dropdown_about').dropdown('toggle');
    // $('#dropdown_about').hover(dropdownHandler);
