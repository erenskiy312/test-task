const Task4 = () => {
 // Нужно написать функцию, превращающую количество секунд в
//  человекочитаемый промежуток времени (K дней, L часов, M минут, N
//  секунд). на вход подаётся int, на выходе должна быть строка. склонение и
//  множественное/единственное числов интервалов времени можно не
//  учитывать. пример: 87448 --> '1 days 17 min 28 sec';.

function readingTimeSeconds (seconds) {
    const days = Math.floor(seconds / (24 * 3600)); //! Делим общее кол-во секунд на кол-во секунд в одном дне (24 часа * 3600 секунд в часе)
    seconds %= 24 * 3600;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;

    let result = ''; //! Создаем пустую строку для выведения результата
    if (days) result += `${days} days`; //! Если кол-во дней больше нуля, добавляем результат рядом с надписью 'days'
    if (hours) result += ` ${hours} hours`;
    if (minutes) result += ` ${minutes} min`
    if (sec) result += ` ${sec} sec`

    return result.trim()  //! С помощью метода trim() удаляем лишние пробелы
}

console.log(readingTimeSeconds(87448));

}

export default Task4