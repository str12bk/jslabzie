var time;

time = prompt('Вы не подскажете, который час?');
if ( time <= 4 ) {
	alert('Доброй ночи!');
	} else if ( time <= 10 ) {
		alert('Дорброе утро!');
	} else if ( time <= 16 ) {
		alert('Добрый день!');
	} else if ( time <= 22 ) {
		alert('Добрый вечер!')
	} else if ( time <= 24 ) {
		alert('Доброй ночи!');
	} else {
		alert('Ошибочка вышла..');
	}