let karyawan1 = {
    NIP : "001",
    nama : "amir",
    alamat : "pangandaran",
    showData : () =>{
        console.log(`====SHOW DATA====`);
        console.log(`NIP        :${karyawan1.NIP}`);
        console.log(`Nama       :${karyawan1.nama}`);
        console.log(`alamat     :${karyawan1.alamat}`);
    },
    changeData : (NIP="001", nama= "amir", alamat="pangandaran") =>{
        karyawan1.NIP = NIP;
        karyawan1.nama = nama;
        karyawan1.alamat = alamat;
        console.log(`====CHANGE DATA====`);
        console.log(`NIP        :${karyawan1.NIP}`);
        console.log(`Nama       :${karyawan1.nama}`);
        console.log(`alamat     :${karyawan1.alamat}`);
    }
}
karyawan1.showData()
karyawan1.changeData("002")
karyawan1.changeData("002", "joko")
karyawan1.changeData("002", "joko", "malioboro")
