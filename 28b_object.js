let karyawan2 ={
    NIP : "002",
    nama : "BudiMahmud",
    alamat : {
        jalan : "anggrek 02",
        kelurahan : "pamulang",
        kecamatan : "benda baru",
        kota : "tangsel"
    },
    gaji : 5000000,
    showData : () =>{
        console.log(`NIP        :${karyawan2.NIP}`);
        console.log(`Nama       :${karyawan2.nama}`);
        for (const property in karyawan2.alamat) {
            console.log(`${property}: ${karyawan2.alamat[property]}`);
        }
        console.log(`Gaji       :${karyawan2.gaji}`);
    },
    changeGaji : (operasi, a) =>{
        operasi(a)
    },
    tambahGaji : (a) =>{
        karyawan2.gaji += a;
    },
    kurangGaji : (a) =>{
        karyawan2.gaji -= a;
    }
}
karyawan2.changeGaji(karyawan2.tambahGaji, 2000000);
// karyawan2.changeGaji(karyawan2.kurangGaji, 2000000);
karyawan2.showData();