const rightshift = (x, y) => {
    let a = Math.floor(x / Math.pow(2 , y));
    return a;
  };
  
  console.log(rightshift(80, 3));
  console.log(rightshift(-24, 2));
  console.log(rightshift(-5, 1));
  console.log(rightshift(4666, 6));
  console.log(rightshift(3777, 6));
  console.log(rightshift(-512, 10));