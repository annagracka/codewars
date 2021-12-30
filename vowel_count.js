function getCount(str) {
    var vowelsCount = 0;
    const letters = str.split('');
    
    letters.forEach(letter => {
      if (/[aeiou]/g.test(letter)) {
        vowelsCount++
      }
    })
    
    return vowelsCount;
  }
