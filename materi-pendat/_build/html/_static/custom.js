// Sisipkan biodata di sidebar (di bawah logo).
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".bd-sidebar-primary");
  if (!sidebar) return;

  // Hindari duplikasi jika script terpanggil lebih dari sekali.
  if (sidebar.querySelector(".sidebar-bio")) return;

  const logo = sidebar.querySelector(".navbar-brand.logo");
  if (!logo) return;

  const bio = document.createElement("div");
  bio.className = "sidebar-bio";
  bio.innerHTML = `
    <div class="sidebar-bio__title">Rafli Khiyanuran Bazhari</div>
    <div class="sidebar-bio__subtitle">NIM: 240411100001</div>
    <ul class="sidebar-bio__list">
      <li><strong>Umur</strong>: 20</li>
      <li><strong>Kampus</strong>: Universitas Trunojoyo Madura</li>
      <li><strong>Prodi</strong>: Teknik Informatika</li>
      <li><strong>Semester</strong>: 4</li>
      <li><strong>Hobi</strong>: Bermain game</li>
    </ul>
  `;

  const logoItem = logo.closest(".sidebar-primary-item");
  if (logoItem && logoItem.parentElement) {
    logoItem.parentElement.insertBefore(bio, logoItem.nextSibling);
    return;
  }

  // Fallback: kalau struktur theme berbeda.
  logo.insertAdjacentElement("afterend", bio);
});

