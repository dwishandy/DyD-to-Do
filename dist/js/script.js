// change theme 
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    document.body.classList.toggle("dark-theme");
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


// popup box
const myButton = document.getElementById('myButton');
const myContent = document.getElementById('myContent');
const closeButton = document.getElementById('close');
const button = document.getElementById('button')

myButton.addEventListener('click', function () {
    myContent.classList.remove('hidden');
});

closeButton.addEventListener('click', function () {
    myContent.classList.add('hidden');
});

button.addEventListener('click', function () {
    myContent.classList.add('hidden');
});



//  selesai
const toggle = document.getElementById('toggle');
const text = document.getElementById('text');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        text.classList.add('text-green');
    } else {
        text.classList.remove('text-green');
    }
});



// pindah toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}