let radioButtonsTheme = document.querySelectorAll('.menu__radio-button')
let buttonsTheme = document.querySelectorAll('.menu__button')
let selectTheme = document.querySelector('.menu__select')
let page = document.querySelector('.body');


radioButtonsTheme.forEach(radioButton => {
	radioButton.addEventListener('change', function() {
		if (this.value === 'light-theme') {
			if (page.classList.contains('gray-theme') || page.classList.contains('dark-theme')) {
				page.classList.remove('gray-theme');
				page.classList.remove('dark-theme');
			}
		}
		if (this.value === 'dark-theme') {
			if (page.classList.contains('gray-theme')) {
				page.classList.remove('gray-theme');
			}
			page.classList.add('dark-theme');
		}
		if (this.value === 'gray-theme') {
			if (page.classList.contains('dark-theme')) {
				page.classList.remove('dark-theme');
			}
			page.classList.add('gray-theme');
		}
	});
});


buttonsTheme.forEach(button => {
	button.addEventListener('click', function() {
		if (this.value === 'light-theme') {
			if (page.classList.contains('gray-theme') || page.classList.contains('dark-theme')) {
				page.classList.remove('gray-theme');
				page.classList.remove('dark-theme');
			}
		}
		if (this.value === 'dark-theme') {
			if (page.classList.contains('gray-theme')) {
				page.classList.remove('gray-theme');
			}
			page.classList.add('dark-theme');
		}
		if (this.value === 'gray-theme') {
			if (page.classList.contains('dark-theme')) {
				page.classList.remove('dark-theme');
			}
			page.classList.add('gray-theme');
		}
	});
});

selectTheme.addEventListener('change', function() {
	if (this.value === 'light-theme') {
		if (page.classList.contains('gray-theme') || page.classList.contains('dark-theme')) {
			page.classList.remove('gray-theme');
			page.classList.remove('dark-theme');
		}
	}
	if (this.value === 'dark-theme') {
		if (page.classList.contains('gray-theme')) {
			page.classList.remove('gray-theme');
		}
		page.classList.add('dark-theme');
	}
	if (this.value === 'gray-theme') {
		if (page.classList.contains('dark-theme')) {
			page.classList.remove('dark-theme');
		}
		page.classList.add('gray-theme');
	}
});

//MODAL WINDOW

const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
    });
});
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".gallery").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fa fa-times closeBtn");
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};
