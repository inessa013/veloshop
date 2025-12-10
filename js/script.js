const catalogWrapper = document.querySelector('[data-catalog]');

for(let i = 0; i < 3; i++){
    const price = products[i].price.toLocaleString("ru-RU");
    const modif = i == 2 ? " card_accent" : "";
    productHTML = `<div class="card${modif}" id="${products[i].id}">
            <div class="card__wrapper-img">
                <img src="./img/catalog/${products[i].imgSrc}" alt="Product velo 1" class="card__img">
            </div>
            <div class="card__body">
                <div class="card__desc">
                    <h3 class="card__title">${products[i].name}</h3>
                    <span class="card__price">${price} руб</span>
                </div>
                <button type="button" class="card__button button">Купить</button>
            </div>
        </div>`


    catalogWrapper.insertAdjacentHTML('beforeend', productHTML);
}

