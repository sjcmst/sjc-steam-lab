
$(document).ready(function(){
    dropdownHandler();
    console.log("document ready");
});


function dropdownHandler(){
    $('#dropdown_about').hover(
        function(){
            console.log("hover");
            $(this).parent().parent().find(".dropdown-menu").show();
        },
        function(){
            console.log("hide");
            /*$(this).parent().parent().find(".dropdown-menu").hide();*/
        }
    );
    /*$('.navbar-nav > li').click(
        function(){
            console.log("click");
            window.location.href = 'about.html';
        }
    );*/

}
