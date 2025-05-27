const dummyEmail = "user@example.com";
const dummyPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    Swal.fire({
      icon: "warning",
      title: "Peringatan",
      text: "Email dan kata sandi harus diisi!",
    });
    return;
  }

  if (email === dummyEmail && password === dummyPassword) {
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Login berhasil!",
      confirmButtonText: "OK",
      confirmButtonColor: "#3085d6",
    }).then(() => {
      window.location.href = "Shananda/Dashboard.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Gagal",
      text: "Email atau kata sandi salah!",
      confirmButtonColor: "#3085d6",
    });
  }
});
