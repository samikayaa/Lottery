#55 kişi mevcut olduğunu varsayabiliriz.

function lottery(isimler) {
    const onKat = [];
    onKat.push(isimler[9]);
    onKat.push(isimler[19]);
    onKat.push(isimler[29]);
    onKat.push(isimler[39]);
    onKat.push(isimler[49]);
    const ilkBes = isimler.splice(0, 5);
    isimler.slice(6);
    isimler.splice(9, 1);
    isimler.splice(19, 1);
    isimler.splice(29, 1);
    isimler.splice(39, 1);
    isimler.splice(49, 1);
    const randomIsim = isimler[Math.floor(Math.random() * isimler.length)];
    const sonuc = ilkBes.concat(onKat, randomIsim);
    return sonuc;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = lottery;
