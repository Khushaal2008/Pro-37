class Form {

    constructor() {
      this.input = createInput("Enter Your Name Here..");
      this.button = createButton('Submit');
      this.input2 = createInput("Enter Your Answer No...");
      this.title = createElement('h2')
    }
   hide(){
    
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.input2.hide();
    }
  
    display(){

     this.title.html("My Quiz Game");
      this.title.position(410.5, 0);

      var title = createElement('h2')
      title.html("My Quiz Game");
      title.position(410.5, 0);

      var question = createElement('h2')
      question.html("If 1=3 , 2=3 ,3=5 , 4=4 , 5=4 , then what is 6 = ?")
      question.position(200,50)

      var option1 = createElement('h3')
      option1.html("1: 6")
      option1.position(100,100)

      var option2 = createElement('h3')
      option2.html("2: 3")
      option2.position(100,140)

      var option3 = createElement('h3')
      option3.html("3: 100")
      option3.position(100,180)
  
      var option4 = createElement('h3')
      option4.html("4: 10")
      option4.position(100,220)

      this.input.position(130, 300);
      this.button.position(350, 350);
      this.input2.position(450, 300);


      this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.input2.hide();

        contestant.name = this.input.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      
      });
  
    }
  }
  