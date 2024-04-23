const quadro = document.querySelector('.res')

function acrescentar() {
  let typo = String((document.getElementById('article')).value)
  if (typo == 'footer') {
    let text = `@` + String((document.getElementById('txtd')).value)
    let newTag = document.createElement(typo);
    newTag.innerText = text;
    quadro.appendChild(newTag)
  } else {
  let text = String((document.getElementById('txtd')).value)
  let newTag = document.createElement(typo);
  newTag.innerText = text;
  quadro.appendChild(newTag)
  }
}  

function limpar(){
  quadro.innerHTML = ''
}
  






