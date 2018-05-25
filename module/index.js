function itsMe(a){
	let name = a;
	let par = document.createElement('p');
	if(name != null){
		par.innerHTML = '\"I`ts me, ' + name + '\"';
		console.log('\"I`ts me, ' + name + '\"');
	}
	else{
		par.innerHTML = '\"I`ts me, trusavana\"';
		console.log('\"I`ts me, trusavana\"');
	}
	

	return document.body.appendChild(par);
}


function compare(a, b){
	let firstt = a;
	let second = b;
	let par = document.createElement('p');
	if(firstt > second){
		par.innerHTML = (firstt + " > " + second);

		return document.body.appendChild(par);
	}
	else if(firstt < second && (typeof(firstt) != "string" && typeof(second) != "string")){
		par.innerHTML = (firstt + " < " + second);
		console.log(par);

		return document.body.appendChild(par);
	}
	else if(firstt == second){
		par.innerHTML = (firstt + " == " + second);
		console.log(par);

		return document.body.appendChild(par);
	}
	else if(typeof(firstt) === "string" || typeof(second) === "string" || (typeof(firstt) === "string" && typeof(second) === "string")){
		par.innerHTML = 'НЕ ЧИСЛО';
		console.log(par);

		return document.body.appendChild(par);
	}
}

function row(a, b, c, str){
	let num = [];
	for(let i = 0; i < arguments.length - 1; i++)
	{
		num.push(arguments[i]);
	}
	switch (str) {
		case '<':
			num.sort();
			return num.join('<');
			break;
		case '>':
			num.sort().reverse();
			return num.join('>')
			break;
		default:
			return 'что-то не то';
			break;
	}

}

function fact(n){	
	return n ? n * fact(n - 1) : 1;
}

function matrixDiff(arr1, arr2){
	let numArr1 = [];
	for(let i in arr1){
		numArr1 = [i];
	}

	return numArr1;
}

function strangeSearch(arr){
	//let num = arr.lengthl;
	
	let button = document.createElement('button');	
	button.id = 'go';
	button.innerHTML = 'Search';
	document.body.appendChild(button);
	for(let i = 0; i < arr.length; i++){
		let input = document.createElement('input');
		let par = document.createElement('p');
		par.innerHTML = arguments[i];

		input.setAttribute('type', 'number');
		input.setAttribute('value', '0');
		//input.inputElement.value();
		document.body.appendChild(input);
		document.body.appendChild(par);
	}

}