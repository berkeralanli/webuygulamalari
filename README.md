# webuygulamalari
/* 
npm = node package manager: kütüphanelerin bulunduğu paket sistemi

express package:  bilgisayarı web sunucusu haline getirmek için kullanılıyor 

bcyrpt: şifreleme tekniği "123456"yı farklı bir şekilde veritabanına kayıt ediyor.
sha1: de aynı görev
md5: da aynı görev

npm i ... : install için i yazabiliriz
npm init: kurmak komutu
npm init -y: bütün her şeyi kabul edip package dosyasını oluşturur
npm express: sunucu oluşturmamaız için

package.json içindeki "dependencies"leri herhangi bir yerden de olsa aynı package leri kurar

json --- key > value şeklinde çalışır
package.json = uygulama hakkındaki verileri bize verir

package.json da script kısmı devstart: nodemon app.js 

nodemon: kodda değişiklik yapıldığı zaman tekrar sunucuyu başlatmaya gerek kalmıyor. nodemon sayesinde kendiliğinden yeniliyor

Hafta 5 ///2 KASIM PERŞEMBE
javascript *** 
variables - 
var function scope tur farklı bloklarda kullanılabilir
let  block scope tur sadece scope içerisinde kullanılabilir
var tekrar tanımlanabilir, tanım olarak değiştirilebilir.

hoisting kavramı (var için) önce atama yapıp daha sonrasında tanım yapılması. Güvenlik anlamında pek iyi değil!

degisken= "merhaba dünya"
var degisken

let ile bu sorun çözülüyor önce tanımlanıp sonra değer ataması yapılması zorunlu kılınıyor.

sabit değişken olan const'a tekrar atama yapılamaz. Örnek veri tabanından çekilen idler', değişmesi istenmeyen veriler. Oturum açıldığında değişmesi istenmeyen tokenlar 

"`${}`" kullanımı 
var name = 'berker'
console.log(`merhaba,${name}`);

geleneksel yöntem
function topla(a,b){
  return a+b
}

arrow function 

const topla=(a,b)=> a+b;

arrow function da bir block scope tur. Dışarıya çıkarılamaz.

=> fonksiyonun kısaltılmasıdır. 4 farklı fonksiyon gösterimi ile karşılaşabiliriz.


6. HAFTA -- API NEDIR = REQUEST - RESPONSE MANTIGI 

KULLANICI VE SUNUCU ARASINDAKI ARA KATMANA API DENIR.
Guvenlik nedeniyle api ortaya cikmistir. 
Kullanicinin sunucuya erisilmesi istenmez bu yuzden api request response kavramini ustlenir

dosyalar klasik adlariyla olusturulur. 

API OLUSTURURKEN MVC(model, view, control) kullaniyoruz

db baglantisi yaparaken password icin 'dotenv' kullaniyoruz

MACLER ICIN MYSQL INDIR VE MYSQL WORKBENCH INDIR KULLANICI GIRISI ICIN (PHPMYADMIN GIBI)
dotenv kurduktan sonra require edip kok dizinde .env adli bir dosya olusturduk. Bu gizli bir dosya ve kullanicinin erismeyecegi bir dizin

'POSTMAN' sunucunda sorgu yapmamiz icin gereken bir arayuz ve biz bu arayuzu kullaniyoruz. 

*/

