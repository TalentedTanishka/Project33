    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var engine , world;

    var particles;
    var plinkos = [];
    var divisions = [];

    var divisionHeight=300;
    var score = 0;
    var turn = 0;
    var ground;
    var gameState = "Play";

    function setup() {
      createCanvas(800, 800);
      engine = Engine.create();
      world = engine.world;
      ground = new Ground(width/2,height,width,20);


      for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }


        for (var j = 75; j <=width; j=j+50) 
        {
        
          plinkos.push(new Plinko(j,75));
        }

        for (var j = 50; j <=width-10; j=j+50) 
        {
        
          plinkos.push(new Plinko(j,175));
        }

        for (var j = 75; j <=width; j=j+50) 
        {
        
          plinkos.push(new Plinko(j,275));
        }

        for (var j = 50; j <=width-10; j=j+50) 
        {
        
          plinkos.push(new Plinko(j,375));
        }

        

        
    }
    


    function draw() {
      background("black");
    
      Engine.update(engine);

      textSize(20)
      fill("white")
    text("Score : "+score,20,30);

    textSize(20)
      fill("white")
    text("500",20,500);

    textSize(20)
      fill("white")
    text("500",100,500);

    textSize(20)
      fill("white")
    text("500",190,500);
    
    textSize(20)
      fill("white")
    text("500",260,500);

    textSize(20)
      fill("white")
    text("100",340,500);

    textSize(20)
      fill("white")
    text("100",420,500);

    textSize(20)
      fill("white")
    text("100",500,500);

    textSize(20)
      fill("white")
    text("200",590,500);

    textSize(20)
      fill("white")
    text("200",660,500);

    textSize(20)
      fill("white")
    text("200",740,500);

      
      
      for (var i = 0; i < plinkos.length; i++) {
        
        plinkos[i].display();
        
      }
      
      
      
    if(gameState==="Play")
    {

    
      if(particles!=null)
      {
        particles.display();
        if(particles.body.position.y>760)
        {
          if(particles.body.position.x<300)
          {
            score=score +500;
            particles=null;
            if(turn>=5)
            {
              gameState="End"
            }
            
          }
          }
        }

          if(particles!=null)
          {
            particles.display();
            if(particles.body.position.y>760)
            {
              if(particles.body.position.x>301 && particles.body.position.x<600)
          {
            score=score +100;
            particles=null;
            if(turn>=5)
            {
              gameState="End"
            }
            
          }
            }
          }
          
          if(particles!=null)
          {
            particles.display();
            if(particles.body.position.y>760)
            {
              if(particles.body.position.x>601 && particles.body.position.x<900)
              {
              score=score +200;
              particles=null;
              if(turn>=5)
              {
                gameState="End"
              }
              
              }
            }
          }
          
        
        
      }
      else if(gameState==="End")
      {
        textSize(70)
      fill("white")
        text("Game Over",200,200);
      }
    
      for (var k = 0; k < divisions.length; k++) {
        
        divisions[k].display();
      }
    }


    function mousePressed()
    {
      if(gameState != "End")
      {
      turn++;
        particles=new Particle(mouseX,10,10,10)
      }
    }