var batalha = function (atk, def) {
	if (atk>def)
		return "Fist";
	else
		return "Second";
}

var person1 = {Name: 'Caio', Force: 0, Armor: 0, Resist: 0}, person2 = {Name: 'Gabriel', Force: 0, Armor: 0, Resist: 0}, life1, life2;

var destribuirPontos = function (){
   //Pessoa 1
   limite1 = 10;
   person1.Force = Math.ceil(Math.random() * 5);
   limite1 = limite1 - person1.Force;
   person1.Armor = Math.ceil(Math.random() * 5);
   limite1 = limite1 - person1.Armor;
   if(limite1 > 5)
       person1.Resist = Math.ceil(Math.random() * 5);
   else
       person1.Resist = Math.ceil(Math.random() * limite1);
   
   //Pessoa 2
   limite2 = 10;
   person2.Force = Math.ceil(Math.random() * 5);
   limite2 = limite2 - person2.Force;
   person2.Armor = Math.ceil(Math.random() * 5);
   limite2 = limite2 - person2.Armor;
   if(limite2 > 5)
       person2.Resist = Math.ceil(Math.random() * 5);
   else
       person2.Resist = Math.ceil(Math.random() * limite2);
   
   console.log(person1.Armor, person1.Force, person1.Resist);
   console.log(person2.Armor, person2.Force, person2.Resist);
}

var luta = function() {
   life1 = person1.Resist * 5;
   life2 = person2.Resist * 5;
   while (life1 > 0 && life2 > 0) {
       life2 = life2 - (person1.Force * Math.ceil(Math.random() * 6) - person2.Armor * Math.ceil(Math.random() * 6));
       if(life2 > 0)
           life1 = life1 - (person2.Force * Math.ceil(Math.random() * 6) - person1.Armor * Math.ceil(Math.random() * 6));
   }
   if(life1>0) {
       console.log("O primeiro ganhou");
       console.log("Vida: "+life1+", Força: "+person1.Force+", Armadura: "+person1.Armor+", Resistencia: "+person1.Resist+".");
       console.log("O segundo perdeu");
       console.log("Vida: "+life2+", Força: "+person2.Force+", Armadura: "+person2.Armor+", Resistencia: "+person2.Resist+".");
   }
   else {
       console.log("O segundo ganhou");
       console.log("Vida: "+life2+", Força: "+person2.Force+", Armadura: "+person2.Armor+", Resistencia: "+person2.Resist+".");
       console.log("O primeiro perdeu");
       console.log("Vida: "+life1+", Força: "+person1.Force+", Armadura: "+person1.Armor+", Resistencia: "+person1.Resist+".");
   }
}