document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const foodName = this.parentElement.querySelector('h3').textContent;
            cart.push(foodName);
            alert(`${foodName} has been added to your cart.`);
        });
    });
});
