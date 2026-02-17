# Modelling

Tahap **Modelling** adalah proses membangun model statistik atau machine learning
berdasarkan dataset yang telah dipersiapkan. Pada bagian ini, pemilihan algoritma
dan cara evaluasinya harus selaras dengan tujuan bisnis dan karakteristik data.

## Metode/algoritma
- Menentukan **jenis tugas**: klasifikasi, regresi, atau klastering.
- Menyusun **model baseline** sederhana sebagai pembanding awal
  (contoh: model yang selalu menebak rata‑rata, atau logistic regression dasar).
- Memilih satu atau beberapa **model utama**, misalnya:
  - Decision Tree / Random Forest,
  - K‑Nearest Neighbors,
  - Support Vector Machine (SVM),
  - XGBoost, atau model lain yang relevan dengan kasus.

## Pelatihan
- Menjelaskan **skema pelatihan**:
  - pembagian train/validation/test,
  - atau penggunaan cross‑validation (k‑fold).
- Menuliskan **hyperparameter penting** yang digunakan pada tiap model
  (misal: depth tree, jumlah estimators, learning rate, dsb.).
- Jika dilakukan **tuning hyperparameter** (grid search/random search),
  jelaskan ruang pencarian dan kombinasi parameter terbaik yang diperoleh.

## Evaluasi
- Menentukan **metrik evaluasi** yang sesuai:
  - klasifikasi: accuracy, precision, recall, F1‑score, AUC,
  - regresi: MAE, RMSE, MAPE, R², dan sebagainya.
- Menyajikan hasil evaluasi model (tabel skor, confusion matrix, kurva ROC,
  grafik error, dsb.) dan membandingkan beberapa model jika ada.
- Melakukan **analisis error**:
  - pola kesalahan apa yang sering muncul,
  - pada kelas/kelompok mana model sering salah,
  - serta kemungkinan penyebab dan perbaikan yang bisa dilakukan.

