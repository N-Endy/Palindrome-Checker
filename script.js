let word; 
let btn = document.querySelector('#btn');
let result = document.querySelector('.result');

btn.addEventListener('click', () => {
    checkWord();
})

function checkWord() {
    word = document.querySelector('#input').value;
    if (word === '') {
        alert('Please input a word')
    } else {
        word = word.toLowerCase();

        let word2 = [...word].filter((ele,idx) => word.charCodeAt(idx) > 96);
        let result = word2.join('');
        let final = word2.reverse().join('');
        
        
        result === final ? isPalindrome() : isNotPalindrome();
    }
    
}

function isPalindrome() {
    result.classList.add('bg-success');
    result.innerText = `The word '${word}' is a palindrome`;
    setTimeout(function() {
        result.innerText = '';
        result.classList.remove('bg-success');
    }, 3000)
}

function isNotPalindrome() {
    result.classList.add('bg-danger');
    result.innerText = `The word '${word}' is not a palindrome`;
    setTimeout(function() {
        result.innerText = '';
        result.classList.remove('bg-danger');
    }, 3000)
}