let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


let cartDiv = document.getElementById("cart")

//localStorage.getItem("nyckel") hämtar värdet på det som sparats i LocalStorage med nyckeln "nyckel".
// JSON.parse(string) tar en sträng i JSON-format och gör ett javascript-objekt av det.
let products = JSON.parse(localStorage.getItem("products"))

//Variabeln products innehåller nu en array med alla produkter som sparats i LocalStorage.
console.log(products)

if (Array.isArray(products)) {
  products.forEach((product) => {
    cartDiv.insertAdjacentHTML(
      "beforeend",
      `<div>Namn: ${product.name} Pris: ${product.price}</div>`
    )
  })
} else {
  cartDiv.insertAdjacentHTML("beforeend", `<div>Varukorgen är tom.</div>`)
}

// Eventlyssnare på knappen som anropar funktionen
// addProductToLocalStorage() med en hårdkodad produkt.
document.getElementById("addToCart1").addEventListener("click", () => {
  addProductToLocalStorage({ name: "produkt1", price: 100 })
})

document.getElementById("addToCart2").addEventListener("click", () => {
  addProductToLocalStorage({ name: "produkt2", price: 200 })
})

document.getElementById("addToCart3").addEventListener("click", () => {
  addProductToLocalStorage({ name: "produkt3", price: 300 })
})

/**
 * Lägger till objektet product i en array i localStorage som heter products.
 * @param {object product} product ett objekt som läggs in i en array i localStorage.
 */
function addProductToLocalStorage(product) {
  // Hämta ut alla produkter som finns i localStorage
  // JSON.parse(string) tar en sträng i JSON-format och gör ett javascript-objekt av det.
  let products = JSON.parse(localStorage.getItem("products"))

  // kontrollera om det fanns en array i localStorage
  if (products && Array.isArray(products)) {
    // OM det fanns en array i localStorage, lägg till product.
    products.push(product)
  } else {
    // om det INTE fanns en array i localStorage så skapa en med product i.
    products = [product]
  }

  // Spara arrayen med produkter i localStorage igen.
  // JSON.stringify(objekt) skapar en sträng på JSON-format av ett objekt.
  localStorage.setItem("products", JSON.stringify(products))
}