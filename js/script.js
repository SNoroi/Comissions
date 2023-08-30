function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // setiver light mode, adicionar a imagem light

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/iCON_HL1.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/iCON_HL2.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Logo do Hunter Legacy com L verde")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "Logo do Hunter Legacy com L laranja")
  }
}
