const iconMenu = document.querySelector('.menu-icon')

if (iconMenu) {
    const menuBody = document.querySelector('.menu-body')
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('._lock')
        iconMenu.classList.toggle('._active')
        menuBody.classList.toggle('._active')
    })
}

const menuLinks = document.querySelectorAll('.menu-link[data-goto]')

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })

            e.preventDefault()
        }
    }
}

