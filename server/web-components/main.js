// Data table class
class GridTable extends HTMLElement {
  constructor() {
    super();

    const source = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    this.source = source;
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create table
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'eui-table');

    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');

    style.textContent = `
      .eui-table {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
      }
      .col {
        color: #334;
        border: 1px solid #333;
        padding: 16px;
        min-width: 32px;
        min-height: 32px;
        background: rgba(0, 0, 0, 0.1);
      }`;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    // wrapper.appendChild(row);
    this.wrapper = wrapper;
    
		this.config = {
			template: ['title', 'completed']
		}

		this.columns(this.config, this.wrapper);
  }

  createColumns() {
    for (let i = 0; i < this.source.length; i++) {
      for (let key in this.source[i]) {
        const col = document.createElement('div');
        col.setAttribute('class', `col ${key}`);
        col.setAttribute('style', `grid-row: ${i + 1}`);
        col.textContent = this.source[i][key];
        this.wrapper.appendChild(col);
      }
    }
  }

  columns(config, wrapper){
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function(data) {
		let row = 0;
		while(row < data.length) {
	  	for(let key of config.template) {
  		  const col = document.createElement('div');
  		  
  		  col.setAttribute('class','col');
  		  col.setAttribute('style', `grid-row: ${row + 1}`);
  		  
  		  col.textContent=data[row][key];
 		  	wrapper.appendChild(col); 		  
 			 }
 		  row++;
 		  }
 		});
  }
}

// Define the new element
customElements.define('grid-table', GridTable);
