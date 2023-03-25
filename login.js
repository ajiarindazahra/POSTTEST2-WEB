const form = document.querySelector("form");    

const storageKey = 'users';

function login (daf_nama,daf_pass){
    const data = JSON.parse(localStorage.getItem(storageKey));
    const user = data.find((user) => user.daf_nama === daf_nama && user.daf_pass === daf_pass);
    if(user){
        alert("Berhasil Login");
        window.location.href = "beranda.html";
        } else {
            alert("Gagal Masuk");
    }
}

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const daf_nama = form.daf_nama.value;
    const daf_pass = form.daf_pass.value;

    login(daf_nama,daf_pass);
    form.reset();
});

