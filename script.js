function generarPDF() {
  // Obtener datos del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;

  // Crear documento PDF
  const pdf = new jsPDF();
  pdf.text(`Nombre: ${nombre}`, 20, 20);
  pdf.text(`Apellido: ${apellido}`, 20, 30);
  pdf.text(`Edad: ${edad}`, 20, 40);

  // Guardar el PDF como un archivo
  pdf.save("datos_persona.pdf");
}