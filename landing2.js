function Home(location,color,price)
{
    this.location=location;
    this.color=color;
    this.price=price;
    this.room=5;
    this.bedRoom=3;
}
let ne=new Home("Delhi","blue",4501242);
console.log(ne.price);

// Define a consturtor function ------------->
function Bird()
{
    this.name="Albert";
    this.color="blue";
    this.numLegs=2;
}
// use a consturtor to create Objects
let blueBird=new Bird();
console.log(blueBird.name);
