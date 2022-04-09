/**
 * Handles validity of parentheses, determines whether there is a closing parenthesis,
 * for each opening parenthesis and whether they are in the correct order
 */
function isValidParentheses(parenthesesStr) {
    if (parenthesesStr.length < 0 || parenthesesStr.length > 100) {
        return false;
    }
    let result = 0;

    for (let i = 0; i < parenthesesStr.length && result >= 0; i++) {
        result += (parenthesesStr[i] == '(') ? 1 : -1;
    }

    return (result == 0);
}

console.log(isValidParentheses('()'));
console.log(isValidParentheses(')(()))'));
console.log(isValidParentheses('('));
console.log(isValidParentheses('(())((()())())'));