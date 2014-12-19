var batalha = function (atk, def) {
	if (atk>def)
		return "Fist";
	else
		return "Second";
}

var person1 = {Force:3, Armor:2, Resist:1}, person2 = {Force:4, Armor:2, Resist: 3}, life1, life2, random;
var luta = function() {
   life1 = person1.Resist * 5;
   life2 = person2.Resist * 5;
   random = Math.ceil(Math.random * 6);
   while (life1 > 0 & life2 > 0) {
       life2 = life2 - (person1.Force * random - person2.Armor * random);
       if(life2 > 0)
           life1 = life1 - (person2.Force * random - person1.Armor * random);
   }
   if(life1>0) {
       console.log("O primeiro ganhou");
       console.log("Vida: "+life1+", Força: "+person1.Force+", Armadura: "+person1.Armor+", Resistencia: "+person1.Resist+".");
   }
   else {
       console.log("O segundo ganhou");
       console.log("Vida: "+life2+", Força: "+person2.Force+", Armadura: "+person2.Armor+", Resistencia: "+person2.Resist+".");
   }
}