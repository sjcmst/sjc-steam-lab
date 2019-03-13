
$(document).ready(function(){
    dropdownHandler();
    console.log("document ready");
});


function dropdownHandler(){
    var flag = false;
    var $dropdownMenu = $("#sjc-dropdown");

    $('#dropdown_about').hover(
        function(){
            console.log("trigger hover");
            $dropdownMenu.show();
        },
        function(){
            if(!flag){
                console.log("close menu");
                $dropdownMenu.hide();
            }
        }
    );

    /*$('.navbar-nav > li').click(
        function(){
            console.log("click");
            window.location.href = 'about.html';
        }
    );*/

}

