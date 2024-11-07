function collect (arr)
{ 
  let i = 1
  for (const element of arr) {
    console.log(`Entry: ${i} => ${element}`); 
  }
}

function display(callback)
{
  console.log("Enter the Users and Watch them in a list Feel !!");
  let arr = []
  const num = prompt("Enter Number of Users")
  for(let i=0;i<num;i++)
  {
   arr.push(prompt(`Enter ${i+1} User`)) 
  }
  console.log('.....................');
  callback(arr)
  console.log('.....................');
  
  
}

display(collect);