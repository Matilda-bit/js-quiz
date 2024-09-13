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
      id: 'q5',
      text: 'Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?',
      answers: [
        'var student = new Person();',
        'var student = construct Person;',
        'var student = Person();',
        'var student = construct Person();',
      ],
      correctAnswer: 0,
    },
    {
      id: 'q6',
      text: 'When would the final statement in the code shown be logged to the console?  When would "results shown" be logged to the console?',
      code: `let modal = document.querySelector('#result');
  setTimeout(function(){
      modal.classList.remove('hidden);
  }, 10000);
  console.log('Results shown');`,
      answers: [
        'after 10 seconds',
        'after results are received from the HTTP request',
        'after 10000 seconds',
        'immediately',
      ],
      correctAnswer: 3,
    },
    {
        id: 'q7',
        text: 'Which snippet could you add to this code to print "food" to the console?',
        code: `class Animal {
          static belly = [];
          eat() {
            Animal.belly.push('food');
          }
        }
        let a = new Animal();
        a.eat();
        console.log(/* Snippet Here */); //Prints food`,
        answers: [
          'a.prototype.belly[0]',
          'Object.getPrototype0f(a).belly[0]',
          'Animal.belly[0]',
          'a.belly[0]'
        ],
        correctAnswer: 2,
      },
      {
        id: 'q8',
        text: 'You\'ve written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3, and 4 being logged?',
        answers: [
          {
            label: 'A',
            code: `for (var i = 1; i <= 4; i++) {
              setTimeout(function () {
                console.log(i);
              }, i * 10000);
            }`
          },
          {
            label: 'B',
            code: `for (var i = 1; i <= 4; i++) {
              (function (i) {
                setTimeout(function () {
                  console.log(j);
                }, j * 1000);
              })(j);
            }`
          },
          {
            label: 'C',
            code: `for (var i = 1; i <= 4; i++) {
              setTimeout(function () {
                console.log(i);
              }, i * 1000);
            }`
          },
          {
            label: 'D',
            code: `for (var i = 1; i <= 4; i++) {
              (function (j) {
                setTimeout(function () {
                  console.log(j);
                }, j * 1000);
              })(i);
            }`
          },
          {
            label: 'E',
            code: `for (var j = 1; j <= 4; j++) {
              setTimeout(function () {
                console.log(j);
              }, j * 1000);
            }`
          }
        ],
        correctAnswer: 3,
      },
      
    {
      id: 'q9',
      text: 'How does a function create a closure?',
      answers: [
        'It reloads the document whenever the value changes.',
        'It returns a reference to a variable in its parent scope.',
        'It completes execution without returning.',
        'It copies a local variable to the global scope.',
      ],
      correctAnswer: 1,
    },
    {
        id: 'q10',
        text: 'Which statement creates a new function called discountPrice?',
        answers: [
          {
            label: 'A',
            code: `let discountPrice = function (price) {
              return price * 0.85;
            };`
          },
          {
            label: 'B',
            code: `let discountPrice(price) {
              return price * 0.85;
            };`
          },
          {
            label: 'C',
            code: `let function = discountPrice(price) {
              return price * 0.85;
            };`
          },
          {
            label: 'D',
            code: `discountPrice = function (price) {
              return price * 0.85;
            };`
          }
        ],
        correctAnswer: [0, 3],
      },
    {
      id: 'q11',
      text: 'What is the result in the console of running the code shown?',
      code: `var Storm = function () {};
  Storm.prototype.precip = 'rain';
  var WinterStorm = function () {};
  WinterStorm.prototype = new Storm();
  WinterStorm.prototype.precip = 'snow';
  var bob = new WinterStorm();
  console.log(bob.precip);`,
      answers: [
        'Storm()',
        'undefined',
        "'rain'",
        "'snow'",
      ],
      correctAnswer: 3,
    },
    {
      id: 'q12',
      text: 'You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?',
      answers: [
        {
          label: 'A',
          code: `/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/`
        },
        {
          label: 'B',
          code: `/\d\d:\d\d:\d\d/`
        },
        {
          label: 'C',
          code: `/[0-9]+:[0-9]+:[0-9]+/`
        },
        {
          label: 'D',
          code: `/ : : /`
        }
      ],
      correctAnswer: 1
    },
    {
      id: 'q13',
      text: 'What is the result in the console of running this code?',
      code: `'use strict';
      function logThis() {
        this.desc = 'logger';
        console.log(this);
      }
      new logThis();`,
      answers: [
        'undefined',
        'window',
        '{desc: "logger"}',
        "function",
      ],
      correctAnswer: 2,
    },
    {
      id: 'q14',
      text: "How would you reference the text 'avenue' in the code shown?",
      code: `'let roadTypes = ['street', 'road', 'avenue', 'circle'];`,
      answers: [
        'roadTypes.2',
        'roadTypes[3]',
        'roadTypes.3',
        'roadTypes[2]',
      ],
      correctAnswer: 3,
    },
    {
      id: 'q15',
      text: 'What is the result of running this statement?',
      code: `console.log(typeof 42);`,
      answers: [
        'float',
        'value',
        'number',
        'integer',
      ],
      correctAnswer: 2,
    },
    {
      id: 'q16',
      text: 'Which property references the DOM object that dispatched an event?',
      answers: [
        'self',
        'object',
        'target',
        'source',
      ],
      correctAnswer: 2,
    },
    {
      id: 'q17',
      text: "You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?",
      code: `function addNumbers(x, y) {
        if (isNaN(x) || isNaN(y)) {
        }
      }`,
      answers: [
        "exception('One or both parameters are not numbers')",
        "catch('One or both parameters are not numbers')",
        "error('One or both parameters are not numbers')",
        "throw('One or both parameters are not numbers')",
      ],
      correctAnswer: 3,
    },
    {
      id: 'q18',
      text: 'Which method converts JSON data to a JavaScript object?',
      answers: [
        'JSON.fromString();',
        'JSON.parse()',
        'JSON.toObject()',
        'JSON.stringify()',
      ],
      correctAnswer: 1,
    },
    {
      id: 'q19',
      text: 'When would you use a conditional statement?',
      answers: [
        'When you want to reuse a set of statements multiple times.',
        'When you want your code to choose between multiple options.',
        'When you want to group data together.',
        'When you want to loop through a group of statement.',
      ],
      correctAnswer: 1,
    },
    {
      id: 'q20',
      text: 'What would be the result in the console of running this code?',
      code: `for (var i = 0; i < 5; i++) {
        console.log(i);
      }`,
      answers: [
        '1 2 3 4 5',
        '1 2 3 4',
        '0 1 2 3 4',
        '0 1 2 3 4 5',
      ],
      correctAnswer: 2,
    },
  ];
  