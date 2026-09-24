export const OKTOPOST_QUESTIONS = [
  {
    id: 'oktopost-oop-singleton',
    type: 'open',
    topicId: 'oop',
    source: 'interview',

    text: 'Why is Singleton often considered a bad practice?',

    shortAnswer:
      'Singleton can introduce global state and hidden dependencies, which increases coupling and makes code harder to test and maintain.',

    explanation:
      'Singleton is not always wrong, but it can create hidden dependencies, shared mutable state and tight coupling. It also makes unit testing harder because replacing or mocking the dependency becomes more difficult. Dependency Injection is often preferable because dependencies remain explicit.',

    difficulty: 'medium',

    tags: [
      'singleton',
      'design-patterns',
      'dependency-injection',
    ],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-php-modern-versions',
    type: 'open',
    topicId: 'php',
    source: 'interview',

    text: 'What are the important differences between older and modern PHP versions?',

    shortAnswer:
      'Modern PHP has much stronger typing, better OOP features, attributes, enums, match expressions, constructor property promotion, readonly properties and major performance improvements.',

    explanation:
      'A good interview answer should mention the evolution from loosely structured PHP toward a more strongly typed and expressive language. Useful examples include scalar and return types, nullable and union types, typed properties, arrow functions, attributes, match, constructor property promotion, enums, readonly properties and improvements introduced in PHP 7 and PHP 8.',

    difficulty: 'medium',

    tags: ['php', 'php8', 'types'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-race-condition',
    type: 'open',
    topicId: 'concurrency',
    source: 'interview',

    text: 'What is a race condition?',

    shortAnswer:
      'A race condition happens when multiple operations access shared state concurrently and the final result depends on the order in which they execute.',

    explanation:
      'For example, two processes can read the same counter value, both increment it and then both write the same new value. One update is effectively lost. Common solutions include database transactions, row locks, atomic operations, mutexes and queues.',

    difficulty: 'medium',

    tags: ['race-condition', 'concurrency', 'locking'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-js-var-let',
    type: 'open',
    topicId: 'javascript',
    source: 'interview',

    text: 'What is the difference between var and let?',

    shortAnswer:
      'var is function-scoped and can be redeclared, while let is block-scoped and cannot be accessed before initialization because of the temporal dead zone.',

    explanation:
      'Both declarations are hoisted, but let remains unavailable in the temporal dead zone until its declaration is evaluated. var is scoped to a function while let is scoped to the nearest block. var also allows redeclaration in the same scope.',

    difficulty: 'easy',

    tags: ['var', 'let', 'scope', 'hoisting'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-js-task-queues',
    type: 'open',
    topicId: 'javascript',
    source: 'interview',

    text: 'What is the difference between microtasks and macrotasks in JavaScript?',

    shortAnswer:
      'After the current synchronous code finishes, JavaScript processes the microtask queue before moving to the next macrotask.',

    explanation:
      'Promise callbacks and queueMicrotask use the microtask queue. setTimeout and setInterval callbacks are examples of tasks often called macrotasks. After the current call stack completes, all available microtasks are processed before the event loop moves to the next task.',

    difficulty: 'medium',

    tags: ['event-loop', 'microtask', 'macrotask', 'promise'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-react-child-update-parent',
    type: 'open',
    topicId: 'react',
    source: 'interview',

    text: 'A parent component owns some state. What is the recommended way for a child component to update it?',

    shortAnswer:
      'Keep the state in the parent and pass a callback function to the child through props.',

    explanation:
      'React follows one-way data flow. The parent owns the state and passes the current value and an event handler or callback to the child. The child calls that callback when it wants to request a state change.',

    difficulty: 'easy',

    tags: ['state', 'props', 'lifting-state'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-docker-image-container',
    type: 'open',
    topicId: 'docker',
    source: 'interview',

    text: 'What is the difference between a Docker image and a Docker container?',

    shortAnswer:
      'An image is an immutable template containing the application and its dependencies. A container is a running instance of that image.',

    explanation:
      'Images are built from Dockerfiles and consist of layers. Containers are created from images and add a writable runtime layer, process state, networking and other runtime configuration.',

    difficulty: 'easy',

    tags: ['docker', 'image', 'container'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-rest-get-data',
    type: 'open',
    topicId: 'rest-api',
    source: 'interview',

    text: 'Can data be passed with a GET request and where should it be placed?',

    shortAnswer:
      'Yes. GET requests normally pass filtering or lookup parameters in the URL, usually as path parameters or query parameters.',

    explanation:
      'GET is intended for retrieving resources and should be safe and idempotent. Parameters are commonly passed in the URL, for example /users/10 or /users?status=active. A GET request body should generally not be relied upon because support and semantics are inconsistent.',

    difficulty: 'easy',

    tags: ['http', 'get', 'query-parameters'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-mysql-having',
    type: 'open',
    topicId: 'mysql',
    source: 'interview',

    text: 'What is HAVING used for in SQL?',

    shortAnswer:
      'HAVING filters grouped or aggregated results after GROUP BY, while WHERE filters rows before grouping.',

    explanation:
      'WHERE is applied to rows before aggregation. HAVING is evaluated on the grouped result and is therefore commonly used with aggregate functions such as COUNT, SUM or AVG.',

    difficulty: 'easy',

    tags: ['sql', 'having', 'group-by'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-mysql-index-selectivity',
    type: 'open',
    topicId: 'mysql',
    source: 'interview',

    text: 'What is index selectivity and why does it matter?',

    shortAnswer:
      'Index selectivity describes how well an indexed value narrows the result set. Highly selective columns usually make indexes more useful.',

    explanation:
      'A boolean column has very low selectivity because it contains only a few distinct values. A user ID or unique hash has high selectivity. The optimizer considers this when deciding whether using an index is cheaper than scanning many rows.',

    difficulty: 'medium',

    tags: ['mysql', 'index', 'selectivity'],

    interviewIds: ['oktopost-2026'],
  },

  {
    id: 'oktopost-mysql-composite-index',
    type: 'open',
    topicId: 'mysql',
    source: 'interview',

    text: 'How should column order be chosen in a composite MySQL index?',

    shortAnswer:
      'Column order should be based on the queries the index needs to support, including equality filters, ranges, joins and sorting; selectivity alone is not enough.',

    explanation:
      'Composite indexes follow the leftmost-prefix rule. A common strategy is to place columns used with equality predicates first, followed by range or ordering columns, but the correct order depends on the actual query. Selectivity matters, but it should not be treated as the only rule.',

    difficulty: 'hard',

    tags: ['mysql', 'index', 'composite-index'],

    interviewIds: ['oktopost-2026'],
  },
];