const addName = (obj, word, number) => {
    let objArg = obj;
    objArg[word] = number;
  
    return objArg;
  };
  

  addName({}, "Brutus", 300) ;
  addName({ piano: 500 }, "Brutus", 400) ;
  addName({ piano: 500, stereo: 300 }, "Caligula", 440) ;

  console.log(addName({}, "Brutus", 300));
  console.log(addName({ piano: 500 }, "Brutus", 400));
  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
  console.log(addName({ piano: 500, stereo: 300 ,Caligula : 440}, "test",100));
  
