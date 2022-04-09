// Dots Calculator
function calculate(input) {
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

    if (result === 0) {
        return '';
    }

    return '.'.repeat(result);
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