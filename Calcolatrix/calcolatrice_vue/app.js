
new Vue({
  el: '#app',
  data: {
    expression: ''
  },
  methods: {
    appendToExpression(char) {
      this.expression += char;
    },
    clearExpression() {
      this.expression = '';
    },
    calculate() {
      try {
        const result = this.safeEval(this.expression);
        this.expression = result.toString();
      } catch (error) {
        this.expression = 'Error';
      }
    },
    safeEval(expression) {
      const operators = ['+', '-', '*', '/'];
      const tokens = [];
      let currentNum = '';
      for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (operators.includes(char)) {
          if (currentNum !== '') {
            tokens.push(parseFloat(currentNum));
            currentNum = '';
          }
          tokens.push(char);
        } else if (!isNaN(char) || char === '.') {
          currentNum += char;
        } else if (char !== ' ') {
          throw new Error('Invalid character');
        }
      }
      if (currentNum !== '') {
        tokens.push(parseFloat(currentNum));
      }

      let result = tokens[0];
      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = tokens[i + 1];
        
        switch (operator) {
          case '+':
            result += operand;
            break;
          case '-':
            result -= operand;
            break;
          case '*':
            result *= operand;
            break;
          case '/':
            if (operand === 0) {
              throw new Error('Division by zero');
            }
            result /= operand;
            break;
        }
      }
      return result;
    }
  }
});
