const content = {
    "sections": ["BANNER","s1", "s2", "s3", "s4", "s5", "s6", "s7", "ad1"]
  }
  
  const banner = articulos.filter( a => a === "BANNER")
  const ad1 = articulos.filter( a => a === "ad1")
  const resto = articulos.filter( a => a !== "ad1" && a !=== "BANNER")
  
                //0    //1   //2   //3   // 4
  const mitad = (resto.length / 2) + 1
  
  const parte1 = resto.slice(0, mitad)
  
  console.log(parte1)
  
  const parte2 = resto.slice(mitad, resto.length)
  console.log("ad1")
  console.log(parte2)
  