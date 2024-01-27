const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const shapes = ["circle", "square", "triangle", "star"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(words.length, 3);
assertEqual(tail(shapes).length, 3);
assertEqual(tail(shapes)[0], "square");
