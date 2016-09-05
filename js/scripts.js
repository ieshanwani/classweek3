// i will make an array with a list of different types of donuts
var donutsArray = ['Powder','Glazed','oreo','Blueberry'];

// this variable will find the first item in my donutsArray
var firstDonut = donutsArray[0];

// i will make an if... else... conditional that will test to
// see weather the first item in my donutArray is an Orea
// we will also test weather the third donut is Cinnamon donut
if (firstDonut == 'Orea') {
   console.log('This first donut is an oreo donut');
} else if(donutsArray[2] == 'oreo'){
   console.log('This third donut is a cinnamon donut.')
} else {
   console.log('The first donut is not an oreo donut');
   console.log('Actually, the first donut is '+firstDonut);
 }
