"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let pivot = array[Math.floor(Math.random() * array.length)]
  let left = [];
  let right = [];
  let equals = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
        left.push(array[i]);
      } else if(array[i] > pivot) {
        right.push(array[i]);
      } else {
        equals.push(array[i]);
      }
    }
    return quickSort(left).concat(equals).concat(quickSort(right));
  }
  

function mergeSort(array) {
  let middle = Math.floor(array.length / 2)
  if(array.length <= 1) return array;
  let left = array.splice(0, middle) 
  return merge(mergeSort(left), mergeSort(array));
}
  
function merge(left, right) {
  let arr = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      arr.push(left[0]);
      left.shift();
    } else {
      arr.push(right[0])
      right.shift();
    }
  }
  return (arr).concat(left).concat(right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
