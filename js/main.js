const tabButtons = document.querySelectorAll('.features__tab-button');
const tabImages = document.querySelectorAll('.features__tab-image');
const tabHeading = document.querySelector('.features__tab-heading');
const tabParagraph = document.querySelector('.features__tab-paragraph');
const featuresGraphic = document.querySelectorAll('.features__graphic');
const faqButtons = document.querySelectorAll('.questions__faq-question');
const faqAnswers = document.querySelectorAll('.questions__faq-answer-container');
const form = document.querySelector('.contact-us__email-container');
const errorIcon = document.querySelector('.contact-us__error-icon');
const input = document.querySelector('.contact-us__input');
const messageContainer = document.querySelector('.contact-us__message-container');
const message = document.querySelector('.contact-us__message');
const menuButton = document.querySelector(".header__menu-button");
const header = document.querySelector(".header");
const overlay = document.querySelector('.mobile-menu-overlay');
const hero = document.querySelector('.hero');
const body = document.body;
const logoCircle = document.querySelector('.logo-circle');
const logoBookmark = document.querySelector('.logo-middle');
const logoLettering = document.querySelector('.logo-lettering');
const mobileMenuHeaderContainer = document.querySelector('.mobile-menu-header-container');
const headerNav = document.querySelector('.header__nav');
const headerNavList = document.querySelector('.header__nav-list');
const footerSocialsContainer = document.querySelector('.footer__socials-container');
const mobileMenuFooterContainer = document.querySelector('.mobile-menu-footer-container');
const footerRight = document.querySelector('.footer__right');

const tabContent = [
    {
        heading: "Bookmark in one click",
        paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        heading: "Intelligent search",
        paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        heading: "Share your bookmarks",
        paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
];

const errorMessage = "Whoops, make sure it's an email";
const successMessage = "Thank-you for subscribing!";

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        tabButtons.forEach(btn => btn.classList.remove('features__tab-button--active'));
        tabImages.forEach(image => image.classList.remove('features__tab-image--active'));

        button.classList.add('features__tab-button--active');
        tabImages[index].classList.add('features__tab-image--active');

        featuresGraphic.forEach(graphic => graphic.classList.remove('features__graphic--active'));
        featuresGraphic[index].classList.add('features__graphic--active');

        tabHeading.innerText = tabContent[index].heading;
        tabParagraph.innerText = tabContent[index].paragraph;

    });
});

faqButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log('button clicked');
        faqAnswers[index].classList.toggle('questions__faq-answer-container--active');

        const arrowIcon = button.querySelector('.questions__icon-arrow');

        arrowIcon.classList.toggle('questions__icon-arrow--active');
        
    });
});

function handleSubmit(e) {

    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const emailInput = data["email"];

    if(!validateEmail(emailInput)) {
        errorIcon.classList.add('contact-us__error-icon--active');
        input.classList.add('contact-us__input--error');
        input.classList.remove('contact-us__input--success');
        messageContainer.classList.remove('contact-us__message-container--active-success');
        messageContainer.classList.add('contact-us__message-container--active-error');
        message.innerText = errorMessage;
        
    } else {
        errorIcon.classList.remove('contact-us__error-icon--active');
        input.classList.remove('contact-us__input--error');
        input.classList.add('contact-us__input--success');
        messageContainer.classList.remove('contact-us__message-container--active-error');
        messageContainer.classList.add('contact-us__message-container--active-success');
        message.innerText = successMessage;
    }
}

function validateEmail(email) {

    const emailRegex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    return emailRegex.test(email);

}

function mobileMenu() {

    if(overlay.classList.contains('mobile-menu-overlay--active')) {
        closeMenu();
    } else {
        openMenu();
    }
}

function closeMenu() {
    var menuButtonIMG = menuButton.querySelector('img');
    overlay.classList.remove('mobile-menu-overlay--active');
    menuButtonIMG.src = './assets/images/icon-hamburger.svg';
    body.classList.remove('u-no-scroll');
    hero.classList.remove('hero--menu-active');
    logoCircle.classList.remove('logo-circle--menu-active');
    logoBookmark.classList.remove('logo-middle--menu-active');
    logoLettering.classList.remove('logo-lettering--menu-active');
    headerNavList.remove();
    headerNav.appendChild(headerNavList);
    footerSocialsContainer.remove();
    footerRight.appendChild(footerSocialsContainer);
}

function openMenu() {
    var menuButtonIMG = menuButton.querySelector('img');
    overlay.classList.add('mobile-menu-overlay--active');
    menuButtonIMG.src = './assets/images/icon-close.svg';
    body.classList.add('u-no-scroll');
    hero.classList.add('hero--menu-active');
    logoCircle.classList.add('logo-circle--menu-active');
    logoBookmark.classList.add('logo-middle--menu-active');
    logoLettering.classList.add('logo-lettering--menu-active');
    headerNavList.remove();
    mobileMenuHeaderContainer.appendChild(headerNavList);
    headerNavList.classList.add('header__nav-list--menu-active');
    footerSocialsContainer.remove();
    mobileMenuFooterContainer.appendChild(footerSocialsContainer);
}

function checkScreenSize() {
    if(window.innerWidth > 767) {
        closeMenu();
    }
}

window.addEventListener('resize', checkScreenSize);

form.addEventListener('submit', handleSubmit);

menuButton.addEventListener('click', mobileMenu);
