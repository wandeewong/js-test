function missingLetter(str) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
  
      let c = 0;
    for (let i = letters.indexOf(str[0]); i < letters.length; i++) {
      if (letters[i] !== str[c]) {
        return letters[i];
      }
      c++;
      if (c >= str.length) {
          break;
      }
    }
    return 'No missing letter';
  }
  
  console.log( missingLetter('abdefg') ); // -> 'c'
  console.log( missingLetter('mnopqs') ); // -> 'r'
  console.log( missingLetter('tuvxyz') ); // -> 'w'
  console.log( missingLetter('ghijklmno') ); // -> 'No Missing Letter'