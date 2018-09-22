/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var answer = 0;
  for (var i = 0; i < preferences.length; i++) {
    var k = preferences[i];
    var m = preferences[k-1];
    if (preferences[m-1] == i+1) {
      answer++;
    }
  }
  return Math.floor(answer/3);
};
