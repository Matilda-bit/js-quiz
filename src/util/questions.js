export default [
    {
      id: 'q1',
      text: 'Which operator returns true if the two compared values are not equal?',
      answers: [
        '<>',
        '~',
        '==!',
        '!==',
      ],
      correctAnswer: 3,
    },
    {
      id: 'q2',
      text: 'How is a forEach statement different from a for statement?',
      answers: [
        'Only a for statement uses a callback function.',
        'A for statement is generic, but a forEach statement can be used only with an array.',
        'Only a forEach statement lets you specify your own iterator.',
        'A forEach statement is generic, but a for statement can be used only with an array.',
      ],
      correctAnswer: 1,
    },
    {
      id: 'q3',
      text: 'Review the code below. Which statement calls the addTax function and passes 50 as an argument?',
      code: `function addTax(total) {
    return total * 1.05;
  }`,
      answers: [
        'addTax = 50;',
        'return addTax 50;',
        'addTax(50);',
        'addTax 50;',
      ],
      correctAnswer: 2,
    },
    {
      id: 'q4',
      text: 'How would you use this function to find out how much tax should be paid on $50?',
      code: `function addTax(total) {
    return total * 1.05;
  }`,
      answers: [
        'addTax($50);',
        'return addTax 50;',
        'addTax(50);',
        'addTax 50;',
      ],
      correctAnswer: 2,
    },
    {
      id: 'q5',
      text: 'Which statement is the correct way to create a variable called rate and assign it the value 100?',
      answers: [
        'let rate = 100;',
        'let 100 = rate;',
        '100 = let rate;',
        'rate = 100;',
      ],
      correctAnswer: 0,
    },
    {
      id: 'q6',
      text: 'Which statement creates a new object using the Person constructor?',
      answers: [
        'var student = new Person();',
        'var student = construct Person;',
        'var student = Person();',
        'var student = construct Person();',
      ],
      correctAnswer: 0,
    },
  ];
  