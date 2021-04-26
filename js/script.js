// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});

// modal Post
const postButton = document.querySelector('#post');
const modalBg = document.querySelector('.modal-background');
const modalCls = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

postButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});
modalCls.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
// modal Login
const loginButton = document.querySelector('#login');
const modalBgd = document.querySelector('.back2');
const modal2 = document.querySelector('.modal2');

loginButton.addEventListener('click', () => {
    modal2.classList.add('is-active');
});

modalBgd.addEventListener('click', () => {
    modal2.classList.remove('is-active');
})

// tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll('#tab-content > div');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })
    })
})
