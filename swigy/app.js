
let cart = [];


function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}


function addToCart(itemName) {
    
    cart.push(itemName);


    updateCartCount();

    
    displayCartItems();
}


function openCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
}


function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}


function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; 

    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartItemsList.appendChild(listItem);
    });
}


function searchFood() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    alert(`Searching for: ${searchTerm}`);
    
}


function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Proceeding to checkout with ${cart.length} items.`);
        
        cart = []; 
        updateCartCount();
        closeCart(); 
    }
}
