class Form{
    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");

    }

    display(){
        
        var title = createElement("h3");
        title.html("Minimalitia");
        title.position(750,100);

        this.input.position()

    }
}