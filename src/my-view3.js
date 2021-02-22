import {LitElement, html} from 'lit-element';

class MyView3 extends LitElement {

  static get properties() {
    return {
      data: Object
    }
 }
  firstUpdated ( changedProperties ) {
    super . firstUpdated ( changedProperties );
    }


    connectedCallback() {
        super.connectedCallback();
        this.fetchData();

    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network broken! No response');
                }else{
                  console.log ('Success:', response.json())
              }; 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        if (!this.data) {
            return html`
                <h4>Loading...</h4>
            `;
        }
        return html`
            <h4>Done</h4>
        `;
    }

}

customElements.define('my-view3', MyView3);