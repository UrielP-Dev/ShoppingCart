const cart = document.querySelector('#cart');
const table = document.querySelector('#lista-carrito tbody');
const dropCart = document.querySelector('#vaciar-carrito');
const cursesLister = document.querySelector('#lista-cursos');
const deleteALl = document.querySelector('#vaciar-carrito')

let articulosCarrito = []

cursesLister.addEventListener('click', addCursor);
deleteALl.addEventListener('click', DeleteAll)

function addCursor(e) {
    const selected = e.target.parentElement.parentElement
    console.log(e.target.classList)
    e.target.classList.contains('agregar-carrito') ?
    ReadData(selected) : 
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
        console.log(info)
        if (articulosCarrito.some(articulosCarrito => articulosCarrito.id === info.id)){
           articulosCarrito = articulosCarrito.map(curso => {
            if(curso.id === info.id){
                curso.amount++
            }
            return curso
           })
        }else{
            articulosCarrito = [...articulosCarrito, info]
            console.log(articulosCarrito)
        }
        
        cartHtml()
   
}

function cartHtml() {
    table.innerHTML = '';
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr')
        row.innerHTML =  `
        <td> <img width = "100px" src="${curso.imagen}"/></td>
        <td>${curso.title}</td>
        <td>${curso.price}</td>
        <td>${curso.amount}</td>
        <td class = 'delete'> <img width = "30px"  src="img/Trash.gif"/> </td>
        `
        table.appendChild(row)
        const deleteOne = row.querySelector('.delete')
        console.log(deleteOne)
        deleteOne.addEventListener('click', () => deleteOneItem(curso));
        
    });
}

    function deleteOneItem(Deletecurso){
        console.log('click')
        console.log(Deletecurso)
        if (articulosCarrito.some(articulosCarrito => articulosCarrito.id === Deletecurso.id)){
            articulosCarrito = articulosCarrito.map(curso => {
             if(curso.id === Deletecurso.id){
                if (curso.amount > 1) {
                    curso.amount--; 
                } else {
                    return null; 
                }

             }
             return curso
            }).filter(curso => curso !== null); 
            
         }
         cartHtml()
        }

function DeleteAll(){
    
    articulosCarrito = []
    table.innerHTML = ''
    
    
}   



