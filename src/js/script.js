// Jairo : 10134-10164, 31,
// Diego: 10165-10240, 76,
// Jo: 10272-10275, 4,
// Kawai: 10241-10271, 31
// Coco: 10276-10287, 12
// Shirley: 10288-10302, 15
// Betty: 10303-10308, 6,
// Rajiv: 10309, 75
// Christian Perez, 10385, 30
// Victor Perez, 10416, 30
// Joao Tunque, 10447, 30
// Victor Vela, 10478, 30

//i = 10240, i <= init + options
var optionsList = [];
var peopleList = [
    {
        id: 1,
        name: 'Jairo Aldana',
        options: 30,
        init: 10134,
        numeros: []
    },
    {
        id: 2,
        name: 'Diego Briceno',
        options: 75,
        init: 10165,
        numeros: []
    },
    {
        id: 3,
        name: 'Jo Sue Yep',
        options: 3,
        init: 10272,
        numeros: []
    },
    {
        id: 4,
        name: 'Christian Leon',
        options: 30,
        init: 10241,
        numeros: []
    },
    {
        id: 5,
        name: 'Jorge Nizama',
        options: 12,
        init: 10276,
        numeros: []
    },
    {
        id: 6,
        name: 'Shirley Nizama',
        options: 15,
        init: 10288,
        numeros: []
    },
    {
        id: 7,
        name: 'Betty Leva',
        options: 6,
        init: 10303,
        numeros: []
    },
    {
        id: 8,
        name: 'Rajiv Toora',
        options: 75,
        init: 10309,
        numeros: []
    },
    {
        id: 9,
        name: 'Christian Perez',
        options: 30,
        init: 10385,
        numeros: []
    },
    {
        id: 10,
        name: 'Victor Perez',
        options: 30,
        init: 10416,
        numeros: []
    },
    {
        id: 11,
        name: 'Joao Tunque',
        options: 30,
        init: 10447,
        numeros: []
    },
    {
        id: 12,
        name: 'Victor Vela',
        options: 30,
        init: 10478,
        numeros: []
    }

]

function addOptions(person) {
    let i;
    for (i = person.init; i <= person.init + person.options; i++) { 
      optionsList.push(i);
      person.numeros.push(i);
    }
}

peopleList.map(function (person, index){
    addOptions(person);
})


Array.prototype.getWinner = function(){
    return this[Math.floor(Math.random()*this.length)];
}

optionsList.getWinner()

// function getNameWinner(option) {
//     // peopleList.find(function(element) {
//     //     console.log(element)
//     //     return element.numeros == option;
//     // });
//     // peopleList.filter(x => x.id === '45');
//     peopleList.map(function (person, index){
//         person.numeros.filter(function(option){
//             debugger;
//             console.log(option)
//             return option == 10202
//         })
        
//     })

// }


// peopleList.find(function(element){
//     debugger;	
//     console.log(element)
//         return element.numeros === 10241;
//     })