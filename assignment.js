
/**
 * @desc This file contains String Reversal, Quick Sort and Binary Search Algorithms.
 */

//*******************String Reversal************************ */
console.log("********String Reversal**********");
var String  = "123456";
var reverseString = "";
var i;

for (var i = String.length; i >= 0; i--){
    reverseString += String.charAt(i);
}

console.log(reverseString);

//****************Quick Sort Algorithm ******************/
console.log("********Quick Sort Algorithm**********");
var array = [54,987,65,654,6,5,45,54,23,5];
console.log(array);
result = quicksort(array, 0, array.length-1);
console.log(result);

function quicksort(array, left, right){
    if(left < right){
        var pivot = right;
        var index = partition(array, pivot, left, right);

        quicksort(array, left, index - 1);
        quicksort(array, index + 1, right);
    }
    return array;
}

function partition(array, pivot, left, right){
    var pivotValue = array[pivot],
        index = left;

    for(var i = left; i < right; i++){
        if(array[i] < pivotValue){
            swap(array, i, index);
            index++;
        }
    }
    swap(array, right, index);
    return index;
}

function swap(array, x, y){
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

//*********************Binary Search Iterative********************* */
console.log("********Binary Search **********");
var a = [1,2,3,4,5,6,7,8,9,10, 11];
var b = 5;
result = binarSearchIterative(a,b);
console.log(result);

console.log( "Recurscive Execution");
result = binarySearchRecursive(a, b, 0, a.length-1);
console.log(result);

function binarSearchIterative(array, x)
{

    var left = 0;
    var right = array.length - 1;

    while (left <= right)
    {
        var mid = Math.floor(left + ((right - left)/2));
        console.log( left + " " + mid + " " + right);
        if (array[mid] == x)
        {return true;}
        else if (x < array[mid])
        {right = mid - 1;}
        else
        {left = mid + 1;}

    }

    return false;
}

function binarySearchRecursive(array , x, left, right)
{

    if (left > right)
    {
        return false;
    }

    var mid = Math.floor(left + ((right - left)/2));
    console.log( left + " " + mid + " " + right);
    if (array[mid]  == x)
    {return true;}
    else if (x < array[mid])
    {return binarySearchRecursive(array, x, left, mid-1);}
    else
    {return binarySearchRecursive(array, x, mid+1, right);}

}