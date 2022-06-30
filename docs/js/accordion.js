let questions = document.querySelectorAll('.question');

for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', revealAnswer);
}

function revealAnswer(e) {
    for(let i = 0; i < questions.length; i++) {
        let question = questions[i];
        let answer = questions[i].nextElementSibling;

        if(this === question && !question.classList.contains('reveal')) {
            question.classList.add('reveal');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            question.classList.remove('reveal');
            answer.style.maxHeight = '0px';
        }
    }
}