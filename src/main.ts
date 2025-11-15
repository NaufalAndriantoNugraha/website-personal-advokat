function openWhatsapp() {
  const url = `https://wa.me/6281217351671`;
  window.open(url, "_blank");
}

document.querySelectorAll(".to_whatsapp").forEach((element) => {
  element.addEventListener("click", openWhatsapp);
});
