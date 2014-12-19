var batalha = function (atk, def) {
	if (atk>def)
		return "Fist";
	else
		return "Second";
}

var person1, person2, life1, life2;

var distribuirPontos = function (name){
    var person = {Name: name, Force: 0, Armor: 0, Resist: 0};
    
    limite1 = 10;
    person.Force = Math.ceil(Math.random() * 5);
    limite1 -= person.Force;
    person.Armor = Math.ceil(Math.random() * 5);
    limite1 -= person.Armor;
    if(limite1 > 5)
        person.Resist = Math.ceil(Math.random() * 5);
    else
        person.Resist = Math.ceil(Math.random() * limite1);

    return person;
}

person1 = distribuirPontos('Caio');
person2 = distribuirPontos('Gabriel');

var luta = function(person1, person2) {
    life1 = person1.Resist * 5;
    life2 = person2.Resist * 5;
    while (life1 > 0 && life2 > 0) {
        life2 = life2 - (person1.Force * Math.ceil(Math.random() * 6) - person2.Armor * Math.ceil(Math.random() * 6));
        if(life2 > 0)
            life1 = life1 - (person2.Force * Math.ceil(Math.random() * 6) - person1.Armor * Math.ceil(Math.random() * 6));
    }
    if(life1>0) {
        life2 = 0;
        console.log(person1.Name+" ganhou!");
        console.log("Vida: "+life1+", Força: "+person1.Force+", Armadura: "+person1.Armor+", Resistencia: "+person1.Resist+".");
        console.log(person2.Name+" perdeu!");
        console.log("Vida: "+life2+", Força: "+person2.Force+", Armadura: "+person2.Armor+", Resistencia: "+person2.Resist+".");
    }
    else {
        life1 = 0;
        console.log(person2.Name+" ganhou!");
        console.log("Vida: "+life2+", Força: "+person2.Force+", Armadura: "+person2.Armor+", Resistencia: "+person2.Resist+".");
        console.log(person1.Name+" perdeu!");
        console.log("Vida: "+life1+", Força: "+person1.Force+", Armadura: "+person1.Armor+", Resistencia: "+person1.Resist+".");
    }
}

luta(person1, person2); 