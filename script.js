var n = 16;
box = div.querySelector('.box');
box.setAttribute('display', 'flex');
const content = document.createElement('div');
content.classList.add('content');
for (i=0;i<n;i++){
	for (j=i;j<n;j++){
		content.textContent = 'Hello';
	}
}
box.appendChild(content)
