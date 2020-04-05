var a;
var b;

a = prompt('Логин: ');
b = prompt('Пароль: ');

if ( a == ('Seva') && b == 500 || a == ('Stas') && b == 800 || a == ('Valera') && b == 200 ) {
	alert('Добро пожаловать.');
} else {
	alert('Увы, пользователь не найден.');
}