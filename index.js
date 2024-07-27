function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define vowels
    const vowels = new Set('aeiouAEIOU');

    // Flag to check if we are inside a word
    let inWord = false;

    // Process each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === '.') {
            // Stop processing when the period is encountered
            break;
        }

        // Update length counter
        length++;

        // Check if the character is a vowel
        if (vowels.has(char)) {
            vowelCount++;
        }

        // Check for word boundaries
        if (char.match(/[a-zA-Z]/)) {
            // If character is a letter
            if (!inWord) {
                // We have encountered the start of a new word
                wordCount++;
                inWord = true;
            }
        } else {
            // End of a word
            inWord = false;
        }
    }

    // Output results
    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
}

// Example usage
const sentence = "Hello world. This is an example sentence.";
analyzeSentence(sentence);
