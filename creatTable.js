// export function creatTable(formdata) {

//     let table = document.getElementById("table");
//     let tbody = table.querySelector("tbody");
//     let newRow = document.createElement("tr");
//     let input = document.createElement("input");
//     input.type = "checkbox";
//     let tdcheck = document.createElement("td");
//     tdcheck.appendChild(input);
//     newRow.appendChild(tdcheck);

//     formdata.forEach((el) => {
//         let td = document.createElement("td");
//         td.textContent = el;
//         newRow.appendChild(td);
//     });

//     newRow.lastElementChild.textContent = "";
//     newRow.lastElementChild.innerHTML = `
//     <select class="testi">
//     <option value="انجام شده">انجام شده</option>
//     <option value="در حال انجام">در حال انجام</option>
//     <option value="انجام شده">تمام شده</option>
//     </select>`;
    
    
//     tbody.appendChild(newRow);

//     return;
// }

export function creatTable(formdata) {
    let table = document.getElementById("table");
    let tbody = table.querySelector("tbody");
    let newRow = document.createElement("tr");
    let input = document.createElement("input");
    input.type = "checkbox";
    let tdcheck = document.createElement("td");
    tdcheck.appendChild(input);
    newRow.appendChild(tdcheck);

    formdata.forEach((el, index) => {
        let td = document.createElement("td");
        td.textContent = el;
        newRow.appendChild(td);

        if (index === formdata.length - 1) {
            td.innerHTML = `
            <select class="testi">
                <option value="انجام شده" ${el === "شروع نشده" ? "selected" : ""}>شروع نشده</option>
                <option value="در حال انجام" ${el === "در حال انجام" ? "selected" : ""}>در حال انجام</option>
                <option value="تمام شده" ${el === "تمام شده" ? "selected" : ""}>تمام شده</option>
            </select>`;
        }
    });

    tbody.appendChild(newRow);
}
