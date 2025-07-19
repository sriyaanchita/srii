const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const cartDiv = document.getElementById('cartItems');

if (cartItems.length === 0) {
    cartDiv.innerHTML = '<p>Your cart is empty.</p>';
} else {
    cartItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<h3>${item.name}</h3><p>Price: $${item.price.toFixed(2)}</p>`;
        cartDiv.appendChild(div);
    });
}