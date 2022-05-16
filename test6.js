function getDays(dateStart, dateEnd) {
    let start = new Date(dateStart);
    let end = new Date(dateEnd);
    let days = (end - start) / (1000 * 60 * 60 * 24);
    return days;
  }
  
  console.log( getDays('June-14-2019', 'June 20, 2019') ); // -> 6
  console.log( getDays('December-29-2018', 'January, 2019') ); // -> 3
  