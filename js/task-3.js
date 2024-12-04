function filterArray(numbers, value) {
    const newArray = []; // Eşleşen sayılar için boş bir dizi oluştur
    
    for (const number of numbers) { // numbers dizisini döngü ile dolaş
        if (number > value) {  // Değer kontrolü
          newArray.push(number); // Eşleşen sayıları yeni diziye ekle
        }
      }
    
      return newArray; // Yeni dizi döndür
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
