import Swal from 'sweetalert2'

const Alerta = (titulo, mensaje, icono) => {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 2500,
      width: "240px",
    });
  };

export default Alerta