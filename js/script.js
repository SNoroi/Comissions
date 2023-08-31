// function toggleMode() {
//   // Pega o checkbox
//   const html = document.documentElement

//   function LightMode() {
//     html.classList.remove("dark")
//     html.classList.add("light")
//   }

//   function DarkMode() {
//     html.classList.remove("light")
//     html.classList.add("dark")
//   }

//   if (html.classList.contains("light")) {
//     DarkMode()
//     localStorage.html.classList("dark")
//   } else {
//     LightMode()
//     localStorage.html.classList("light")
//   }
// Pega o checkbox

const botaoDark = document.getElementById("toggle-dark")

// Verifica se tem no localStorage seleção do dark theme
if (localStorage.getItem("data-theme") == "dark") {
  botaoDark.checked = true
}

// Liga a função ao checkbox
botaoDark.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme") // Retrieve saved them from local storage
  if (!botaoDark.checked) {
    changeThemeToLight()
  } else {
    changeThemeToDark()
  }
})
// pegar a tag img
// const img = document.querySelector("#profile img")
// setiver light mode, adicionar a imagem light

// substituir a imagem
// if () {
//   img.setAttribute("src", "../assets/iCON_HL1.png")
// } else {
//   img.setAttribute("src", "../assets/iCON_HL2.png")
// }

// if (html.classList.contains("light")) {
//   img.setAttribute("alt", "Logo do Hunter Legacy com L verde")
// }
// if (html.classList.contains("dark")) {
//   img.setAttribute("alt", "Logo do Hunter Legacy com L Laranja")
// }
