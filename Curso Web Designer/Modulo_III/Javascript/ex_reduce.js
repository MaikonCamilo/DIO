const numbers = [1, 2, 3, 4, 5, 6]

const med = (acc, el, i ,array) => {
    if(i === array.length - 1){
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

const media = numbers.reduce(med)
console.log(media)