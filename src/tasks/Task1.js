
const Task1 = () => {
//1) дан код на javascript:
// Внесите изменения в код так, чтобы выдача консоли была такой:
// ['a', 'b', 'c', 'd', 'f']
// ['a', 'b', 'c', 'd', 'e']

    function update(list){
        let $newList = [...list]
        list.push('e')
        $newList.push('f')
        return $newList
    }

    const x = ['a', 'b', 'c', 'd']
    // console.log(update(x));
    // console.log(x);s     

    //! здесь мне лишь потребовалось создать копию массива на 9-й строчке.

};

export default Task1;