function checkAnswer() {
    const correctAnswer = '4';
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

if (userAnswer) {

    if (userAnswer.value === correctAnswer) {
    feedback.textContent = 'correct! well done';
    feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Thats incorrect. Try again';
        feedback.style.color = 'red';
    }

}else  {
       feedback.textContent  = 'Please select an answer';
       feedback.style.color  = 'orange';
}
}


document.getElementById("submit-answer").addEventListener("click", checkAnswer);
