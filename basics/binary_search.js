// Binary Search by the method of RECUSION.
// complexity 1/2,1/4,1/8,1/16...... log(n)

// Array sample to test the binary search algorithm.
// const ARRAY = [3,14,21,24,40,43,60,62,70,90];


const binarySearch = (number, midpoint,left,right,list={}) => 
{
    if(number == list[midpoint])
    {
        return true;
    }
    if(midpoint == left){
        return false;
    }    
    
    if (number > list[midpoint] )
    {
        left = midpoint;
        midpoint = Math.floor((left+right)/2);
        console.log('midpooint:',midpoint,'left: ',left, 'list value: ', list[midpoint],'number: ',number);

        //we need to test if the funtion returns true, this way every recursion will return a true value in case that the number is found.
        if(binarySearch(number,midpoint,left,right,list))
        {
            return true;
        }
    }

    if(number < list[midpoint])
    {
        right = midpoint;
        midpoint = Math.floor((left+right)/2);
        console.log('midpooint:',midpoint,'right: ',right, 'list value: ', list[midpoint],'number: ',number);

        if(binarySearch(number,midpoint,left,right,list))
        {
            return true;
        }  
    } 
}
// generate an array with a lenght of N testing purpose
let ARRAY =[];
const N=1000;
for(let i = 1; i<=N;i++){
    ARRAY.push(i);
}

// Run the Function binarySearch
// Declare 4 constants LEFT, RIGHT, NUMBER and MIDPOINT to pass as parameters. 
const RIGHT = ARRAY.length-1;
const NUMBER = 1;
const MIDPOINT = Math.floor(RIGHT/2);
const LEFT = 0;

// If the function returns true if will alert that the number was found else number not found.
if(binarySearch(NUMBER,MIDPOINT,LEFT,RIGHT,ARRAY)){
    console.log('Number found');
}
else{
    console.log("Number not found ");
}

