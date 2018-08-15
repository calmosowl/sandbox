// Grid data table component

class GridTable extends HTMLElement {
  constructor() {
    super();
alert('yo');
var shadow = this.attachShadow({mode: 'open'});

var table = document.createElement('div');

table.setAttribute('class','eui-table');
table.textContent = 'Grid here!';

var style = document.createElement('style');


style.textContent = `.grid-table {
display: grid;
width: 300px;
height: 600px;
background: #333;
}`;

shadow.appendChild(style);
shadow.appendChild(table);
 }
}

customElements.define('grid-table', GridTable);
