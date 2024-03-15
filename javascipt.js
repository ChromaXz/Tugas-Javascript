function dataPerson(){
    let nama = document.getElementById('frm').nama.value;
    let pekerjaan = document.getElementById('frm').pekerjaan.value;
    let hobby = document.getElementById('frm').hobby.value;
    let input = 'Halo ' + nama + '<br> Pekerjaan: ' + pekerjaan + '<br> Hobby: ' + hobby;
    let no_input = 'Maaf Data anda belum terisi';
    let hasil = (nama && pekerjaan && hobby !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;

    //lengkapi kode berikut dan tampilkan hasilnya ada pada html
    //1. isian nama
    //2. isian pekerjaan
    //3. isian hobby
    
}