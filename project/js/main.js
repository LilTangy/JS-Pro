const products = [
    {id: 1, titl: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

//Не совсем понял куда именно нужно было вставить значения по умолчанию, но
// куда-то вставил:). Слово 'titl' записал специально, чтобы продемонстрировать,
// что значения по умолчанию работают
const renderProduct = (title = 'title', price = 'price') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((good) => {
        return renderProduct(good.title, good.price);
    });
    //Когда к массиву применяется свойство innerHTML, то к массиву автоматически
    // применяется свойство toString, а item'ы массива идут через запятую,
    // следовательно и запятая будет выводится. Можно применить метод join() и 
    // убрать запятые.
    document.querySelector('.products').innerHTML = productList.join('');

    console.log(productList);
};

renderProducts(products);

