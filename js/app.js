const getById = id => document.querySelector(`#${id}`)
const getByClass = _class => document.querySelectorAll(`.${_class}`)
const addEvent = (element, type, action) =>
	element.addEventListener(type, action)

document.addEventListener('DOMContentLoaded', () => {
	let currentURL = window.location.href.split('/').pop().replace('.html', '')
	if (currentURL === '')
		currentURL = 'index'

	const navLinks = getByClass('nav-link')
	navLinks.forEach(link => {
		if (currentURL === link.parentNode.id)
			link.classList.add('active')
	})
})