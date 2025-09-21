document.addEventListener('DOMContentLoaded', () => {
    const items = document.getElementById('items2');
    const addButtons = document.querySelectorAll('.favoritess');
    const cartContainer = document.querySelector('.cart-container2');
    const icon = document.querySelector('.fa-heart');

    let cart = [];

    let updateCart = () => {
        items.innerHTML = '';
        let cartTotal = 0;

        cart.forEach(item => {
            cartTotal += item.price;
          const li = document.createElement('li');
            li.innerHTML = ` <div class="cartdetails2">
            <div class="information">
            <h4>Item</h4>
                ${item.name}
                </div>
                <hr>
                <div class="information">
                <h4>Item Price</h4>
                 ₸ ${item.price.toLocaleString()}
                 </div>
                <hr>
                <div class="information">
                <div class = "infopic">
                 <img src="earring/${item.image}" alt="${item.name} class="pictures2" style="width:130px";"height=130px";>
                 </div>
                 </div>
                   <button class="remove2" data-name="${item.name}">Remove</button>
                   </div>
                   </div>
                 </div> `
                 
            items.appendChild(li);
        });
    };

    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const detail = e.target.closest('.detail');
            const name = detail.querySelector('strong').textContent;
            const price = parseFloat(detail.querySelector('.price').textContent.replace(/[^0-9.]/g, ''));
            let image = detail.parentElement.querySelector('img').src.split('/').pop();
            cart.push({ name, price, image });
            updateCart();


            const quantity = document.querySelector('.quantity2');
            if (quantity) quantity.textContent = cart.length;

            cartContainer.style.display = 'block';
        });
    });

    items.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove2')) {
            const itemName = e.target.dataset.name;
            cart = cart.filter(item => item.name !== itemName);
            updateCart();
        }
    });
    

    icon.addEventListener('click', () => {
        const computedStyle = window.getComputedStyle(cartContainer);
        cartContainer.style.display = computedStyle.display === 'block' ? 'none' : 'block';
    });
});
