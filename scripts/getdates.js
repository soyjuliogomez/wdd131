// Obtener el año actual
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Obtener la fecha de última modificación
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastMod}`;