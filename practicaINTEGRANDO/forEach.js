//arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
/*callback Function to execute on each element, taking three arguments:
currentValue
The current element being processed in the array.
index Optional
The index of the current element being processed in the array.
array Optional
The array forEach() was called upon*/

lista = [1, 2, 3, 4, 5]
lista.forEach(function(element) {
    console.log(element);
});