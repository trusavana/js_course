function math(ravno){
	var x = 2;
	var y = 4;
	var ravno = x+y;
	var a = parseInt(x.value);
	var b = parseInt(y.value);	
	switch (ravno) {
		case '+':
			console.log(a + b);
			break;
		case '-':
			x - y;
			break;
		case '/':
			x / y;
			break;
		case '*':
			x - y;
			break;
		default:
			console.log("Не правильное значение.");
			break;
	}
}