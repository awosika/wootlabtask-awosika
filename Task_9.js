function reverse(value)
{
value=value.toLowerCase();
var rev= value.split('').reverse('').join('');
if(rev===value)
{
return "palindrome";
}
else{
return "Not palindrome";
}
}
console.log(reverse("mom"));
