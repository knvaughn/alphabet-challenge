const express = require('express');
const app = express();

function alphabetChallenge() {

    // Take a string
    // Output each letter of the alphabet, number of times it was found
    const data = 'addCbAAAA994394***';

    function getLetters(string) {
        
        string = string.toLowerCase();
        const stringArr = string.split("").sort();
        
        const output = stringArr.reduce((obj, char) => {
            if((/[a-z]/).test(char)) {
                obj[char] ? obj[char] += 1 : obj[char] = 1;
            }
            return obj;
        }, {});

        return output;

    }

    return getLetters(data);
    
}

app.get('/', (req, res) => {
    res.send(alphabetChallenge());
})

app.listen(3000, () => {
    console.log('Starting app...');
    console.log(alphabetChallenge());
})