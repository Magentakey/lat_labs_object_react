// contoh membuat object di dalam js
// 1. contoh object sederhana

let karyawan1 = {
    NIP : "001",
    nama : "amir",
    alamat : "pangandaran"
}
console.log(`nip        : ${karyawan1.NIP}`);
console.log(`nama       : ${karyawan1.nama}`);
console.log(`alamat     : ${karyawan1.alamat}`);

// 2. contoh object yang kompleks
let karyawan2 ={
    NIP : "002",
    nama : "BudiMahmud",
    alamat : {
        jalan : "anggrek 02",
        kelurahan : "pamulang",
        kecamatan : "benda baru",
        kota : "tangsel"
    }
}
karyawan2.nama = "Senthod Prawirodigdo";
console.log(`nip        : ${karyawan2.NIP}`);
console.log(`nama       : ${karyawan2.nama}`);
console.log(`jalan      : ${karyawan2.alamat.jalan}`);
console.log(`kelurahan  : ${karyawan2.alamat.kelurahan}`);
console.log(`kecamatan  : ${karyawan2.alamat.kecamatan}`);
console.log(`kota       : ${karyawan2.alamat.kota}`);



// let perusahaan = {
//     Amir : {
//         NIP : "001",
//         nama : "amir",
//         alamat : "pangandaran",
//     },
//     BudiMahmud :{
//         NIP : "002",
//         nama : "Senthod Prawirodigdo",
//         alamat : {
//             jalan : "anggrek 02",
//             kelurahan : "pamulang",
//             kecamatan : "benda baru",
//             kota : "tangsel"
//         }
//     }
// }