module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    const toWord100 = (n, suffix) => {
        switch (n) {
            case 0: return '';
            case 1: return `one ${suffix}`;
            case 2: return `two ${suffix}`;
            case 3: return `three ${suffix}`;
            case 4: return `four ${suffix}`;
            case 5: return `five ${suffix}`;
            case 6: return `six ${suffix}`;
            case 7: return `seven ${suffix}`;
            case 8: return `eight ${suffix}`;
            case 9: return `nine ${suffix}`;
        }
    }

    const toWord10 = (n) => {
        switch (n) {
            case 0: return '';
            case 1: return 'ten';
            case 2: return 'twenty';
            case 3: return 'thirty';
            case 4: return 'forty';
            case 5: return 'fifty';
            case 6: return 'sixty';
            case 7: return 'seventy';
            case 8: return 'eighty';
            case 9: return 'ninety';
        }
    }

    const toWord1 = (n) => {
        switch (n) {
            case 0: return '';
            case 1: return `one`;
            case 2: return `two`;
            case 3: return `three`;
            case 4: return `four`;
            case 5: return `five`;
            case 6: return `six`;
            case 7: return `seven`;
            case 8: return `eight`;
            case 9: return `nine`;
            case 10: return `ten`;
            case 11: return `eleven`;
            case 12: return `twelve`;
            case 13: return `thirteen`;
            case 14: return `fourteen`;
            case 15: return `fifteen`;
            case 16: return `sixteen`;
            case 17: return `seventeen`;
            case 18: return `eighteen`;
            case 19: return `nineteen`;
        }
    }

    let ones = number % 10;
    let tens = (number - ones) % 100 / 10;
    const hundreds = (number - tens * 10 - ones) % 1000 / 100;
    if (tens === 1) {
        ones += 10;
        tens = 0;
    }

    const words = [];
    words.push(toWord100(hundreds, 'hundred'));
    words.push(toWord10(tens));
    words.push(toWord1(ones));
    return words.filter(s => s).join(' ');
}
