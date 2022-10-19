let statements =["You have a great need for other people to like or admire you.",
                 "You have a tendency to be critical of yourself.",
                 "You have a great deal of unused capacity which you have not turned to your advantage.",
                 "Disciplined and self-controlled outside, you tend to be worrisome and insecure inside.",
                 "At times you have serious doubts as to whether you have made the right decision or done the right thing.",
                 "You prefer a certain amount of change and variety and become dissatisfied when hemmed in by restrictions and limitations.",
                 "You pride yourself as an independent thinker and do not accept others' statements without satisfactory proof.",
                 "You have found it unwise to be too frank in revealing yourself to others.",
                 "At times you are extroverted, affable, sociable, while at other times you are introverted, wary, reserved.",
                 "Some of your aspirations tend to be pretty unrealistic.",
                 "Security is one of your major goals in life.",
                 "Others may at times perceive you as being childlike and immature.",
                 "You tend to be very loyal, especially with people who mean a lot to you.",
                 "You are usually sure of your opinions, though at times you may have a hard time finding the right words to articulate them.",
                 "You often feel that you give in too easily under pressure.",
                 "You are a fun loving person, who likes to laugh.",
                 "You are warm-hearted though a little quirky at times.",
                 "Fairness is a core value for you.",
                 "You critically analyse yourself in your duties.",
                 "You are often very good at compensating for your weaknesses.",
                 "It is important for you to be in control of your own life.",
                 "You pride yourself on being a rational thinker.",
                 "You often find yourself feeling misunderstood by others.",
                 "You dislike when people seem to get unreasonably angry or upset."]


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function get_random_number(n) {
    return Math.floor(Math.random() * n);
}

function get_random_statement() {
    return statements[get_random_number(statements.length)]
}

function get_n_random_statements(n) {
    // make sure we don't ask for more than what we can get
    if (n > statements.length) {
        n = statements.length;
    }

    // getting array of n random numbers 
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers[i] = get_random_number(statements.length);
    }

    // making sure the random numbers are distinct
    numbers.sort();
    let i = 0
    while (i < numbers.length-1) {
        if (numbers[i] == numbers[i+1]) {
            numbers[i] = get_random_number(statements.length);
            numbers.sort((a,b) => a-b);
            i = 0;
        }
        else {
            i++;
        }
    }

    let statements_array = numbers.map(x => statements[x]);

    let n_statements = "";
    for (let i = 0; i < n; i++) {
        n_statements = n_statements.concat(statements_array[i], "\n\n")
    }

    return n_statements;
}


function remove_animation() {
    $("#measure-square").removeClass("scanimation");
}

function get_results () {

    let result = get_n_random_statements(7);
    let accuracy = prompt("Your results are here!\n\n"+
                          result+
                          "\nOn a scale of 1-5, where 5 is highly accurate and 1 is not accurate at all,"+
                          " how would you rate your results?", "");

    let confirmation = false;
    if (accuracy != null && accuracy != "") {
        accuracy = parseFloat(accuracy);
    }

    if (accuracy >= 0
        && accuracy < 2) {
        confirmation = confirm("Oh, you are good! Did you realise that I tried to trick you?\n\n"+
                              "If you want to know what exactly I tried, you can click \"OK\" on this dialog.");
    }
    else if (accuracy >= 2 && accuracy < 3.75) {
        confirmation = confirm("Well, I could have done better, I guess...\n\n"+
                               "But not in measuring your personality, because I didn't actually do that. " +
                               "I used fully general statements in order to make you feel "+
                               "as if I understood you. \n\n"+
                               "If you want to know more about this technique and how to avoid falling "+
                               "for it, click on \"OK\".");
    }
    else if (accuracy >= 3.75) {
        confirmation = confirm("Ha! Gotcha! :-) \n\n"+
                               "This was all just a hoax, I didn't actually measure anything.\n\n"+
                               "Please click on \"OK\", and I'll take you to some more information "+
                               "as well as some good tips on how to avoid falling for this tactic.");
        

    }

    else {
        confirmation = confirm("Okay, you got me! This isn't research at all! \n\n"+
                               "I was trying to trick you by using statements that are "+
                               "so general that nearly everybody will agree with them.\n\n"+
                               "Do you want to learn more about this?");

    }

    if (confirmation) {
        console.log("you clicked ok");
        window.location="./explanation.html";
    }
}

function test () {
    window.location="./explanation.html"; 
}


function start_scan () {
    console.log("Starting scan.");

    
    $("#measure-square").addClass("scanimation");
    let t1 = setTimeout(remove_animation, 10000);

    let t2 = setTimeout(get_results, 10000); 
    
}
