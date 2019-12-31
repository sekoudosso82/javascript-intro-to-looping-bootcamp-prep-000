function forLoop(anyArray)
{
  for (var i = 0; i < 25; i++) 
  {
    if (i !== 1)
    { anyArray.push(`I am ${i} strange loops.`)}
    else if (i === 1){
       anyArray.push ('I am 1 strange loop.') 
    }
  }
  return anyArray;
}