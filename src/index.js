var arr=[1,2,3,4]
function max(){
  let result= Math.max(...arr);
  return result
}
max();

function min(){
  let result= Math.min(...arr);
  return result
}
min();

function avg(){
  let result
  arr.forEach(function(i){
    result += parseInt(arr[i]);
  })
  result= parseInt(result)/arr.length
  return result
}
avg();

exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
