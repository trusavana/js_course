var myAge = 3121;
var arrAge = [' год', ' года', ' лет'];


if(myAge % 100 == 0 || ((myAge % 100 >=11 && myAge % 100 <= 19) || (myAge % 10 >= 5)))
{
	console.log("Мой возраст " + myAge + arrAge[2]);
}
else if (myAge%10 == 1)
{
	console.log("Мой возраст " + myAge + arrAge[0]);
}
else if((myAge%10 >= 2 || myAge%10 <= 4))
{
	console.log("Мой возраст " + myAge + arrAge[1]);
}
