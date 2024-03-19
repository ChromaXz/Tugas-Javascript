// Data pegawai
const employees = [
    { nama: 'Dewa Gede', jabatan: 'Manager', status: 'Menikah' },
    { nama: 'Uhuyy', jabatan: 'Asisten Manager', status: 'Belum Menikah' },
    { nama: 'Eka April', jabatan: 'Staff', status: 'Menikah' },
    { nama: 'Agi Redit', jabatan: 'Staff', status: 'Belum Menikah' }
];

// Fungsi untuk menghitung gaji
function calculateSalary(employee) {
    let gajiPokok, tunjanganJabatan, bpjs, tunjanganKeluarga, totalGaji;

    switch (employee.jabatan) {
        case 'Manager':
            gajiPokok = 15000000;
            break;
        case 'Asisten Manager':
            gajiPokok = 10000000;
            break;
        case 'Staff':
            gajiPokok = 5000000;
            break;
    }

    tunjanganJabatan = gajiPokok * 0.15;
    bpjs = gajiPokok * 0.1;
    tunjanganKeluarga = employee.status === 'Menikah' ? gajiPokok * 0.2 : 0;
    totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    return { gajiPokok, tunjanganJabatan, bpjs, tunjanganKeluarga, totalGaji };
}

// Menampilkan data pegawai dalam tabel
const employeeDataBody = document.getElementById('employeeData');
let totalGajiKeseluruhan = 0;

employees.forEach(employee => {
    const { gajiPokok, tunjanganJabatan, bpjs, tunjanganKeluarga, totalGaji } = calculateSalary(employee);
    totalGajiKeseluruhan += totalGaji;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${employee.nama}</td>
        <td>${employee.jabatan}</td>
        <td>${employee.status}</td>
        <td>${gajiPokok.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
        <td>${tunjanganJabatan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
        <td>${bpjs.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
        <td>${tunjanganKeluarga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
        <td>${totalGaji.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
    `;

    employeeDataBody.appendChild(row);
});

// Menampilkan total gaji keseluruhan
const totalGajiElement = document.getElementById('totalGaji');
totalGajiElement.textContent = totalGajiKeseluruhan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });