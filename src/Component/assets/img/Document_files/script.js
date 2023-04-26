


// function counter (n) {
//     let count = 0;
//     const a = () => n + ++count ;
//     return a
// }

// const count = counter("nata")
// const count2 = counter("igor")
// count()
// count()
// count()
// console.log(count())
// console.log(count2())

const a = {
    name: 'Igor',
    age: 33,
    fn: {
        country: 'Minsk',
        myFn: {
            color: "red"
        }
    }
}

let b = JSON.parse(JSON.stringify(a))
b.fn.myFn.color = "blue"
console.log(a.fn.myFn.color)
console.log(b.fn.myFn.color)


const o = {
        'todolistId1': [
            {id: '1', title: 'CSS', isDone: false},
            {id: '2', title: 'JS', isDone: true},
            {id: '3', title: 'React', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'bread', isDone: false},
            {id: '2', title: 'milk', isDone: true},
            {id: '3', title: 'tea', isDone: false}
        ]
    }


let b = {...o};

for(key in o) {
    console.log(key === 'todolistId2' )
    
}

console.log(o)