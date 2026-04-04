let main = document.getElementById('main')
main.innerHTML = home()

function render(component) {
    switch (component) {
        case 'home':
            main.innerHTML = home()
            break;
    
        case 'catalog':
            main.innerHTML = catalog()
            break;

        default:
            break;
    }
}

document.querySelectorAll(".catalog-link").forEach( e =>
    e.addEventListener('click', (h) => {
        h.preventDefault()
        render('catalog')
    })
)