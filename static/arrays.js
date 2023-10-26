let styles = ["jazz", "blues"];
styles.push("rock-n-roll");
styles[Math.floor((styles.length - 1) / 2)] = "classics";
alert(styles.shift());
styles.unshift("rap", "reggae");

/*function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Digite um número", 0);
  
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert(sumInput());*/