const toCapital = str => {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" "); //caps first letter of each word in a str
  };
  
  const shortStr = "hello world";
  toCapital(shortStr); // Hi World
  
  const longStr = "the marching band will not stop marching";
  toCapital(longStr); // The Marching Band Will Not Stop Marching
  