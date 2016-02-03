var fsmHelper = require('./fsm')

var programmingLanguages = ['Ruby', 'JavaScript', 'Python', 'Swift',
                            'C', 'Go', 'Java', 'Objective-C', 'Haskell', 'C++',
                            'Lisp', 'Scheme', 'Scala', 'OCaml']

var listData = [[2, 3, 5, 7, 11, 13, 17, 19, 23], ['weird', 'strange', 'amazing',
              'spectacular', 'beautiful', 'charming', 'inconceivable',
              'remarkable'], ['tricks', 'tips', 'ways', 'fixes', 'changes',
              'quick changes', 'lines of code', 'functions', 'uses of anonymous functions',
              'uses of design patterns', 'facts'], ['to',
              'which will'], ['completely', 'absolutely', 'mindblowingly',
              'totally'], ['improve', 'revolutionise', 'transform',
              'shake up'], ['your use of', 'the way you think about',
              'the way you code in', 'the way you do testing in'],
              programmingLanguages,
              ['forever', 'like never before']]

var whyData = [['Why you'], ['should be using', 'have to use'], ['map', 'filter',
             'reduce', 'mapreduce', 'big data', 'machine learning',
             'artificial intelligence', 'functional programming', 'closures',
             'monads', 'Spark', 'hadoop', 'tail recursion'], ['to optimise', 'to improve',
             'to accelerate', 'to power', 'to level up', 'to boost'],
             ['your app performance...', 'your web service...',
             'your new startup...', 'your server performance...'],
             ['You won\'t believe the answer!', 'It will blow your mind!',
             'This changes everything.', 'You can\'t imagine it.']]

var xToYData = [['First you\'ll be'], ['shocked,', 'dismayed,', 'appalled,', 'furious,'],
            ['then you\'ll be'], ['inspired', 'amazed', 'astonished', 'swooning',
            'made speechless', 'bowled over', 'excited'], ['by'], ['this one-liner',
            'these 2 lines of code', 'this simple trick'], ['in'], programmingLanguages]

var howToData = [['It\'s possible!', 'You won\'t believe how this one developer did it.',
                  'You\'ll have to see this one line of code to believe it!',
                  'These 3 lines of code are all you need!'],
                  ['How to'], ['speed up your app', 'scale your app', 'raise your MAU',
                  'retain users', 'growth-hack your start-up', 'optimise your servers'],
                  ['with this one-liner', 'using this simple trick']]

var controversialData = [[]]

function constructStateChain (states) {
  var startState = new fsmHelper.State('start', states[0])
  var prevState = startState
  for (var i = 1; i < states.length - 1; i++) {
    var currState = new fsmHelper.State('normal', states[i])
    prevState.next = currState
    prevState = currState
  }
  var endState = new fsmHelper.State('end', states[states.length - 1])
  prevState.next = endState
  return startState
}

var allData = [listData, whyData, xToYData, howToData]
export var variants = allData.map(constructStateChain)
