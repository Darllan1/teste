class Tower{
 constructor(x,y,width,height){
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;

 this.image = loadImage("./assets/tower.png");
 var options ={
    isStatic:true
 }
 this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
World.add(world,this.body);
 }

  show(){
 var pos = this.body.position;

push();

Translate(pos.x,pos.y);  
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}








}