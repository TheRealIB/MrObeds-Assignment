// Write a JavaScript program that work as a trim function (string) using regular expression
function Trim(str)
{
  var result;
  if (typeof str === 'string') 
  {
    result = str.replace(/^\s+|\s+$/g, '');
    return result;
  }
  else
  {
    return false;
  }
}
console.log(Trim(' myAssignment '));

