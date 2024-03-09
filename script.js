document.addEventListener("DOMContentLoaded", function () {
  const decrementButtons = document.querySelectorAll(".decrement");
  const incrementButtons = document.querySelectorAll(".increment");
  const removeButtons = document.querySelectorAll(".remove");
  const likeButtons = document.querySelectorAll(".like");
  const totalPriceElement = document.getElementById("totalPrice");

  let totalPrice = 0;

  function updateTotalPrice() {
    if (totalPrice < 0) {
      totalPrice = 0;
    }
    totalPriceElement.textContent = totalPrice.toFixed(2);
  }

  function updateQuantity(element, increment) {
    const item = element.parentElement;
    const quantityElement = item.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);

    if (increment) {
      quantity++;
      totalPrice += 10;
    } else {
      if (quantity > 0) {
        quantity--;
        totalPrice -= 10;
      }
    }

    quantityElement.textContent = quantity;
    updateTotalPrice();
  }

  function removeItem(element) {
    const item = element.parentElement;
    const quantityElement = item.querySelector(".quantity");
    const quantity = parseInt(quantityElement.textContent);

    totalPrice -= quantity * 10;
    item.remove();
    updateTotalPrice();
  }

  decrementButtons.forEach((button) => {
    button.addEventListener("click", function () {
      updateQuantity(this, false);
    });
  });

  incrementButtons.forEach((button) => {
    button.addEventListener("click", function () {
      updateQuantity(this, true);
    });
  });

  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      removeItem(this);
    });
  });

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("liked");
    });
  });
});

