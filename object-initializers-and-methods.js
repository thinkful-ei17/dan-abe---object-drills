let loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
  return (this.water / this.flour)*100;
  }
}

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());
