Date.prototype.days = function(to) {
    return Math.abs(Math.floor(to.getTime() / (3600 * 24 * 1000)) - Math.floor(this.getTime() / (3600 * 24 * 1000)))
  }
  
  
  console.log(new Date('2014/05/20').days(new Date('2014/05/23'))); // 3 days
  
  console.log(new Date('2014/05/23').days(new Date('2014/05/20'))); // 3 days