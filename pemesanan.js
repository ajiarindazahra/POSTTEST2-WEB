
const form = document.querySelector('form');
const storageKey = 'form_pemesanan'

function storeData (namapemesan,gender,status,emailpemesan,teleponpemesan,tanggalpemesan,waktupemesan,jumlah_tamu,Ruangan,keterangan){
    const data = JSON.parse(sessionStorage.getItem(storageKey)) || [];
    data.push({namapemesan,gender,status,emailpemesan,teleponpemesan,tanggalpemesan,waktupemesan,jumlah_tamu,Ruangan,keterangan});
    sessionStorage.setItem(storageKey,JSON.stringify(data));
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const namapemesan = form.namapemesan.value;
    const gender = form.elements.gender.value;
    const status = Array.from(form.querySelectorAll('input[name="status"]:checked')). map((input) => input.value);
    const emailpemesan = form.emailpemesan.value;
    const teleponpemesan = form.teleponpemesan.value;
    const tanggalpemesan = form.tanggalpemesan.value;
    const waktupemesan = form.waktupemesan.value;
    const jumlah_tamu = form.jumlah_tamu.value;
    const Ruangan = form.elements.Ruangan.value;
    const keterangan = form.keterangan.value;

    storeData(namapemesan,gender,status,emailpemesan,teleponpemesan,tanggalpemesan,waktupemesan,jumlah_tamu,Ruangan,keterangan);

    alert ('data berhasil disimpan');
    window.location.href = "struk.html";
    form.reset();

  

});
