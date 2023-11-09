// geleneksel
// function test(){
//   console.log('Merhaba'+this.name)
// }
// const person = {
//   name:'Berker',
//   soyle:test,
// };

// person.soyle();

// const test() => {

//    console.log('Merhaba'+this.name);
// }
// const person = {
//    name:'Berker',
//    soyle:test,
//  };

//  person.soyle();


// // GELENEKSEL YÖNTEM
// function addToCart(urun_adi,adet,fiyat){
//   console.log(urun_adi)
//   console.log(adet)
//   console.log(fiyat)

// };
// addToCart('elma',5,12);
// addToCart('armut',3,14);
// addToCart('limon',7,16);

// let urunler=[{urun_adi:'Elma',fiyat:5,adet:20},
//             {urun_adi:'armut',fiyat:5,adet:20},
//             {urun_adi:'Elma',fiyat:5,adet:20}]

// function addToCart(urun){
//   console.log(urun_adi)
//   console.log(adet)
//   console.log(fiyat)
  
// }
// addToCart();


// let urunler=[{urun_adi:'Elma',fiyat:5,adet:20},
//             {urun_adi:'armut',fiyat:5,adet:20},
//             {urun_adi:'Elma',fiyat:5,adet:20}]

// console.log(urunler[0]['urun_adi']) 

//rest operatörü (...) bir dizi / liste oluşmasını sağlar
// function topla(...sayilar){
//   let toplam=0;
//   for(let i=0;i<sayilar.length;i++){
//     toplam=toplam+sayilar[i]
//   }
//   console.log(toplam);
// }
// topla(10,20,30,40,50,60)


// LİSTEYİ OBJEYE DÖNÜŞTÜRMEK
// let [birinci, ikinici, ucuncu]=['İç Anadolu','marmara','karadeniz']
// console.log(birinci)

//Distracting işlemi
// let [birinci, ikinici, ucuncu]=[
//   {adi:'İç Anadolu', nufus: '20m'},
//   {adi:'Marmara', nufus: '20m'},
//   {adi:'Karadeniz', nufus: '20m'}]

// console.log(birinci)

//Spread Operatörü 
// let sayilar =[30,100,25,123,41];
// console.log(...sayilar)







//Conditional Ternary operator
//GELENEKSEL
// const a = 125;
// if(a<100){
//   console.log('100 e eşit')
// } else {
//   console.log('100 e eşit değil')
// }

// KISALTILMIŞ 
// const sonuc =a==100?'100 e eşit':'100 e eşit değil'
// console.log(sonuc)





// GELENEKSEL
// function example(){
//   if(condition1){
//     return value1
//   }else if(condition2){
//     return value2
//   } else{
//     return value3 
//   }
// }

// YENİ KISALTILMIŞ
// function example(){
//   return condition1?value1:
//   condition2?value2:
//   value3
// }



// Geleneksel
// const sayilar=[1,2,3,4,5,6,7,8,9]
// const ciftsayilar=sayilar.filter(function(sayilar){
//   return sayilar%2===0
// });
// console.log(ciftsayilar)

// Kısaltılmış
// const sayilar=[1,2,3,4,5,6,7,8,9]
// const ciftsayilar=sayilar.filter(sayilar=>sayilar%2===0)
// console.log(ciftsayilar)

// const sayilar=[1,2,3,4,5,6,7,8,9]
// const sayi=sayilar.find(function(sayilar){
//   return sayilar%2===0
// });

// console.log(sayi);

// 6. HAFTA 

// 