// Dots Calculator
function calculate(input) {
    if (!input) {
        return '';
    }

    let [firstOperand, operator, secondOperand] = input.split(' ');
    const firstLength = firstOperand.length;
    const secondLength = secondOperand.length;
    let result = 0;
    switch (operator) {
        case '+':
            result = firstLength + secondLength;
            break;
        case '-':
            result = firstLength - secondLength;
            break;
        case '*':
            result = firstLength * secondLength;
            break;
        case '//':
            result = Math.trunc(firstLength / secondLength);
            break;
        default:
            return 'invalid operator';
    }

    return result === 0 ? '' : '.'.repeat(result);
}

// Improvised tests
console.log(calculate('..... + ...............') === '....................' ? 'passed' : 'failed');
console.log(calculate('..... - ...') === '..' ? 'passed' : 'failed');
console.log(calculate('..... - .') === '....' ? 'passed' : 'failed');
console.log(calculate('..... * ...') === '...............' ? 'passed' : 'failed');
console.log(calculate('..... * ..') === '..........' ? 'passed' : 'failed');
console.log(calculate('..... // ..') === '..' ? 'passed' : 'failed');
console.log(calculate('..... // .') === '.....' ? 'passed' : 'failed');
console.log(calculate('. // ..') === '' ? 'passed' : 'failed');
console.log(calculate('. - .') === '' ? 'passed' : 'failed');
console.log(calculate('.. % .') === 'invalid operator' ? 'passed' : 'failed');
console.log(calculate(undefined) === '' ? 'passed' : 'failed');