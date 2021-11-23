const bestPrice = document.getElementById('best-price');
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const totalPriceAfterDiscount = document.getElementById('total-price-after-discount');

function updateCost() {
    const bestPriceAmount = parseFloat(bestPrice.innerText);
    const extraMemoryAmount = parseFloat(extraMemoryCost.innerText);
    const extraStorageAmount = parseFloat(extraStorageCost.innerText);
    const deliveryChargeAmount = parseFloat(deliveryCharge.innerText);
    totalPrice.innerText = bestPriceAmount + extraMemoryAmount + extraStorageAmount + deliveryChargeAmount;
    // total price after entering promo code
    totalPriceAfterDiscount.innerText = totalPrice.innerText;
};

// 8gb unified memory button event handler
document.getElementById('8gb-unified-memory').addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    updateCost();
});

// 16gb unified memory button event handler 
document.getElementById('16gb-unified-memory').addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    updateCost();
});

// 256gb ssd storage button event handler
document.getElementById('256gb-ssd-storage').addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    updateCost();
});

// 512gb ssd storage button event handler
document.getElementById('512gb-ssd-storage').addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    updateCost();
});

// 1tb ssd storage button event handler
document.getElementById('1tb-ssd-storage').addEventListener('click', function () {
    extraStorageCost.innerText = '180';
    updateCost();
});

// free delivery button event handler
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    updateCost();
});

// delivery cost button event handler
document.getElementById('delivery-price').addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    updateCost();
});

// add promo code apply button event handler 
document.getElementById('apply-button').addEventListener('click', function () {
    let promoCodeInput = document.getElementById('promo-code-input');
    let promoCodeText = promoCodeInput.value;
    let totalCost = totalPrice.innerText;
    if (promoCodeText == 'stevekaku') {
        let priceAfterDiscount = totalCost - (totalCost * 0.2);
        let finalTotal = parseFloat(priceAfterDiscount);
        totalPriceAfterDiscount.innerText = finalTotal;
        promoCodeInput.value = '';
    }
    else {
        promoCodeInput.value = '';
    }
});