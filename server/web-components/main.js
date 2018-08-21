// Data table class
class GridTable extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create table
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'eui-table');

    

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');

    style.textContent = `
      .eui-table {
        position: relative;
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
      }
      .row {
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

    this.wrapper = wrapper;
    
	this.config = {
      template: ['title', 'completed']
    }

	this.columns(this.config, this.wrapper);
  }

  columns(config, wrapper) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(function(data) {
		let i = 0;
		while(i < data.length) {
		  const row = document.createElement('div');
		  row.setAttribute('class', 'row');
		  row.setAttribute('style', `grid-row: ${i + 1}`);

          for(let key of config.template) {
  		    const col = document.createElement('div');
  		    col.setAttribute('class',`col ${key}`);
  		    col.textContent=data[i][key];

            row.appendChild(col); 		  
          }
          
 	      wrapper.appendChild(row); 		  
 		  i++;
        }
    });
  }
}

// Define the new element
customElements.define('grid-table', GridTable);
