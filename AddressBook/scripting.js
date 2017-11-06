var first = 0,
    second = 0,
    third = 0;

$(document).ready(function(){
    $('.contain').hide();
});

$(document).ready(function(){
    $('#first').click(function(){
        $('#secondT, #thirdT').hide("slow", function(){});
        $("#firstT").slideToggle("slow");
        $('img').attr('src', 'images/tj.jpg');
        //resets main image if variable is even
        first += 1;
        second = 0;
        third = 0;
        if ((first % 2) == 0){
            $('img').attr('src', 'images/unknown.png');
        }
    });
});

$(document).ready(function(){
    $('#second').click(function(){
        $('#firstT, #thirdT').hide("slow");
        $("#secondT").slideToggle("slow");
        $('img').attr('src', 'images/squeak.jpg');
        //resets main image if variable is even
        first = 0;
        second += 1;
        third = 0;
        if ((second % 2) == 0){
            $('img').attr('src', 'images/unknown.png');
        }
    });
});

$(document).ready(function(){
    $('#third').click(function(){
        $('#firstT, #secondT').hide("slow");
        $("#thirdT").slideToggle("slow");
        $('img').attr('src', 'images/arya.jpg');
        //resets main image if variable is even
        first = 0;
        second = 0;
        third += 1;
        if ((third % 2) == 0){
            $('img').attr('src', 'images/unknown.png');
        }
    });
});
