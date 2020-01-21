// NO.1 PERULANGAN FORZA MILAN
function cetak(num){
    for(var i=1; i<=num ; i++){

      // if(i==i){
      //   console.log(i)
      // }
      if(i%2==0 && i%5==0){
        console.log("Forza Milan "+i)
      }
      else if(i%5==0){
        console.log("Milan "+i)
      }
      else if(i%2==0){
        console.log("Forza "+i)
      }
      else{
        console.log(i)
      }
    }
}
 cetak(30);

// NO.2 GAME GLINTS
var names="Yudi";
var roles="Tabib";
var welcome="Selamat datang di Dunia Glints Warrior, ";

if(names=="" && roles==""){
  console.log("Tidak Boleh kosong");
}
else if(names==""){
  console.log("Nama harus diisi!");
}
else if(roles==""){
  console.log("Halo Danu, Pilih peranmu untuk memulai game!");
}
 if(roles=="Ksatria"){
   console.log(welcome+""+names);
   console.log("Halo Ksatria "+names+", Tugas kamu adalah menyerang musuh!");
 }

  if(roles=="Tabib"){
   console.log(welcome+""+names);
   console.log("Halo Tabib "+names+", kamu akan membantu temanmu yang terluka.");
 }

  if(roles=="Penyihir"){
   console.log(welcome+""+names);
   console.log("Halo Penyihir "+names+", Tciptakan keajaiban yang membantu kemenanganmu!");
 }


//NOMER 3
function ubahString(kata){
    for(var i=0; i<=kata.length; i++){
      
      
      if(kata[i]==="1"){
        var hurufi;
        hurufi="i";
        console.log(hurufi);
      }
      else if(kata[i]==="4"){
        var hurufa;
        hurufa="a";
        console.log(hurufa);
      }
      else if(kata[i]==="3"){
        var hurufe;
        hurufe="e";
        console.log(hurufe);
      }
      else if(kata[i]==="7"){
        var hurufu;
        hurufu="u";
        console.log(hurufu);
      }
      else if(kata[i]==="0"){
        var hurufo;
        hurufo="o";
        console.log(hurufo);
      }
      else{
        console.log(kata[i]);
      }
      
      
    }
  }
  ubahString("pr4t1Wi0");
  
  
  
  //NOMER 4
  var num=[4,2,8,6];
  
  function tambah(num){
    var hitung=0;
    for(var i=0; i<num.length; i++){
      hitung=hitung+num[i];
    }
    console.log(hitung);
  }
  
  tambah(num);
  
  
  
  //NOMER 5
  var numA = [2, 3, 5]
  var numB = [4, 1, 6]
  
  function hitungscore(){
    var scor=[0, 0];
    for(var a=0; a<=numA.length; a++){
      if(numA[a]>numB[a]){
        scor[0]++;
      }
      else if(numA[a]<numB[a]){
        scor[1]++;
      }
    }
    console.log(scor)
  }
  
  hitungscore(numA, numB);
  
  
  //NOMER 6
  var num = [2, 3, 5, 1, 4];
  var max=0;
  var min=100;
  function hitungdong(){
      var hitungmin=0;
      var hitungmax=0;
      var hitung=0;
      for(var i=0; i<num.length; i++){
        if(num[i]>max){
          max=num[i];
        }
        else if(num[i]<min){
          min=num[i];
        }
        hitung=hitung+num[i];
  
        hitungmax=hitung-max;
        hitungmin=hitung-min;
      }
  
      console.log("Data Array adalah "+num);
      console.log("Nilai MAX adalah "+max);
      console.log("Nilai MIN adalah "+min);
      console.log("Hasil akhir dari urutan min"+hitungmax);
      console.log("Hasil akhir dari urutan max"+hitungmin);
  }
  
  hitungdong(num);
  
  //NOMER 7
  var num = [1, 3, 4, 2, 7, 6];
  var urut;
  urut=num.sort();
  // console.log(urut);
  
  function nomer7(){
    for(var i=0; i<=urut.length; i++){
        // var hitung=i+1;
        if(urut[i]!==i+1){
          return i+1;
        }
        // else{
        //   console.log("ilang")
        // }
    }
  }
  
  console.log(nomer7(num));
  
  
  
  
  
  