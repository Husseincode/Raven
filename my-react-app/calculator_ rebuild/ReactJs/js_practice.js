let dice = 
{
  sides : 6,
  roll : function ()
  {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}

let promise = new Promise((resolve, reject)=>{
    const num = dice.roll();
    (num > 1) ? resolve(num) : reject(num);
})

promise.then((result)=>{console.log(`Number ${result} is greater than 1`)}).catch((result)=>{console.log(`The result is ${result}`)});

/**
 * CALLBACK HELL
 */
function wait(message, callback, seconds)
{
  setTimeout(callback,seconds * 1000);
  console.log(message);
}

function selfDestruct()
{
  console.log('BOOOOM!');

}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ...?');

let character = 
{
  id: "Hussein20x5",
}
function getPlayerInfo(id)
{
  let details = 
  [
    ["Hussein20x5", "Wizard"],
    ["Xain567", "Knight"]
  ]

  for (const x of details)
  {
    if (x[0] == id)
    {
      return x[1];
    }
  }
}
async function loadGame()
{
  try
  {
    const info = await getPlayerInfo(character.id);
    console.log(info)
    //load thr game using the returned info
  }

  catch (error)
  {
    throw error;
  }
}
loadGame();

function random(a,b=1)
{
  // if only 1 argument is provided, we need to swap the values of a and b
  if (b === 1)
  {
    [a,b] = [b,a];
  }
  return Math.floor((b - a + 1) * Math.random()) + a;
}
console.warn(random(12, 20));

function returnHello()
{
  console.log(`returnHello() called`);
  return function()
  {
    console.log('Hello World!');
  }
}
let hello = returnHello();
hello()