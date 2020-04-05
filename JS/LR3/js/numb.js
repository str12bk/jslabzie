function max() {

	let a;
	let b;
	let c;

	a = parseInt(prompt('Введите первое число: '), 10);
	b = parseInt(prompt('Введите второе число: '), 10);
	c = parseInt(prompt('Введите третье число: '), 10);

	if ( a >= b && a >= c ) {
		alert(a);
	} else if ( b >= c && b >= a ) {
		alert(b);
	} else if ( c >= a && c >= b ) {
		alert(c);
	}
}
max();