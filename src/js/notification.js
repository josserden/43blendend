import Swal from 'sweetalert2';

export const showMessage = (icon = 'success', title = 'Your todo added!') => {
  Swal.fire({
    position: 'top-end',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};
