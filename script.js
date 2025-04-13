const list = document.querySelector('ul')
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSomeALl = document.querySelector('.reduce-all')
const buttonFilterAll = document.querySelector('.filter-all')

function formateCurrency(value){
    const newValue = value.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })

    return newValue
}

function showAll(productArray) {

    let myLi = ''

    productArray.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <h1 class="item-price">${formateCurrency(product.price)}</h1>
        </li>
        `
    })
    list.innerHTML = myLi

}

function mapAllItem() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))
    showAll(newPrices)
}

function reduceAllItem(){
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
        <li>
            <h1>O valor da compra é R$ ${formateCurrency(totalValue)}</h1>
        </li>
    `
}

function filterAll(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItem)
buttonSomeALl.addEventListener("click", reduceAllItem)
buttonFilterAll.addEventListener('click', filterAll)