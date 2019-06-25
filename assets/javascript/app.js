$(document).ready(function () {
    // found way to store quiz questions on stack overflow using this format 
    var triviaQuestions = [
        {
            question: "What is Michael Scott's middle name?",
            choices: ["John", "Gary", "George", "Dwight"],
            answer: 1,
        },
        {
            question: "What substance does Jim put both Dwight and Andy's office supplies into?",
            choices: ["Jello", "Water", "Soup", "Chili"],
            answer: 0,
        },
        {
            question: "Where does a majority of the show take place?",
            choices: ["Miami", "Dallas", "Philadelphia", "Scranton"],
            answer: 3,
        }, {
            question: "Who does Jim reveal he has a crush on in Season 2?",
            choices: ["Pam", "Oscar", "Jan", "Karen"],
            answer: 0,
        },
        {
            question: "Who does Michael pick first in the basketball game vs the warehouse workers?",
            choices: ["Jim", "Stanley", "Dwight", "Pam"],
            answer: 2,
        },
        {
            question: "What is the name of the exclusive club that Pam, Toby, and Oscar are a part of?",
            choices: ["Office Activities Club", "Neighborhood Watch Club", "Finer Things Club", "Anti Michael Scott Club"],
            answer: 3,
        },
        {
            question: "What did Michael burn his foot on in the episode where he says he has a disability?",
            choices: ["George Foreman Grill", "Sidewalk", "Hair Straightener", "Bonfire"],
            answer: 0,
        }
    ];
    // create some more vars for win/loss counters
    var correctCounter = 0;
    var wrongCounter = 0;
    var unanswerCounter = 0;
    var timer = 15;

    // Need to randomly select question from array if it hasnt been shown already
    function showQuestion() {

        for (var i = 0; i < triviaQuestions.length; i++ ){
            var question = triviaQuestions[i].question;
            $("#questionText").html(question);
            var options = triviaQuestions[i].choices;
            $("#answerText").html
        }
    };
    // kind of feel stuck here. Not really sure how to apply these to different buttons etc.

    // on click function for when user selects answer. if userguess=correctguess score++
    
    // if userguess!=correct wrong++
    
    // timeout for unanswered i would guess

    // start button begins game
    $("#play").click(function() {
        // make play button dissapear so other stuff displays
        $("#play").hide();
        // create div to display question and answers??

    });
    // timer to decrement from 15 each time question is displayed
    function decrement() {
        $("#timer").html("Time left: " + timer );
        timer --;
    // if statement for timer hitting 0 for unanswer
        if (timer === 0) {
            unanswerCounter ++;
        }
    }






});