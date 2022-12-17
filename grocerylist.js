let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let star = '*';
    let starBold = (star.bold());
    let x = $('#list tbody tr').length;
    let table = document.getElementById('list');
    let row = table.insertRow(x + 1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = starBold;
    row.insertCell(1).innerHTML = document.getElementById('newFood').value;
    row.insertCell(2).innerHTML = document.getElementById('newPrice').value;
});