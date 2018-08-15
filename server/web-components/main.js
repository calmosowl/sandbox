// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create spans
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

	createCol(i, col){
    const col = document.createElement('div');
    col.setAttribute('class', 'col');
    col.setAttribute('style', 'grid-column: unset');

		col.textContent = 'col';
		el.appendChild(col);
  }
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    // Take attribute content and put it inside the info span
   // const text = this.getAttribute('data-text');
   // info.textContent = text;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
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
   for(let i=0;i<10;i++) {
    createCol(i, wrapper);
   }
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);
