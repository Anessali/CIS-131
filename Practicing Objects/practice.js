const player = {
    name: "Shiro",
    health: 120,
    maxHealth: 120,
    hair: "perfect.",
    exp: 0,
    level(){
        if (player.exp < 200){
            return 1; 
        }
        if(this.exp >= 200){
            return 2;
        }
    },
    description(){
        return `${this.name} has ${this.health}/${this.maxHealth} health. He is level ${this.level()}. His hair is ${this.hair}`;
    }
};

console.log(player.description());
console.log(`While walking, ${player.name} stubs his toe on a rock. -20 Health!`);
player.health -= 20;
console.log(player.description());
console.log(`The wind decides it hates him and bears down on the poor lad, smacking him in the head with enough force to knock him on his face. There's a crunch as his nose hits cement. -30 health!`);
player.health -= 30;
player.hair = 'completely ruined...';
console.log("Because of his recent experiences, he gains 200 exp!");
player.exp += 200;
console.log(player.description());

if ((player.health < player.maxHealth) || (player.hair != "perfect.")){
    console.log("When Shiro limps into his interview, the hiring manager has the same look you'd have if I walked up and took a bite out of your sandwich. Shiro doesn't get the job.");
} else {
    console.log("Shiro passes his interview and gets a shiny new job. To celebrate, he buys his friends icecream.");
}