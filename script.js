let word; 
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', () => {
    checkWord()
})

function checkWord() {
    word = document.querySelector('.input').value;
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
    result.style.background = 'green'
    result.innerText = `The word '${word}' is a palindrome`;
    setTimeout(function() {
        result.innerText = '';
        result.style.background = '#ffd5af'
    }, 3000)
}

function isNotPalindrome() {
    result.style.background = 'red'
    result.innerText = `The word '${word}' is not a palindrome`;
    setTimeout(function() {
        result.innerText = '';
        result.style.background = '#ffd5af'
    }, 3000)
}