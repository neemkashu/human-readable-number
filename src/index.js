module.exports = function toReadable (number) {
    const firstDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teenDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen','nineteen'];
    const secondDigit = ['', '','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const hundreds = Math.floor(number / 100);
    const tens = Math.floor(number % 100 / 10);
    const ones = Math.floor(number % 10);
    let wordNumer = '';
    
    if (number === 0){
      return 'zero';
    }
    
    if (hundreds > 0) {
      wordNumer += `${firstDigit [hundreds]} hundred`;
    }
    if (tens > 0) {
      if (tens === 1 ) {
        wordNumer += ` ${teenDigit [ones]}`;
        return wordNumer.trim();
      } else {
          wordNumer += ` ${secondDigit[tens]}`;
      }
    }
    if (ones > 0) {
      wordNumer += ` ${firstDigit[ones]}`;
    }
    return wordNumer.trim();
}
