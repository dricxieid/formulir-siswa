// script.js

document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form untuk di-submit secara default

    // Ambil nilai dari input form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    // Tambahkan data siswa ke dalam daftar
    const studentDataList = document.getElementById('student-data');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>Nama:</strong> ${name}, <strong>Usia:</strong> ${age}, <strong>Kelas:</strong> ${grade}`;
    studentDataList.appendChild(listItem);

    // Kosongkan input setelah ditambahkan
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
});
