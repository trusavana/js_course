const arr1 = [1, 13, -3, 0];
let max;
let min = arr1[0];

let sum = 0;
let midl = 0;
for (let i = 0; i < arr1.length; i++)
{
	sum += arr1[i];	
}
console.log(sum);
let numEl = arr1.length;
midl = sum / numEl;
console.log(midl);
for (let i =0; i < arr1.length; i++)
 { 
	if(min > arr1[i])
		{
		 min=arr1[i];
 		 console.log(min);
		}
}
for (let i = 0; i < arr1.length;  i++)
{
	if(arr1[i] > arr1[i + 1])
	{
		max = arr1[i];
		console.log(max);
	}
}
const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
let arr2 = obj1['value'], arr3 = [];
for (let i = obj1['from']; i <= obj1['to']; i++) {	
	if (i != obj1['ignore'])	
	arr3.push(arr2[i]);
}
console.log(arr3.join(', '))