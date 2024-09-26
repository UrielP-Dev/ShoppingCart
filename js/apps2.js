 const button = document.querySelector('.jsonOpen')
 const body = document.body;
 const container = document.createElement('div')
 const row = document.createElement('div')
 const fourColums = document.createElement('div')


container.classList.add('container')
container.id = 'lista-cursos'
row.classList.add('row')
fourColums.classList.add('four')
fourColums.classList.add('columns')



button.addEventListener('click', ShowJson)

function ShowJson() {
    console.log('owo')
    const uri = './data/cusrsos.json'
   fetch(uri).then(respuesta => respuesta.json()
    ).then(datos => showHTML(datos))
    .catch(error => console.error('Error:', error))
}

function showHTML(data) {
    data.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <h2>${element.nombre}</h2>
        <p>${element.instructor}</p>
        <img src="img/estrellas.png">

        <p class="precio"> ${element.precio_original} <span class="u-pull-right ">$ ${element.precio}</span></p>
        <img width = "150px" src="${element.imagen}"></img>
        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar
                            Al Carrito</a>
        `
        fourColums.appendChild(card)
        row.appendChild(fourColums)
        container.appendChild(row)
    });

}

body.appendChild(container)




 

