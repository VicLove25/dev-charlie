// dongo
// some js
$( document ).ready(function() {
    console.log( "hey cumbie, don't click on the seal" );

    $('#classMascot').hover(

        function(){
            $(this).css("background-color", "yellow");
            alert('never use alert');
            }
    ); 
    
});
