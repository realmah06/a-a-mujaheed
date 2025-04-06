document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const adminUser = {
  username: 'realmah06',
  password: '4787@',
  role: 'ADMINISTRATOR', // Add this line
  fullname: 'MAHADI ABUBAKAR MUJAHID'
};


  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();

  // Validation for empty fields
  if (username === '' || password === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Username and Password are required!',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Try again',
    });
    return;
  }

  // Check if credentials are correct
  if (username === adminUser.username && password === adminUser.password) {
    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(adminUser));

    // Show confirmation alert before login
    Swal.fire({
      icon: 'warning',
      title: 'Login to Dashboard?',
      showCancelButton: true,
      cancelButtonText: 'Discard',
      confirmButtonText: 'Login',
      allowOutsideClick: false,
      preConfirm: () => {
        return new Promise((resolve) => {
          Swal.showLoading(); // Show loading spinner
          setTimeout(() => {
            resolve();
          }, 2000); // Simulate delay
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'Welcome back to ADMIN Dashboard',
          timer: 3000,
          showConfirmButton: true,
        }).then(() => {
          window.location.href = 'dashboard.html';
        });
      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed!',
      text: 'Invalid Username or Password.'
    });
  }
});
