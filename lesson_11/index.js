
var operation = 'pov';
var a = 3;
var b = 3;	
switch (operation) {
	case 'add':{
		console.log(a + b);
		break;
	}
	case 'sub':{
		console.log(a - b);
		break;
	}
	case 'mult':{
		console.log(a * b);
		break;
	}
	case 'div':{
		console.log(a / b);
		break;
	}
	case 'pow':{
		console.log(Math.pow(a, b));
	}
	
	default:{
		
		break;
	}
}

