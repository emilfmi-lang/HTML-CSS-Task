// Səbət array-i localStorage-də saxlanacaq
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Səbətə əlavə etmə funksiyası
function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Səbət ikonundakı sayın yenilənməsi
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Səbət səhifəsinə yönləndirmə
function goToCart() {
    window.location.href = 'newindex.html';
}

// Səbət səhifəsində məhsulları göstərmə
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${index + 1}. ${item.name} - ${item.price}₼`;
        cartItemsContainer.appendChild(div);
    });
}

// Geri düyməsi
function goBack() {
    window.location.href = 'index.html';
}

// Əgər səbət səhifəsindəyiksə məhsulları göstər
displayCartItems();

// Əsas səhifədə cart count-u yenilə
updateCartCount();
