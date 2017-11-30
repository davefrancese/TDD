function palindrom(string) {
  var wordLetters = string.toLowerCase().replace(/[^a-zA-Z]+/g, '');
  var paly = wordLetters.split("").reverse().join("")
  if (wordLetters.length <= 0 || string.length <= 0) {
    return 'add a phrase. phrase must contain a letter.';
  } else if (wordLetters === paly) {
    return paly
  } else {
    return 'not a palindrom'
  }
}

module.exports = {
  palindrom
}
