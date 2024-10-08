let mainDiv = document.getElementById("main");

let tableElm = document.createElement("table");
tableElm.setAttribute("border", "1");
tableElm.setAttribute("style", "border-spacing: 15px;");
tableElm.setAttribute("class", "marksheet-term");

let headerRow = document.createElement("tr");
let headerCells = ["Subject", "Total Marks", "Obtained Marks"];
for (let i = 0; i < headerCells.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = headerCells[i];
    headerRow.appendChild(th);
}
tableElm.appendChild(headerRow);


let subjects = ["ENG", "PHY", "CHI", "ISL", "PST"];
let totalMarks = [500, 500, 500, 500, 500];
let obtainedMarks = [450, 300, 475, 399, 395];

for (let i = 0; i < subjects.length; i++) {
    let dataRow = document.createElement("tr");
    dataRow.setAttribute("class", "marksheet-term-row")
    let subjectCell = document.createElement("td");
    subjectCell.innerHTML = subjects[i];
    dataRow.appendChild(subjectCell);

    let totalMarksCell = document.createElement("td");
    totalMarksCell.innerHTML = totalMarks[i];
    dataRow.appendChild(totalMarksCell);

    let obtainedMarksCell = document.createElement("td");
    obtainedMarksCell.innerHTML = obtainedMarks[i];
    dataRow.appendChild(obtainedMarksCell);

    tableElm.appendChild(dataRow);
}

mainDiv.appendChild(tableElm);