# Deployment

Tahap **Deployment** adalah tahap menerapkan hasil analisis atau model ke
lingkungan nyata sehingga bisa digunakan oleh pengguna (stakeholder).
Output tidak harus selalu berupa sistem besar; laporan yang jelas dan
mudah dipahami pun termasuk bentuk deployment.

## Rencana deployment
- Menentukan bentuk **deliverable**:
  - laporan tertulis (PDF/slide),
  - dashboard interaktif,
  - API model,
  - atau web/aplikasi sederhana (seperti Jupyter Book ini).
- Menjelaskan **tools** yang digunakan untuk deployment, misalnya:
  - Jupyter Notebook / Jupyter Book,
  - Streamlit / Gradio,
  - Flask / FastAPI,
  - Power BI / Tableau, dan lain‑lain.
- Menentukan siapa **pengguna akhir** (dosen, mahasiswa, manajemen, dsb.)
  dan bagaimana cara mereka mengakses hasil analisis.

## Cara pakai
- Menjelaskan **input** yang dibutuhkan:
  - file data baru,
  - form isian,
  - atau parameter tertentu yang harus diisi pengguna.
- Menjelaskan langkah‑langkah **menggunakan sistem/deployment** secara singkat
  dan runtut (step‑by‑step).
- Menjelaskan bentuk **output**:
  - tabel prediksi,
  - grafik dan visualisasi,
  - atau rekomendasi yang dihasilkan oleh model.

## Monitoring & perawatan
- Menyusun rencana **update data** (seberapa sering data baru akan dimasukkan
  dan model dievaluasi ulang).
- Menentukan indikator kapan model perlu **di‑retrain** jika performanya
  menurun seiring waktu (model drift).
- Mencatat **risiko dan keterbatasan**:
  - asumsi data yang digunakan,
  - batas akurasi model,
  - hal‑hal yang perlu diperhatikan agar pengguna tidak salah menafsirkan hasil.

