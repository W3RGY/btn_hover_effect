const btn = document.querySelector('button')
btn.addEventListener('mouseover', (e) => {
	const x = e.pageX - btn.offsetLeft
	const y = e.pageY - btn.offsetTop
	btn.style.setProperty('--x', x + 'px')
	btn.style.setProperty('--y', y + 'px')
});