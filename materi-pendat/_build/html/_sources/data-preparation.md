# Data Preparation

Tahap **Data Preparation** adalah proses mengolah data mentah menjadi
dataset yang bersih dan siap dimodelkan. Bagian ini seringkali paling
memakan waktu, tetapi sangat menentukan kualitas model di tahap berikutnya.

## Pembersihan data
- Menangani **missing value**, misalnya dengan:
  - menghapus baris/kolom tertentu,
  - mengisi dengan rata‑rata/median/modus,
  - atau menggunakan teknik imputasi lain.
- Memperbaiki **tipe data** yang salah (angka yang terbaca sebagai teks,
  tanggal dalam format string, dsb.).
- Menghapus **data duplikat** atau record yang jelas tidak valid
  (contoh: nilai di luar rentang logis, id negatif, dan sebagainya).

## Transformasi & fitur
- Melakukan **encoding** pada variabel kategorikal
  (one‑hot encoding, label encoding, dan sejenisnya).
- Melakukan **normalisasi/standarisasi** untuk fitur numerik bila algoritma
  yang dipakai sensitif terhadap skala (misal: K‑NN, SVM, regresi linear).
- Melakukan **feature engineering**, misalnya:
  - membuat fitur rasio (jumlah hadir / jumlah pertemuan),
  - mengelompokkan nilai menjadi kategori (rendah, sedang, tinggi),
  - atau membuat ringkasan dari beberapa kolom.

## Dataset akhir
- Membagi dataset menjadi **train/validation/test** (jika akan digunakan
  dalam pemodelan) dengan proporsi yang jelas.
- Menuliskan **ringkasan perubahan**:
  - berapa banyak baris yang terhapus,
  - fitur apa saja yang dihapus/dibuat baru,
  - serta kondisi akhir data (misal: sudah tidak ada missing value).

