
//functional programming example. function mapForEach takes an array and uses a function to map it to a new array
function mapForEach(arr, fn) {

  var newArr =[];
    for (var i=0; i< arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
  };

  return newArr;
}

//Sorts the array in alphabetical order
function sortForEach(arr, fn) {

  var newArr =[];
    for (var i=0; i< arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
        newArr.sort();
  };

  return newArr;
}


//new array object with the letters for the DNA base pairs
var arr1 = ["a", "c", "g", "t", "c", "t", "g", "a", "a","g","c","t","a","t","t","t"];
console.log(arr1);

//Creates a new array object that replaces the letters of the DNA base pairs with  their full names
var arr2 = mapForEach(arr1, function(item) {
  switch(item) {
    case "a":
        return "adenine";
        break;
    case "c"  :
        return "cytosine";
        break;
    case "g":
        return "guanine";
        break;
    case "t":
        return "thymine";
        break;
}

});

console.log(arr2);

var arr3 = sortForEach(arr2, function(item){
  return item;

});

console.log(arr3);

//Immediately invoked function expression to determine how many sets of compatible base pairs there are. A with T, C with G.
(function numOfPairs(arr) {

  var numa = 0;
  var numc = 0;
  var numg = 0;
  var numt = 0;

  for (var i=0; i< arr.length; i++) {


        if(arr[i] == "a")
          numa++;
       if(arr[i] == "c")
      numc++;
        if(arr[i] == "g")
          numg++;
       if(arr[i] == "t")
         numt++;

    };

    console.log("There are " + numa + " adenine");
    console.log("There are " + numc + " cytosine");
    console.log("There are " + numg + " guanine");
    console.log("There are " + numt + " thyamine");

// Calculate the maximum number of posible base pairings
    console.log("There are " + Math.min(numa, numt) + " possible A-T base pairings");
    console.log("There are " + Math.min(numc, numg) + " possible C-G base pairings");

})(arr1);
