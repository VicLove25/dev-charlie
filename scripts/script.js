// dongo
// some js
$( document ).ready(function() {
    console.log( "don't click on the seal" );

    $('#classMascot').hover(

        function(){
            $(this).css("background-color", "red");
            alert('never use alert');
            }
    ); 
    
});
