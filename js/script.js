const catalogWrapper = document.querySelector('[data-catalog]');
let isActive = false,
    i = 2;

products.forEach((product, index) => {

    //logic add class .card_accent
    if(i === 4 && !isActive){
        isActive = !isActive;
        i = 0;
        console.log('yes');
    } else if(i == 2 && isActive){
        isActive = !isActive;
        i = 0;
        console.log('none');
    }
    ++i;

    console.log(product);
    const price = product.price.toLocaleString("ru-RU");
    const modif = isActive ? " card_accent" : "";
    productHTML = `<div class="card${modif}" id="${product.id}">
            <div class="card__wrapper-img">
                <img src="./img/catalog/${product.imgSrc}" alt="Product velo 1" class="card__img">
            </div>
            <div class="card__body">
                <div class="card__desc">
                    <h3 class="card__title">${product.name}</h3>
                    <span class="card__price">${price} руб</span>
                </div>
                <button type="button" class="card__button button">Купить</button>
            </div>
        </div>`


    catalogWrapper.insertAdjacentHTML('beforeend', productHTML);
    
});
