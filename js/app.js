const cart = document.querySelector('#cart');
const table = document.querySelector('#lista-carrito tbody');
const dropCart = document.querySelector('#vaciar-carrito');
const cursesLister = document.querySelector('#lista-cursos');
let articulosCarrito = []

cursesLister.addEventListener('click', addCursor);

function addCursor(e) {
    const selected = e.target.parentElement.parentElement
    console.log(e.target.classList)
    ReadData(selected)
    e.contains('agregar-carrito') ?
    console.log(selected) : 
    console.log('Dont is cart')
}  

function ReadData(selected) {

    const info = {

        id: selected.querySelector('a').getAttribute('data-id'),
        imagen: selected.querySelector('img').src,
        title: selected.querySelector('h4').textContent,
        price: selected.querySelector('.precio span').textContent,
        amount: 1
    }
    if(articulosCarrito.length.some(selected)){
        curso.amount += 1
    }else{
        articulosCarrito = [...articulosCarrito,info]
        console.log(articulosCarrito)
        cartHtml()
    }
   
}

function cartHtml() {
    
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr')
        row.innerHTML =  `
        <td> <img width = "100px" src="${curso.imagen}"/></td>
        <td>${curso.title}</td>
        <td>${curso.price}</td>
        <td>${curso.amount}</td>
        `
        table.appendChild(row)


    });

}