// class ProductList {
//     constructor(container = '.products') {
//         this.container = document.querySelector(container);
//         this._goods = [];
//         this._productsObjects = [];

//         this._fetchGoods();
//         this._render();
//     }

//     _fetchGoods() {
//         this._goods = [
//             {id: 1, title: 'Notebook', price: 20000},
//             {id: 2, title: 'Mouse', price: 1500},
//             {id: 3, title: 'Keyboard', price: 5000},
//             {id: 4, title: 'Gamepad', price: 4500},
//         ];
//     }

//     _render() {
//         for (const product of this._goods) {
//             const productObject = new ProductItem(product);
//             console.log(productObject);

//             this._productsObjects.push(productObject);
//             this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
//         }
//     }
// }

// class ProductItem {
//     constructor(product, img = 'https://via.placeholder.com/200x150') {
//         this.id = product.id;
//         this.title = product.title;
//         this.price = product.price;
//         this.img = img;
//     }

//     getHTMLString() {
//         return `<div class="product-item" data-id="${this.id}">
//                   <img src="${this.img}" alt="Some img">
//                   <div class="desc">
//                       <h3>${this.title}</h3>
//                       <p>${this.price} \u20bd</p>
//                       <button class="buy-btn">Купить</button>
//                   </div>
//               </div>`;
//     }
// }

// const list = new ProductList();
// ------------------------------------------------------------

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);

class GoodsItem {
    constructor(title, price) {
    this.title = title;
    this.price = price;
    }
    render() {
    return `<div class="goods-item">
            <h3>${this.title}</h3>
            <p>${this.price}</p>
            </div>`;
    }
}

class GoodsList {
    constructor() {
    this.goods = [];
    }

    fetchGoods() {
        this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
        ];
    }
    
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    allCost() {
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            let totalCost = goodItem.price;
            console.log(totalCost);
        })
    }

}

class Basket {
    constructor() {

    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.allCost();

    
    