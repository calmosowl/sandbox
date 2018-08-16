
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

    this.source = source;
    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create table
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'eui-table');

	const row = document.createElement('div');
    row.setAttribute('class', 'row');

    // Take attribute content and put it inside the info span
    this.template = this.getAttribute('columns-template');
    this.template = Array.from(this.template, (v) => v + 'fr');
    
    console.log(this.template);
   // info.textContent = text;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');

    style.textContent = `
      .eui-table {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        
      }
      .col {
      	border: 1px solid #333;
      	padding: 16px;
      	min-width: 32px;
      	min-height: 32px;
      }`;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
   // wrapper.appendChild(row);
   this.wrapper = wrapper;

   this.createColumns();
//   for(let i = 0; i < source.length; i++) {
//     for(let key in source[i]){
//       const col = document.createElement('div');
//       col.setAttribute('class', `col ${key}`);
//       col.setAttribute('style', `grid-row: ${i + 1}`);
// 	  col.textContent = source[i][key];
// 	  wrapper.appendChild(col);
//     }
//   }
}
  createColumns(){
  	for(let i = 0; i < this.source.length; i++) {
    for(let key in this.source[i]){
      const col = document.createElement('div');
      col.setAttribute('class', `col ${key}`);
      col.setAttribute('style', `grid-row: ${i + 1}`);
	  col.textContent = this.source[i][key];
	  this.wrapper.appendChild(col);
    }
  }
  }
}

// Define the new element
customElements.define('grid-table', GridTable);
