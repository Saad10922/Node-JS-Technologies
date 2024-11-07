console.log("Statement 1");

async function info() {
  console.log("Statement 2");

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random()*10)); 
    }, 3000);
  });

  console.log("**************");
  console.log(data); 
  console.log("**************");
}
console.log("Statement 3");

console.log("Statement 4");


info();
