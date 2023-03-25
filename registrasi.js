
const form = document.querySelector('form');
const storageKey = 'users';

function storeData (daf_nama,daf_email,daf_foto,daf_pass){

    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
    data.push({daf_nama,daf_email,daf_foto,daf_pass});

    localStorage.setItem(storageKey,JSON.stringify(data));
}

form.addEventListener('submit', (event)=>{

    
    event.preventDefault();
    const daf_nama = form.daf_nama.value;
    const daf_email = form.daf_email.value;
    const daf_foto = form.daf_foto.value;
    const daf_pass = form.daf_pass.value;

    storeData(daf_nama,daf_email,daf_foto,daf_pass);

    alert("Berhasil Daftar dan coba login");
    form.reset();
});
    

