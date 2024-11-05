# Alışveriş Sepeti Simülasyonu

Bu proje, kullanıcıdan alınan ürün adı ve fiyat bilgileriyle bir alışveriş sepeti oluşturarak toplam fiyatı hesaplamayı amaçlamaktadır. Sepet tamamlandıktan sonra ödeme yöntemi seçilir ve kullanıcıya toplam fiyatla birlikte sepetin içeriği gösterilir. 

## Projenin Amacı
- Kullanıcıdan ürün bilgilerini almak.
- Ürünleri sepet dizisine kaydetmek.
- Sepetin içeriğini ve toplam fiyatı kullanıcıya göstermek.
- Kullanıcının ödeme yöntemini seçmesini sağlamak.

## Kullanılan Değişkenler ve Anahtar Kelimeler
- `alisverisiTekrarla`: Alışverişi tekrar etmek isteyip istemediğini belirler.
- `sepet`: Sepetteki ürünlerin ad ve fiyat bilgilerini saklayan dizi.
- `toplamFiyat`: Sepetteki ürünlerin toplam fiyatını hesaplar.
- `urunEkle`: Kullanıcının yeni ürün eklemek isteyip istemediğini belirler.
- `urunAdi`: Kullanıcıdan alınan ürünün adı.
- `urunFiyati`: Kullanıcıdan alınan ürünün fiyatı.
- `odemeSecenekleri`: Ödeme seçeneklerini kullanıcıya sunar.
- `odemeYontemi`: Kullanıcının seçtiği ödeme yöntemini saklar.

## Kodun Adım Adım Açıklaması

1. **Başlangıç Döngüsü**: `while` döngüsü ile `alisverisiTekrarla` değişkeni `true` olduğu sürece kullanıcı alışveriş yapabilir.
2. **Ürün Ekleme**: `do-while` döngüsü ile her ürün için:
   - Kullanıcıdan ürün adı ve fiyat bilgisi alınır.
   - Fiyatın geçerli bir sayı olup olmadığı kontrol edilir. Geçerliyse ürün `sepet` dizisine eklenir.
   - `confirm()` ile kullanıcıya başka ürün eklemek isteyip istemediği sorulur.
3. **Sepeti Gösterme ve Toplam Fiyat Hesaplama**:
   - `for` döngüsü ile `sepet` dizisindeki her ürünün fiyatı `toplamFiyat` değişkenine eklenir.
   - Sepetteki tüm ürünler ve toplam fiyat `console.log()` ile kullanıcıya gösterilir.
4. **Ödeme Yöntemi Seçimi**:
   - `prompt()` ile ödeme seçenekleri sunulur ve kullanıcı seçimini yapar.
   - `switch-case` yapısı ile ödeme yöntemi seçilir ve uygun mesaj gösterilir.
5. **Alışverişi Tekrarlama**:
   - `confirm()` ile kullanıcıya alışverişi tekrar edip etmek istemediği sorulur. Eğer tekrar etmek isterse, `alisverisiTekrarla` `true` olur ve başa döner.

## Örnek Kullanım

Örneğin kullanıcı şu adımları izleyebilir:

1. İlk ürün olarak "Elma" ve 5 TL girebilir.
2. Ardından "Armut" ve 7 TL ekleyebilir.
3. Başka ürün eklemek istemediğini belirterek ödeme seçimine geçer.
4. Ödeme yöntemi olarak "Kredi Kartı" seçer.
5. Toplam fiyat 12 TL olarak görüntülenir ve alışveriş sona erer.

## Özet

Bu projede:
- Ürünler sepet dizisine eklenir.
- Her alışverişin sonunda sepet içeriği ve toplam fiyat kullanıcıya gösterilir.
- Kullanıcının alışverişi tekrar edip etmeyeceği sorulur.

