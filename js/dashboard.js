  // Check if user is logged in
  const loggedInUser = JSON.parse(localStorage.getItem('user'));

  if (!loggedInUser) {
    // If not logged in, redirect to login page
    window.location.href = "index.html";
  }

const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    document.getElementById('userDetails').innerHTML = `
      <h3>Welcome, ${user.username}</h3>
      <p>Role: ${user.role}</p>
    `;
  }

  document.getElementById('logoutBtn').addEventListener('click', () => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You will be logged out!',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Stay Logged In',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('user'); // Destroy session
        window.location.href = "index.html"; // Redirect to login
      }
    });
  });