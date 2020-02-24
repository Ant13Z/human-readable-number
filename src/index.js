module.exports = function toReadable (number) {
    let simpleName = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];

    let dozen = [
        'zero',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
        'hundred'
    ];

    let strNumber = [];
    if (Math.floor(number / 100)) {
        strNumber.push(simpleName[Math.floor(number / 100)]);
        strNumber.push(dozen[10]);
    }

    if (number % 100 > 19) {
        strNumber.push(dozen[Math.floor(number % 100 / 10)]);
    }

    if (number % 100 < 20 && number % 100 > 0) {
        strNumber.push(simpleName[number % 100]);
    } else if (number % 100 % 10 || number === 0) {
        strNumber.push(simpleName[number % 100 % 10]);
    }

    return strNumber.join(' ');
};
