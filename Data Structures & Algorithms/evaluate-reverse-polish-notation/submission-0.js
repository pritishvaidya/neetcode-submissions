class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for(let index = 0; index < tokens.length; index++) {
            if(tokens[index] === "+" ||tokens[index] === "-" || tokens[index] === "*" || tokens[index] === "/") {
                let secondElement = stack.pop()
                let firstElement = stack.pop()
                // Perform the operation
            let value;
                switch (tokens[index]) {
                    case "+":
                        value = firstElement + secondElement;
                        break;
                    case "-":
                        value = firstElement - secondElement;
                        break;
                    case "*":
                        value = firstElement * secondElement;
                        break;
                    case "/":
                        value = Math.trunc(firstElement / secondElement); // Use truncation for integer division
                        break;
                }
                stack.push(value);
            } else {
                stack.push(Number(tokens[index]))
            }
        }

        return stack.pop()
    }
}
