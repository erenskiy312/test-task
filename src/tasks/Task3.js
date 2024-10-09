
const Task3 = () => {
 // 3)Внутренняя ссылка сайта – это ссылка, ведущая с одной страницы сайта на
 // другую. Внешняя ссылка – это ссылка, ведущая на страницу,
 //  расположенную на другом сайте. Нужно написать функцию, которая с любой
 //  веб-страницы собирает все ссылки, а в консоль пишет про каждую из них,
 //  внешняя эта ссылка или внутренняя.   

    function collectingLinks () {
        let links = document.querySelectorAll('a')
        let currentHost = window.location.host //! вытаскиваем текущий хост сайта

        links.forEach(link => {
            const linkHost = new URL(link.href).host //! извлекаем хост
            if(linkHost === currentHost){
                console.log(`Внутренняя ссылка : ${link.href}`);
            } else {
                console.log(`Внешняя ссылка : ${link.href}`);
            }
        })
    }

    collectingLinks()
}


export default Task3