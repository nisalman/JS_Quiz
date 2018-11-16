
function submitAnswers(){

    var total =5;
    var score=0;

    //Getting user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //validation

    for (i=1; i<=total; i++){
        if (eval('q'+i)==null || eval('q'+i)==''){
            alert('You Missed Question' + i);
            return false;
        }
    }

    //set correct answers
    var answers=["b","d","c","a","b"];
    for (i=1; i<=total; i++){
        if (eval('q'+i)== answers[i-1]){
            score++;
    }
}
    //Display Results
    var result = document.getElementById('result');
    result.innerHTML='<h3>You Scored <span>'+score+'</span> out of '+total+'</h3>'
    alert('You scored '+score+'out of '+total);
    return false;
}