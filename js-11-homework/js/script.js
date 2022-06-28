// let fullName = new Function("name", "surname", "console.log(`${name} ${surname}`)");

// fullName("Ivan", "Petrov");


// №1



// function timeNumbersInterval(from, to) {

//     setTimeout(function get() {
//         console.log(from);
//         if (from < to) {
//             setTimeout(get, 1000);
//         }
//         from++;
//     }, 1000);
// }
// timeNumbersInterval(1, 7);



// function timeNumbersInterval(from, to) {

//     let timer = setInterval(() => {
//         console.log(from);
//         if (from == to) {
//             clearInterval(timer);
//         }
//         from++;
//     }, 1000);
// }

// timeNumbersInterval(5, 10);

// №2

// let timerMessage = setInterval(() => console.log("Munchester United"), 3000);
// setTimeout(() => {
//     clearInterval(timerMessage)
//     console.log("Winner!!!!");
// }, 10000);


// №3

// function firstCall() {
//     console.log(1);
//     secondCall();
//     setTimeout(function() {
//         console.log(3)
//     }, 3000);
//     console.log(4);
// }

// function secondCall() {
//     setTimeout(function() {
//         console.log(5)
//     }, 0);
//     console.log(6);
// }

// firstCall(); // 1, 6, 4, 5, 3


// №4
// function get() {
//     console.log("Beverly Hills", this);
// }


// let jordan = {
//     name: "Michael",
//     age: 59,
//     adress: get.bind(window),
//     showName: function() {
//         console.log(this.name);
//     }
// }

// let messi = {
//     name: "Lionel",
//     age: 34,
// }

// jordan.showName();
// jordan.adress();

// jordan.showName.bind(messi)();