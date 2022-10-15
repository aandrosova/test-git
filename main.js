function calc(action, a, b) {
    action = prompt('Введите необходимое действие', '');
    a = +prompt('Введите первое число', '');
    b = +prompt('Введите второе число', '');
    if (action === "add") {
        return alert(a + b);
    } else if (action === "multi") {
        return alert(a * b);
    } else if (action === "subtract") {
        return alert(a - b);
    } else {
        return alert('Вы ввели неверные значения');
    }
}

calc();
