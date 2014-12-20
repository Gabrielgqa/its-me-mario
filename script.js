var batalha = function (atk, def) {
	if (atk>def)
		return "Fist";
	else
		return "Second";
}

//var person1, person2;
    var form = document.querySelector('#form-criar');
    form.addEventListener('submit', function (event) {
        //Estrutura Personagem
        var person = {Name:"", Force: 0, Armor: 0, Resist: 0, Life: 0};
        //Limite de atributos
        limit = 10;
        event.preventDefault();
        //g-NAME
        var name = document.querySelector("#idname").value;
        person.Name = name;
        //g-FORCE 
        var force = parseInt(document.querySelector("#idforce").value);
        if(force > 5 || force < 0) {
            var pforce = document.querySelector(".error-force");
            txtforce = document.createTextNode('O valor deve estar entre 0 e 5');
            pforce.appendChild(txtforce);
        } else {
            limit -= force;
            person.Force = force;
        }
        //g-ARMOR
        var armor = parseInt(document.querySelector("#idarmor").value);
        if(armor > 5 || armor < 0) {
            var parmor = document.querySelector(".error-armor");
            txtarmor = document.createTextNode('O valor deve estar entre 0 e 5');
            parmor.appendChild(txtarmor);
        } else {
            limit -= armor;
            person.Armor = armor;
        }
        //g-RESIST
        var resist = parseInt(document.querySelector("#idresist").value);
        if(resist > 5 || resist < 0) {
            var presist = document.querySelector(".error-resist");
            txtresist = document.createTextNode('O valor deve estar entre 0 e 5');
            presist.appendChild(txtresist);
        } else {
            limit -= resist;
            person.Resist = resist;
        }
        //g-LIMITE
        if(limit < 0) {
            var plimit = document.querySelector(".error-limit");
            txtlimit = document.createTextNode('A soma dos atributos deve estar entre 0 e 10');
            plimit.appendChild(txtlimit);
        }
        CriarTemplate(person);
});

var CriarTemplate = function(person) {
    var card = document.querySelector('.card');
        node = document.createElement('div');
        template = '<ul><li>Nome:'+person.Name+'</li><li>Força:'+person.Force+'</li><li>Armadura:'+person.Armor+'</li><li>Resistência:'+person.Resist+'</li></ul>';
        card.innerHTML = template;
}

var CriarPersonagem = function (name){
    var person = {Name: name, Force: 0, Armor: 0, Resist: 0, Life: 0};
    
    limite = 10;
    person.Force = Math.ceil(Math.random() * 5);
    limite -= person.Force;
    person.Armor = Math.ceil(Math.random() * 5);
    limite -= person.Armor;
    if(limite > 5)
        person.Resist = Math.ceil(Math.random() * 5);
    else
        person.Resist = Math.ceil(Math.random() * limite);
    
    person.Life = person.Resist * 5;
    CriarCard(person);
    return person;
}

var CriarCard = function(person){
    var card = document.querySelector('.card');
        node = document.createElement('div');
        text = document.createTextNode('Nome: '+person.Name+'; Forca: '+person.Force+'; Armadura: '+person.Armor+'; Resistencia: '+person.Resist);      
        card.appendChild(node);
        node.appendChild(text);
}

//person1 = CriarPersonagem('Caio');
//person2 = CriarPersonagem('Gabriel');

var button = document.querySelector('.btn-attack');
    button.addEventListener('click', function () {
        attack();
});

var attack = function(){
    console.log(person2.Life);
    if(person1.Force > person2.Armor) {
        attack1 = person1.Force*Math.ceil(Math.random()*6) - person2.Armor*Math.ceil(Math.random()*6);
        person2.Life -= attack1;
    } 
    console.log(person2.Life);
    counterAttack();
}
var counterAttack = function() {
        if(person2.Life > 0) {
            if(person2.Force > person1.Armor) {
                attack2 = person2.Force*Math.ceil(Math.random()*6) - person1.Armor*Math.ceil(Math.random()*6);
                person1.Life -= attack2;
            }
        }
        console.log(person1.Life);
}

var luta = function(person1, person2) {
    while (person1.Life > 0 && person2.Life > 0) {
        person2.Life -= (person1.Force * Math.ceil(Math.random() * 6) - person2.Armor * Math.ceil(Math.random() * 6));
        if(person2.Life > 0)
            person1.Life -= (person2.Force * Math.ceil(Math.random() * 6) - person1.Armor * Math.ceil(Math.random() * 6));
    }
    if(person1.Life>0) {
        console.log(person1.Name+" ganhou!");
        console.log("Vida: "+person1.Life+", Força: "+person1.Force+", Armadura: "+person1.Armor+", Resistencia: "+person1.Resist+".");
        console.log(person2.Name+" perdeu!");
        console.log("Vida: "+person2.Life+", Força: "+person2.Force+", Armadura: "+person2.Armor+", Resistencia: "+person2.Resist+".");
    }
    else {
        console.log(person2.Name+" ganhou!");
        console.log("Vida: "+person2.Life+", Força: "+person2.Force+", Armadura: "+person2.Armor+", Resistencia: "+person2.Resist+".");
        console.log(person1.Name+" perdeu!");
        console.log("Vida: "+person1.Life+", Força: "+person1.Force+", Armadura: "+person1.Armor+", Resistencia: "+person1.Resist+".");
    }
}

luta(person1, person2);