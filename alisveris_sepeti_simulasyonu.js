let alisverisiTekrarla = true;

while (alisverisiTekrarla) {
  let sepet = [];
  let toplamFiyat = 0;
  let urunEkle = true;

  // Ürün ekleme döngüsü
  do {
    let urunAdi = prompt("Ürün adını girin:");
    let urunFiyati = parseFloat(prompt("Ürün fiyatını girin:"));

    if (!isNaN(urunFiyati) && urunFiyati > 0) {
      sepet.push({ ad: urunAdi, fiyat: urunFiyati });
    } else {
      console.log("Geçerli bir fiyat giriniz.");
    }

    urunEkle = confirm("Başka bir ürün eklemek istiyor musunuz?");
  } while (urunEkle);

  // Sepetteki ürünleri ve toplam fiyatı gösterme
  console.log("Sepetinizdeki Ürünler:");
  for (let urun of sepet) {
    console.log("- " + urun.ad + ": " + urun.fiyat + " TL");
    toplamFiyat += urun.fiyat;
  }
  console.log("Toplam Fiyat:", toplamFiyat, "TL");

  // Ödeme yöntemi seçimi
  let odemeSecenekleri =
    "Ödeme Yöntemleri:\n1. Kredi Kartı\n2. Nakit\n3. Mobil Ödeme";
  let odemeYontemi = prompt(
    odemeSecenekleri + "\nLütfen ödeme yöntemi seçiniz (1, 2 veya 3):"
  );

  switch (odemeYontemi) {
    case "1":
      console.log("Kredi Kartı ile ödeme yapıldı.");
      break;
    case "2":
      console.log("Nakit ödeme yapıldı.");
      break;
    case "3":
      console.log("Mobil ödeme yapıldı.");
      break;
    default:
      console.log("Geçersiz ödeme yöntemi seçildi.");
      break;
  }

  // Tekrar alışveriş yapmak isteyip istemediğini sorma
  alisverisiTekrarla = confirm("Alışverişi tekrar etmek istiyor musunuz?");
}

console.log("Alışveriş sona erdi. Toplam ödemeniz için teşekkürler!");
