// TIMER 

var watch = new Stopwatch(timer);


// TYPER

    var words_correct = 0;
    var words_incorrect = 0;
    var wpm = 0;

    function setUp(){
        $('#1').css({'display': 'inline-block'})
        $('.1').css({'display': 'inline-block'})
    };

    var counter = 2;
    var scoreCounter = 1;
    var score = 0;

    $(function(){
        $("#textbox").keypress(function(event){
            if (event.which === 13) {
                var symbolEntered = $("#textbox").val().toUpperCase();

                // color the results green in correct
                if (symbolEntered == $('#' + (counter - 1)).html()){
                        $('.' + (counter - 1)).css({'color': 'green'});
                        if (counter < 52) {
                            words_correct += 1;
                            // add score counter for streak bonus
                            score = score + scoreCounter;
                            // increment score counter
                            scoreCounter += 1;
                            document.getElementById("correct").innerHTML = words_correct;
                        };
                // color the reuslts red if incorrect
                } else {
                        $('.' + (counter - 1)).css({'color': 'red'});
                        if (counter < 52 ) {
                            words_incorrect += 1;
                            // no points for incorrect word
                            score = score;
                            // reset score counter to zero
                            scoreCounter = 1;
                            document.getElementById("incorrect").innerHTML = words_incorrect;
                        };
                };

                if (counter === 2) {

                    // start timer
                    watch.start();

                    // display the ticker in the textbox window
                    $('#' + counter).css({'display': 'inline-block'});

                    // display the ticker in the results window 
                    $('.' + counter).css({'display': 'inline-block'});

                    // remove ticker from textbox window
                    if (".remove") {
                        $('#' + (counter - 1)).removeAttr('style');
                    }
                    // clear input box
                    $("#textbox").val("");
                    event.preventDefault();

                    counter += 1;

                } else if (counter === 51) {

                    // display race finished in the textbox window
                    $('#' + counter).css({'display': 'inline-block'});

                    if (".remove") {
                        $('#' + (counter - 1)).removeAttr('style');
                    }

                    $("#textbox").val("");
                    event.preventDefault();

                    watch.stop();

                    // calculate score
                    score = score * wpm;

                    counter += 1;

                } else if (counter === 52) {
                    
                } else {


                    // display the ticker in the textbox window
                    $('#' + counter).css({'display': 'inline-block'});

                    // display the ticker in the results window 
                    $('.' + counter).css({'display': 'inline-block'});

                    if (".remove") {
                        $('#' + (counter - 1)).removeAttr('style');
                    }
                    $("#textbox").val("");
                    event.preventDefault();

                   // calculate WPM
                    if (counter != 2) {
                        wpm = Math.round(words_correct/(watch.time()/(1000 * 60)) * 100)/100;
                        document.getElementById("wpm").innerHTML = wpm;
                    };
                    
                    // increment counter
                    counter += 1;
                }


            }
            
            

            // if (event.which === 13 && counter === 51) {
            //     watch.stop();

            //     if (symbolEntered == $('#' + (counter - 1)).html()){
            //         $('.' + (counter -1)).css({'color': 'green'});
            //         words_correct += 1;
            //         document.getElementById("correct").innerHTML = words_correct;
            //     } else {
            //         $('.' + (counter -1 )).css({'color': 'red'});
            //         words_incorrect += 1;
            //         document.getElementById("incorrect").innerHTML = words_incorrect;
            //     };

            //     counter += 1;

            // } else if (event.which === 13){
                
            //     // start timer
            //     watch.start();
 
            //     var symbolEntered = $("#textbox").val().toUpperCase();

            //     $('.' + counter).css({'display': 'inline-block'});

            //     if (".remove") {
            //         $('#' + (counter - 1)).removeAttr('style');
            //     }

            //     $("#textbox").val("");
            //     event.preventDefault();

            //     if (symbolEntered == $('#' + (counter - 1)).html()){
            //         $('.' + (counter -1)).css({'color': 'green'});
            //         words_correct += 1;
            //         document.getElementById("correct").innerHTML = words_correct;
            //     } else {
            //         $('.' + (counter -1 )).css({'color': 'red'});
            //         words_incorrect += 1;
            //         document.getElementById("incorrect").innerHTML = words_incorrect;
            //     };

            //    // calculate WPM

            //     if (counter != 2) {
            //         wpm = Math.round(words_correct/(watch.time()/(1000 * 60)) * 100)/100;
            //         document.getElementById("wpm").innerHTML = wpm;
            //     };
                
            //     counter += 1;

            // };






        });
    });