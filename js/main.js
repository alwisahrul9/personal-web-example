const slideDown = (e) => {
    const btn = e.target
    const items = $(btn).parents('.slideDown') //Lacak Parent dari Button
    const p = $(items).children('.content') //Pilih class dari P sesuai

    if($(btn).hasClass('active')){
        $(btn).html("More Info").removeClass('active')
    } else {
        $(btn).html("Less Info").addClass('active')
    }

    $(p).slideToggle()

}

const nav = document.querySelector('nav') // Select navbar
const btn = document.getElementById('themeBtn') // Select Button yg berfungsi merubah tema

const themeMode = () => {

    const body = document.querySelector('body') // Select Body

    document.body.classList.toggle('dark-mode') // Toggle kan body

    let set; // Buat variabel menampung value dari key di localstorage

    //Jika toogle berada di posisi memiliki class dark-mode, maka isi variabel set dengan DARK, jika tidak isi dengan LIGHT
    if(document.body.classList.contains('dark-mode')){
        set = "DARK"
    } else {
        set = "LIGHT"
    }

    // Masukkan nilai variable tadi ke local storage dengan key nya adalah theme
    localStorage.setItem("theme", JSON.stringify(set))


    // Dibawah ini untuk mengontrol perubahan pada tombol pemilih tema
    if($(body).hasClass('dark-mode')){
        $(btn).html('Dark Mode')
        $(btn).removeClass('btn btn-warning text-light btn-sm')
        $(btn).addClass('btn text-light btn-secondary btn-sm')
        nav.setAttribute('data-bs-theme', 'dark')
    } else {
        $(btn).html('Light Mode')
        $(btn).removeClass('btn text-light btn-secondary btn-sm')
        $(btn).addClass('btn btn-warning text-light btn-sm')
        nav.setAttribute('data-bs-theme', 'light')
    }
    
}

// Ambil value dari key yang ada di local storage
let getMode = JSON.parse(localStorage.getItem("theme"))

// Jika valuenya adalah DARK, maka ketika awal reload akan langsung masuk mode DARK, jika tidak maka masuk mode LIGHT
if(getMode === "DARK") {
    document.body.classList = 'dark-mode'
    btn.innerHTML = 'Dark Mode'
    btn.removeAttribute('class')
    btn.setAttribute('class', 'btn text-light btn-secondary btn-sm')
    nav.setAttribute('data-bs-theme', 'dark')
}