var lol = ['inspired', 'amazed', 'astonished', 'swooned',
    'made speechless', 'bowled over', 'excited'];

var lol = lol.sort();
var json = {};
lol.forEach(function (item) {
  json[item] = [];
})

console.log(JSON.stringify(json, null, 2));
