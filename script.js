function mapLetters(word) {
  const result = {};
  
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const sym = Symbol.for(letter);  // Use Symbol.for to get a symbol for that letter
    
    if (!result[sym]) {
      result[sym] = [];
    }
    result[sym].push(i);
  }
  
  return result;
}