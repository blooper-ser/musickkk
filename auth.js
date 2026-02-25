const API_BASE = "https://musickkk-3pj5.onrender.com/api";
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "pages/user.html";
} else {
  fetch(`${API_BASE}/auth/verify`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => {
    if (!res.ok) {
      localStorage.removeItem("token");
      window.location.href = "../pages/user.html";
    }
  })
  .catch(() => {
    localStorage.removeItem("token");
    window.location.href = "../pages/user.html";
  });
}