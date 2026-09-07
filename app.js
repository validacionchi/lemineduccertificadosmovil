// =========================================================
// DATOS DE LA MAQUETA MÓVIL DE REVISIÓN
// Textos tomados de la referencia en video.
// =========================================================

const datos = {
  tituloPagina: "Certificados en tu Celular",

  nombreAzul: "Ayuda",
  nombreRojo: "Mineduc",

  tituloPrincipal: "Certificados en tu Celular",
  tituloValidacion: "Validación de Certificado",

  nombreInstitucion: "Ministerio de Educación",

  footerArea: "Gobierno de Chile",
  footerDireccion: "Dirección: Av. Libertador Bernardo O'Higgins 1371.",
  footerTelefono: "Teléfono: +56 2 24066000",
  footerVersion: "Versión 1.38.0",

  archivoPDF: "documento.pdf",

  // Los logos quedan desactivados para que después agregues los tuyos.
  usarLogoPrincipal: false,
  logoPrincipal: "assets/logo.png",

  usarLogoFooter: false,
  logoFooter: "assets/logo-footer.png"
};

// =========================================================
// NO EDITAR DEBAJO DE ESTA LÍNEA
// =========================================================

document.title = datos.tituloPagina;
document.getElementById("pageTitle").textContent = datos.tituloPagina;

document.querySelector(".brand-blue").textContent = datos.nombreAzul;
document.querySelector(".brand-red").textContent = datos.nombreRojo;

document.getElementById("mainTitle").textContent = datos.tituloPrincipal;
document.getElementById("validationTitle").textContent = datos.tituloValidacion;
document.getElementById("entityName").textContent = datos.nombreInstitucion;

document.getElementById("footerEntity").textContent = datos.nombreInstitucion;
document.getElementById("footerArea").textContent = datos.footerArea;
document.getElementById("footerAddress").textContent = datos.footerDireccion;
document.getElementById("footerPhone").textContent = datos.footerTelefono;
document.getElementById("footerVersion").textContent = datos.footerVersion;

document.getElementById("openPdfButton").href = datos.archivoPDF;
document.getElementById("copyButton").href = datos.archivoPDF;

const logoPrincipal = document.getElementById("logoPrincipal");
if (datos.usarLogoPrincipal) {
  logoPrincipal.src = datos.logoPrincipal;
  logoPrincipal.style.display = "block";
}

const logoFooter = document.getElementById("logoFooter");
if (datos.usarLogoFooter) {
  logoFooter.src = datos.logoFooter;
  logoFooter.style.display = "block";
}
