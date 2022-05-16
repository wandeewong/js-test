function leftRotations(str) {
    // return ['abc', 'cab', 'bca'];
    let result = [];
    for (let i = str.length; i > 0; i--) {
      result.push(str.slice(i) + str.slice(0, i));
    }
    return result;
  }
  
  console.log( leftRotations('abc') );
  console.log( leftRotations('abcdef') );