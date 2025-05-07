
document.addEventListener('DOMContentLoaded', () => {
   
    let ferias = JSON.parse(localStorage.getItem('personas')) || [];
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
   
    this.shadowRoot.innerHTML = '<h2>Lista de ferias:</h2>';
   
    ferias.forEach(p => {
    this.shadowRoot.innerHTML += `
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
    <p><strong>Nombre:</strong> ${p.nombre}</p>
    <p><strong>Edad:</strong> ${p.lugar} años</p>
    <p><strong>Correo:</strong> ${p.inicio}</p>
    <p><strong>Teléfono:</strong> ${p.final}</p>
    </div>
    `;
    });
    }
    }
   
    customElements.define('feria-list', FeriaList);
    
    const FeriaListElement = document.querySelector('feria-list');
    
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
    this.render()
    this.reset();
    });
    }); 