import { creatTable } from "./creatTable.js";
import { tableHydration } from "./editTable.js";
import { formData } from "./formData.js";
import { getAllDataFromLocalStorage, saveTasks } from "./localeStorage.js";


let form = document.getElementById("form");
let table = document.getElementById("table");


let savedData = getAllDataFromLocalStorage()
savedData.forEach(el => {
    creatTable(el)
})


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let fodata = formData(form);
    console.log(fodata);

    creatTable(fodata);
    saveTasks(fodata);
    
    form.reset();
});

tableHydration(table);

let btn = document.getElementById("btn");
document.getElementById("search").addEventListener("click", function (e) {
    let choiceFilter = document.getElementById("title-search");
    let selectedOption =
        choiceFilter.options[choiceFilter.selectedIndex].textContent;
    let searchText = document
        .getElementById("target-celltext")
        .value.trim()
        .toLowerCase();

    let target = document.querySelectorAll("thead tr th");
    let bodyRow = document.querySelectorAll("tbody tr");
    bodyRow.forEach((elem) => {
        target.forEach((el, index) => {
            if (el.textContent === selectedOption) {
                let cellText = elem.children[index].textContent
                    .trim()
                    .toLowerCase();

                if (cellText.includes(searchText)) {
                    elem.style.display = "";
                } else {
                    elem.style.display = "none";
                }
            }
        });
    });
});

btn.addEventListener("click", function () {
    let bodyRow = document.querySelectorAll("tbody tr");

    bodyRow.forEach((elem) => {
        elem.style.display = "";
    });
});


// document.getElementById("search").addEventListener("click", function (e) {
//     let choiceFilter = document.getElementById("title-search");
//     let selectedOption =
//         choiceFilter.options[choiceFilter.selectedIndex].textContent;

//     let target = document.querySelectorAll("thead tr th");
//     let bodyRow = document.querySelectorAll("tbody tr");
//     console.log(bodyRow);

//     console.log(target);
//     console.log(selectedOption);

//     target.forEach((el, index) => {
//         if (el.textContent === selectedOption) {
//             bodyRow.forEach((elem)=> {

//                 console.log(elem.children[index].textContent);
//             })
//         }
//     });
// });
