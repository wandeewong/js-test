function numInStr(val) {
    // if val = ['abc', 'abc10'],  return ['abc10']
    // if val = ['abc', 'ab10c', 'a10bc', 'bcd'], return ['a10bc', 'a10bc']
    // if val = ['this is a test', 'test1'], return ['test1']
    // if val = ['1a', 'a', '2b', 'b'], return ['1a', '2b']
    let result = [];
    for (let i = 0; i < val.length; i++) {
      if (val[i].match(/\d/g)) {
        result.push(val[i]);
      }
    }
    return result;
  }
  
  console.log( numInStr(['abc', 'abc10']) ); // -> ['abc10'];
  console.log( numInStr(['abc', 'ab10c', 'a10bc', 'bcd']) ); // -> ['ab10c', 'a10bc']
  