// const users = [
//     { name: "Mantu", designation: "Node.js Developer", salary: 25000 },
//     { name: "Tapan", designation: "IT Manager", salary: 125000 },
//     { name: "Dileep", designation: "React.js Developer", salary: 45000 },
//     { name: "Praveen", designation: ".NET Developer", salary: 325000 }
// ];
// /*
// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Hello");
//         callback("Success");
//     }, 1000);
// }
// function processData(data) {
//     console.log("Processing:", data);
// }
// fetchData(processData);
// */

// //Using Promises (Modern Approach
// /*
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data fetched");
//             resolve("Success"); // or reject("Error") in case of failure
//         }, 2000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log("Processing:", data);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });
// */
// //Using Async/Await (Best Practice)

// async function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false;
//             if (error) {
//                 console.log("Data fetched");
//                 resolve("Success");
//             } else {
//                 console.log("Data fetching Issue");
//                 resolve("False");
//             }
//         }, 500);
//     });
// }

// async function process() {
//     try {
//         const data = await fetchData(); // Wait for the data
//         console.log("1231111111 Processing:", data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// process();

// async function getData(){

//     let response = await fetch('https://fakestoreapi.com/products');
//     console.log(response);
// }

let getData = fetch('https://fakestoreapi.com/products')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });



//console.log(getData);