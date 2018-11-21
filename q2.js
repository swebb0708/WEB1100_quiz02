class Task{
    constructor(owner, description){
        this.owner = owner;
        this.description = description;
        this.completed = false; 
        this.date = `${new Date().getMonth()+1} / ${new Date().getDate()} / ${new Date().getFullYear()}`;
    }

    done(){
     return (this.completed) ? false : true
    }
}

