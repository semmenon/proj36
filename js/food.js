/* class Food {
    constructor(){
        this.foodS = 0;
        this.image=loadImage("Images/Milk.png");
    }            

  getFoodStock(){
     
      
        var foodRef = database.ref("food")
        var foodRef = database.ref("food")
        foodRef.on("value",function(data){
            foodS = data.val()
        })
        
    }
    updateFoodStock(food){
        database.ref("/").update({
            foodS:food
         })
      }

    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodS != 0){
            for(var i=0;i<this.foodS;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30
            }
        }*/
 


class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}   