var myAge = 22;
var arrAge = [' год', ' года', ' лет'];



if ((myAge == 1) || (myAge == 21) || (myAge == 31) || (myAge == 41) || (myAge == 51) || (myAge == 61) || (myAge == 71) || (myAge == 81) || (myAge == 91))
{
	console.log("Мой возраст " + myAge + arrAge[0]);
}
else if((myAge >= 2 && myAge <= 4) || (myAge >= 22 && myAge <= 24) || (myAge >= 32 && myAge <= 34) || (myAge >= 42 && myAge  <= 44)  || (myAge >= 52 && myAge <= 54)  || (myAge >= 62 && myAge <= 64) || (myAge >= 72 && myAge <= 74) || (myAge >= 82 && myAge <= 84) || (myAge >= 92 && myAge <= 94))
{
	console.log("Мой возраст " + myAge + arrAge[1]);
}
else if((myAge >=5 && myAge <= 20) || (myAge >= 25 && myAge <= 30) || (myAge >= 35 && myAge <= 40) || (myAge >= 45 && myAge <= 50) || (myAge >= 55 &&myAge  <= 60) || (myAge >= 65 && myAge <= 70) || (myAge >= 75 && myAge <= 80) || (myAge >= 85 && myAge <= 90) || (myAge >= 95 && myAge <= 100))
{
	console.log("Мой возраст " + myAge + arrAge[2]);
}
else {
	console.log("Не правильный возраст");
}

// switch (myAge) {
// 	case 1:
		
// 		 break;		
// 	case 2 || 3 || 4:
// 		 console.log("Мой возраст " + myAge + arrAge[1]);
// 		 break;		
// 	case 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12 || 13 || 14:
// 	 	console.log("Мой возраст " + myAge + arrAge[2]);
// 	 	break;	
// 	default:	
		
// 		break;
// }
