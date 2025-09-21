document.addEventListener('DOMContentLoaded', () => {
    const items = document.getElementById('items');
    const total = document.getElementById('total');
    const clear = document.getElementById('clear');
    const add = document.querySelectorAll('.btn');
    const container = document.querySelector('.cart-container1');
    const icon = document.querySelector('.fa-cart-shopping');

    let cart = [];

    const updateCart = () => {
        items.innerHTML = '';
        let cartTotal = 0; // items added there

        cart.forEach(item => {
            cartTotal += item.price; // counting the price

            let li = document.createElement('li');
            li.innerHTML =`
            <div class="cartdetails">
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
                 <img src="bestsell/${item.image}" alt="${item.name} class="pictures" style="width:80px";"height=80px";>
                 </div>
                 </div>
                   <button class="remove" data-name="${item.name}">Remove</button>
                   </div>
                 </div> `
                 
            items.appendChild(li);
        });

        total.textContent = `₸ ${cartTotal.toLocaleString()}`; // showing the total price under the buttons
    };

    add.forEach(button => { //information output
        button.addEventListener('click', (e) => {
            const detail = e.target.closest('.detail');
            const container = e.target.closest('.cart-container1');
            const name = detail.querySelector('strong').textContent;
            const price = parseFloat(detail.querySelector('.price').textContent.replace(/[^0-9.]/g, ''));
            let image = detail.parentElement.querySelector('img').src.split('/').pop(); 
            cart.push({ name, price,image });
            updateCart();
    
            const quantity = document.querySelector('.quantity');
            quantity.textContent = cart.length;
                icon = [];
                updateCart(); // quantity counter
    
    
            container.style.display = 'block';
        });
    });
    

    clear.addEventListener('click', () => {
        cart = [];
        updateCart();
    }); // clear the cart

    
    items.addEventListener('click', (e) => { // remove the items
        if (e.target.classList.contains('remove')) {
            const itemName = e.target.dataset.name;
            cart = cart.filter(item => item.name !== itemName);
            updateCart();
        }
    });

    
    icon.addEventListener('click', () => {
        container.style.display = container.style.display === 'block' ? 'none' : 'block';
    });
}); // icon displaying

document
.querySelector('.btn')
.addEventListener('click',buyButtonClick); // button clicking

function buyButtonClick(){
    alert('Your Order is Placed!'); // alert on the first item
}

