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