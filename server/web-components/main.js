
// Create a class for the element
class GridTable extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

const source = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create spans
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'eui-table');

	const row = document.createElement('div');
    row.setAttribute('class', 'row');

    // Take attribute content and put it inside the info span
   // const text = this.getAttribute('data-text');
   // info.textContent = text;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .eui-table {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        border: 1px solid #333;
      }
      .col {
      	box-shadow: inset 1px 0 0 #333;
      	min-width: 32px;
      	min-height: 32px;
      }`;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
   // wrapper.appendChild(row);
   
 for(let i=0;i<source.length;i++) {
  // for(let key in source[i]){
    const col = document.createElement('div');
    col.setAttribute('class', 'col');
    col.setAttribute('style', `grid-column: ${source[i].position}`);
	col.textContent = source[i].symbol;
	wrapper.appendChild(col);
//	  }
   }
  }
}

// Define the new element
customElements.define('grid-table', GridTable);
