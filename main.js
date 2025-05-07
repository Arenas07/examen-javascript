
document.addEventListener('DOMContentLoaded', () => {
   
    let ferias = JSON.parse(localStorage.getItem('ferias')) || [];
    console.log(ferias);
    
    class FeriaList extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' }); 
    }
   
    connectedCallback() {
    this.render(); 
    }
    
    render() {
   
   
    ferias.forEach((p, i) => {
    this.shadowRoot.innerHTML += `
    <style>
        div{
            padding: 20px;
            border: 1px solid black;
            justify-content: flex-start;
            width: 200px;
            height: 200px;
        }
    </style>
    <div>
        <p><strong>Nombre:</strong> ${p.nombre}</p>
        <p><strong>Edad:</strong> ${p.lugar} </p>
        <p> ${p.inicio} - ${p.final}</p>
        
    </div>
    `;
    });
    }
    }
   
    customElements.define('feria-list', FeriaList);
    
    
    document.getElementById('formulario__feria').addEventListener('submit', function(e){
    e.preventDefault(); 
    
    const nuevaFeria = {
    nombre: document.getElementById('nombre-feria').value,
    lugar: document.getElementById('lugar-feria').value,
    inicio: document.getElementById('inicio-feria').value,
    final: document.getElementById('final-feria').value,
    };
    
    ferias.push(nuevaFeria);
   
    localStorage.setItem('ferias', JSON.stringify(ferias));
    console.log(ferias);
    

    this.reset();
    });
    }); 

