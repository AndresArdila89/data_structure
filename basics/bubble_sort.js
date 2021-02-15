// Buble  Sort 


var array = [8,6,3,9,1,5,0]

for ( var i =0; i < array.length; i++){
    for (var j = 0; j < array.length; j++){
        if(array[j] > array[j+1]){
            var  bubble = array[j];
            array[j] = array[j+1];
            array[j+1] = bubble;
        } 
    }
}


// Print the sorted array 
console.log("-------------- I'm Sorted ----------------")
for ( var x =0; x < array.length; x++){

    console.log(array[x]);   
}
