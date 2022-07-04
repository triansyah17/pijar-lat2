/*Membuat diskon harga menggunakan function (jumlah, harga). 
Kondisi, 35% diskon dengan maximum diskon 50000 dan minimun total belanja 60000*/

function discount(jumlah, harga) {
    let total  = jumlah * harga
    let disc =  35
    let potongan = disc/100 * total
    if (total >= 60000) {
      potongan
     } else {
      potongan = 0
     }
    if (potongan >= 50000) {
      potongan = 50000
     }
    
    
    let subTotal = total - potongan
   
    console.log(`Total Harga :   ${total}\nPotongan :   ${potongan}\nSub Total :   ${subTotal}`)
  } 
  discount(30, 1500)
  discount(3, 25000)
  discount(4, 60000)