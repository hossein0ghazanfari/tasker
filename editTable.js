let table = document.getElementById("table");

export function tableHydration(table) {
    table.addEventListener("click", function (event) {
        let cell = event.target.closest("td");
        let checkbox = event.target.type === "checkbox" ? event.target : null;

        if (checkbox.checked) {
            if (!cell.querySelector("button")) {
                let btn = document.createElement("button");
                btn.textContent = "DEL";
                cell.append(btn);

                btn.addEventListener("click", function (e) {
                    let row = e.target.closest("tr");
                    let rowDel = row.children[1].textContent;

                    removeRowFromLocalstorage(rowDel)
                    row.remove();
                });
            }
        }

        if (!checkbox.checked) {
            let cr = event.target.closest("tr");
            let dok = cr.querySelector("button");
            dok.remove();
        }

        if (cell.querySelector("input") || cell.querySelector("select")) {
            return;
        }

        let oldval = cell.textContent;
        let input = document.createElement("input");
        input.classList.add("input-style");
        input.type = "text";
        input.value = oldval;
        cell.textContent = "";
        cell.appendChild(input);
        input.focus();

        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                cell.textContent = input.value;
            }
        });
        input.addEventListener("blur", function (e) {
            cell.textContent = input.value;
        });
    });
}

export function removeRowFromLocalstorage(rowToDelete) {
    let aa = JSON.parse(localStorage.getItem("tasks"));

    aa = aa.filter((item) => item[0] !== rowToDelete``);

    localStorage.setItem("tasks", JSON.stringify(aa));
}