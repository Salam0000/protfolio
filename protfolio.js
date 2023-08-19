document.addEventListener('click',
    (event) => {
        let lis = document.querySelectorAll('nav ul li');
        console.log(lis);
        lis.forEach(e => {
            e.onclick = () => {
                console.log(e);
                lis.forEach(e => e.classList.remove("active"));
                e.classList.add("active");
            };

        });
    }
);

function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

function changeTheme(theme) {
    const root = document.documentElement; // Get the root element
    var dark = document.getElementById('dark');
    var light = document.getElementById('light');
    if (theme === 'dark') {
        dark.style.display = "none";
        light.style.display = "inline";
        root.style.setProperty('--white-color', '#000');
        root.style.setProperty('--black-color', '#FFF');
    } else if (theme === 'light') {
        dark.style.display = "inline";
        light.style.display = "none";
        root.style.setProperty('--white-color', '#FFF');
        root.style.setProperty('--black-color', '#000');
    }
}

let fourthSection = document.querySelectorAll('.progress span');
fourthSection.forEach(element => {
    console.log(element.getAttribute('data-progress'))
    element.style.width = `${element.getAttribute('data-progress')}`;
    element.style.height = '100%';
    element.style.position = 'absolute';
    element.style.background = '#B989BD';
    // element.style.css=`width:${element.getAttribute('data-progress')};background-color: #2196f3;`;
});