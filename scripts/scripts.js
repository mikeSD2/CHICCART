//reveal text on click
const openTextButton = document.querySelector(".open-text");
const descrtext = document.querySelector("#descrtext");
openText = () => {
    descrtext.style.height = "auto";
    document.querySelector(
        ".long-website-descr .more-white-area"
    ).style.display = "none";
    openTextButton.style.display = "none";
};
openTextButton.addEventListener("click", openText);
//add items in container on click
const showMoreButton = document.getElementsByClassName("more-button");
const productsContainer = document.querySelector(".products-section-products");
const promosContainer = document.querySelector(".promotions");
var productsToAdd = `
<div class='products-section-product'>
    <div class='product-img-section container-flex center'>
        <img
            src='assets/230309132428000601900105M-removebg-preview 1.png'
            alt=''
        />
    </div>
    <p>
        SAMSUNG Galaxy Book2 15,6' i5-1235U 16GB/512GB SSD
        Win11
    </p>
    <s><p>3 199 $</p></s>
    <p>1 999 $</p>
</div>
<div class='products-section-product'>
    <div class='product-img-section container-flex center'>
        <img
            src='assets/6QT05DvVF9bz4VHf9akjX-removebg-preview 1.png'
            alt=''
        />
    </div>
    <p>Apple iPhone 15 Pro 128 GB Titan Natur MTUX3ZD/A</p>
    <s><p>999 $</p></s>
    <p>699 $</p>
</div>
<div class='products-section-product'>
    <div class='product-img-section container-flex center'>
        <img
            src='assets/JV5puXMRF-q4tZhU7-vRv-removebg-preview 1.png'
            alt=''
        />
    </div>
    <p>
        Robot vacuum cleaner Philips Series 3000 XU3000/01
    </p>
    <s><p>1 199 $</p></s>
    <p>1 049 $</p>
</div>
<div class='products-section-product'>
    <div class='product-img-section container-flex center'>
        <img
            src='assets/K-uUCk3i4D_w-He2pRGkE-removebg-preview 1.png'
            alt=''
        />
    </div>
    <p>
        Men's Casual Zipper Bomber Jacket Fashion
        Windbreaker for Spring
    </p>
    <s><p>659 $</p></s>
    <p>399 $</p>
</div>
`;
var promosToAdd = `<div class="one-promo">
<img src="assets/Frame 69.png" alt="" />
<p class="promo-title">
    Buy garden equipment now with free home
    delivery!
</p>
<p class="promo-ends">
    Days until the end of the promotion:
    <span>14</span>
</p>
</div>
<div class="one-promo">
<img src="assets/Frame 70.png" alt="" />
<p class="promo-title">
    Take advantage of one of the promotional offers
    and enjoy the coolness!
</p>
<p class="promo-ends">
    Days until the end of the promotion:
    <span>10</span>
</p>
</div>`;
function addItemsToContainer(conteinerWiithItems, itemsToAdd) {
    conteinerWiithItems.innerHTML += itemsToAdd;
}
showMoreButton[0].addEventListener("click", () =>
    addItemsToContainer(productsContainer, productsToAdd)
);
showMoreButton[1].addEventListener("click", () =>
    addItemsToContainer(promosContainer, promosToAdd)
);
//swiper
var swiper = new Swiper(".mySwiper", {
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
//dialog. close on animationend
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
    modal.showModal();
});

modal.addEventListener("click", (e) => {
    if (e.target.nodeName === "DIALOG") {
        modal.setAttribute("closing", "");

    modal.addEventListener(
        "animationend",
        () => {
            modal.removeAttribute("closing");
            modal.close();
        },
        { once: true }
    );
    }
});
