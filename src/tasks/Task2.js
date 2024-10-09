
const Task2 = () => {
//  2) Дана веб-страница по адресу https://lenta.ru/news/2024/09/18/lebedev-/ Нужно
//  написать функцию, которая заменит все ссылки внутри текста новости на
//  текст вида [URL|текстовое содержимое].
//  Пример: «ВКонтакте» =&gt; [«ВКонтакте»|https://vk.com/video-
//  211437014_456244410]

function changeLinks() {
    let links = document.querySelectorAll('a') //! собираем все элементы <a> на странице

    links.forEach(link => {
        let linkText = link.textContent; //! извлекаем тексты ссылок, (text and url)
        let linkHref = link.href;

        let newText = `[${linkText}|${linkHref}]` //! формируем строку ссылки

        let span = document.querySelectorAll('span')
        span.textContent = newText //! помещаем в <span> отфарматированный текст

        link.parentNode.replaceChild(span, link) //! заменяем ссылку на элемент <span> с новым текстом
    })
}

window.onload = changeLinks //! запуск функции после загрузки страницы

};

export default Task2;