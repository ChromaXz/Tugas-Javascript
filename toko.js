let pegawai = [];

function tambahPegawai() {
    let nama = document.getElementById("nama").value;
    let jabatan = document.getElementById("jabatan").value;
    let status = document.getElementById("status").value;

    let gajiPokok;
    switch (jabatan) {
        case "Manager":
            gajiPokok = 15000000;
            break;
        case "Asisten Manager":
            gajiPokok = 10000000;
            break;
        case "Staff":
            gajiPokok = 5000000;
            break;
    }

    let tunjanganJabatan = gajiPokok * 0.15;
    let bpjs = gajiPokok * 0.1;
    let tunjanganKeluarga = status === "Menikah" ? gajiPokok * 0.2 : 0;
    let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    let pegawaiData = {
        nama: nama,
        jabatan: jabatan,
        status: status,
        gajiPokok: gajiPokok,
        tunjanganJabatan: tunjanganJabatan,
        bpjs: bpjs,
        tunjanganKeluarga: tunjanganKeluarga,
        totalGaji: totalGaji
    };

    pegawai.push(pegawaiData);
    tambahkanBarisPegawai(pegawaiData);
    hitungTotalGaji();
}

function tambahkanBarisPegawai(pegawai) {
    let dataPegawai = document.getElementById("data-pegawai");

    let row = document.createElement("tr");

    let namaCell = document.createElement("td");
    namaCell.textContent = pegawai.nama;
    row.appendChild(namaCell);

    let jabatanCell = document.createElement("td");
    jabatanCell.textContent = pegawai.jabatan;
    row.appendChild(jabatanCell);

    let statusCell = document.createElement("td");
    statusCell.textContent = pegawai.status;
    row.appendChild(statusCell);

    let gajiPokokCell = document.createElement("td");
    gajiPokokCell.textContent = "Rp " + pegawai.gajiPokok.toLocaleString();
    row.appendChild(gajiPokokCell);

    let tunjanganJabatanCell = document.createElement("td");
    tunjanganJabatanCell.textContent = "Rp " + pegawai.tunjanganJabatan.toLocaleString();
    row.appendChild(tunjanganJabatanCell);

    let bpjsCell = document.createElement("td");
    bpjsCell.textContent = "Rp " + pegawai.bpjs.toLocaleString();
    row.appendChild(bpjsCell);

    let tunjanganKeluargaCell = document.createElement("td");
    tunjanganKeluargaCell.textContent = "Rp " + pegawai.tunjanganKeluarga.toLocaleString();
    row.appendChild(tunjanganKeluargaCell);

    let totalGajiCell = document.createElement("td");
    totalGajiCell.textContent = "Rp " + pegawai.totalGaji.toLocaleString();
    row.appendChild(totalGajiCell);

    dataPegawai.appendChild(row);
}

function hitungTotalGaji() {
    let totalGajiKeseluruhan = 0;

    pegawai.forEach(function(pegawai) {
        totalGajiKeseluruhan += pegawai.totalGaji;
    });

    let totalGajiFooter = document.getElementById("total-gaji");
    totalGajiFooter.innerHTML = "";

    let totalGajiRow = document.createElement("tr");
    let totalGajiCell = document.createElement("td");
    totalGajiCell.colSpan = 7;
    totalGajiCell.textContent = "Total Gaji Keseluruhan";
    totalGajiRow.appendChild(totalGajiCell);

    let totalGajiValue = document.createElement("td");
    totalGajiValue.textContent = "Rp " + totalGajiKeseluruhan.toLocaleString();
    totalGajiRow.appendChild(totalGajiValue);

    totalGajiFooter.appendChild(totalGajiRow);
}