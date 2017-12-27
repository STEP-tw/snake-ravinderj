const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

let wallCoords = {
  "west":1,
  "east":119,
  "north":-1,
  "south":60
};

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  hasTouchTheWall : function(){
    let snakeDirection = this.head.direction;
    let snakeCoord;
    if(snakeDirection == "east" || snakeDirection == "west"){
      snakeCoord = this.head.x;
    }else{
      snakeCoord = this.head.y;
    }
    console.log(wallCoords[snakeDirection]);
    return snakeCoord == wallCoords[snakeDirection];
  }
}
