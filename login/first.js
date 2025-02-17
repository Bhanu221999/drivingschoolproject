
function redirectToLogin(userType) {
    if (userType === 'admin') {
      window.location.href = 'admin-login.html';
    } else if (userType === 'instructor') {
      window.location.href = 'instructor-login.html';
    } else {
      alert('Invalid user type');
    }
  }
  