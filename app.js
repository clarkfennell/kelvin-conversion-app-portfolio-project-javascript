const kelvin = prompt('What is the Kelvin tempurature today?');
 /*this code allows the user to imput the tempurature in kelvin*/

const celsius = kelvin - 273;
/*this code converts the tempurature from degrees kalvin to celsius*/

let fahrenheit = celsius * (9/5) + 32
/*this code converts the tempurature from celsius to fahrenheit*/

fahrenheit = Math.floor(fahrenheit);
/*this code rounds the fahrenheit tempurature*/

console.log(`the tempurature is ${fahrenheit} degrees fahrenheit.`);

/*this code displays the tempurature is degress fahrenheit*/
