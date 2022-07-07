let questions = document.querySelectorAll('.faq-title');
const marginBtm = 19;

for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', revealAnswer);
}

function revealAnswer(e) {
    for(let i = 0; i < questions.length; i++) {
        let question = questions[i];
        let answer = questions[i].nextElementSibling;
        let arrow = questions[i].firstElementChild;

        if(this === question && !question.classList.contains('reveal')) {
            question.style.fontWeight = 700;
            question.classList.add('reveal');
            arrow.style.transform = 'rotate(180deg)';
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.marginBottom = marginBtm + 'px';
        } else {
            question.style.fontWeight = 400;
            question.classList.remove('reveal');
            arrow.style.transform = 'rotate(0deg)';
            answer.style.maxHeight = '0px';
            answer.style.marginBottom = '0px';
        }
    }
}