// JavaScript source code



/// Indicators
const indicatBtnOne = document.querySelector('.indicator-one');
const indicatBtnTwo = document.querySelector('.indicator-two');
const indicatBtnThree = document.querySelector('.indicator-Three');

indicatBtnOne.addEventListener('click', () => {
    const images = document.getElementById('changeImg');
    images.style.backgroundImage = 'url(Assets/Images/Image001.png)';
    images.style.transition = 'transform 0.5s case-in-out';
});

indicatBtnTwo.addEventListener('click', () => {
    const images = document.getElementById('changeImg');
    images.style.backgroundImage = 'url(Assets/Images/Image002.png)';
    images.style.transition = 'transform 0.5s case-in-out';
});

indicatBtnThree.addEventListener('click', () => {
    const images = document.getElementById('changeImg');
    images.style.backgroundImage = 'url(Assets/Images/Image003.png)';
    images.style.transition = 'transform 0.5s case-in-out';
});