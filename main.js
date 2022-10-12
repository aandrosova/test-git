let answer = prompt('Кто там?', '');
if(answer == 'Админ') {
    let check = prompt('Пароль?', '');
    if(check == 'Отмена') {
        alert('ОТМЕНЕНО');
    } else if(check == 'Я главный') {
        alert('Здравствуйте!');
    } else {
        alert('Неверный пароль!');
    }
} else if(answer == 'Отмена') {
    alert('ОТМЕНЕНООООО!');
} else {
    alert('Не путю!');
   
}

