var experiencia = 1;
var personagem = {Forca: 0, Armadura: 0, Resistencia: 0, Vida: 0};
var inimigo = {Forca: 0, Armadura: 0, Resistencia: 0, Vida: 0};

function CriarPersonagem() {
	personagem.Forca = document.querySelector("#idforca").value;
	personagem.Armadura = document.querySelector("#idarmadura").value;
	personagem.Resistencia = document.querySelector("#idresistencia").value;
	personagem.Vida = personagem.Resistencia * 5;
    var totalVida = personagem.Vida;
	AtributosPersonagem(personagem);
    CriarInimigo(experiencia);
}

function AtributosPersonagem(personagem) {
    var vlf = document.querySelector('.vlforca');
    var vla = document.querySelector('.vlarmadura');
    var vlr = document.querySelector('.vlresistencia');
    var vlv = document.querySelector('.vlvida');
    vlf.innerHTML = personagem.Forca;
    vla.innerHTML = personagem.Armadura;
    vlr.innerHTML = personagem.Resistencia;
    vlv.innerHTML = 'HP: '+personagem.Vida+'/'+(personagem.Resistencia * 5);
}

function CriarInimigo(experiencia) {
    inimigo.Forca = Math.ceil(Math.random() * 5) * experiencia;
    inimigo.Armadura = Math.ceil(Math.random() * 5) * experiencia;
    inimigo.Resistencia = Math.ceil(Math.random() * 5) * experiencia;
    inimigo.Vida = inimigo.Resistencia * 5;
    //Fase 1
    switch(experiencia){
        case 1:
            document.getElementById("img-i").src = "../img/characters/monsters/fase1/mf1.png";
            AtributosInimigo(inimigo);
            break;
    }
}

function AtributosInimigo(inimigo) {
    var vlfi = document.querySelector('.vlforca-inimigo');
    var vlai = document.querySelector('.vlarmadura-inimigo');
    var vlri = document.querySelector('.vlresistencia-inimigo');
    var vlvi = document.querySelector('.vlvida-inimigo');
    vlfi.innerHTML = inimigo.Forca;
    vlai.innerHTML = inimigo.Armadura;
    vlri.innerHTML = inimigo.Resistencia;
    vlvi.innerHTML = 'HP: '+inimigo.Vida+'/'+(inimigo.Resistencia * 5);
}

function Atacar(id_audio) {
    //ANIMAÇÃO ATAQUE
    document.getElementById("img-m").src = "../img/characters/Mario/mario-atacar.png";
    setTimeout(function() {document.getElementById("img-m").src = "../img/characters/Mario/mario-inicio.png";},1000);
    //SOM ATAQUE
    var arquivo = document.getElementById(id_audio);
    arquivo.play();
    //ANIMAÇÃO DANO
    document.getElementById("img-i").style.display = "none";
    setTimeout(function() {document.getElementById("img-i").style.display = "inline";},300);
    //DANO ATAQUE
    var dano = personagem.Forca*Math.ceil(Math.random()*6) - inimigo.Armadura*Math.ceil(Math.random()*6);
    if (dano > 0)
        inimigo.Vida -= dano;
    AtributosInimigo(inimigo);
    setTimeout(function() {ContraAtaque();},4000);
}

function ContraAtaque() {
    //ANIMAÇÃO DANO
    document.getElementById("img-m").style.display = "none";
    setTimeout(function() {document.getElementById("img-m").style.display = "inline";},300);
    var dano = inimigo.Forca*Math.ceil(Math.random()*6) - personagem.Armadura*Math.ceil(Math.random()*6);
    if (dano > 0)
        personagem.Vida -= dano;
    else
        StatusPersonagem();
    AtributosPersonagem(personagem);
}

function StatusPersonagem() {
    erro = document.querySelector('.stsp-txt');
    erro.style.display = "inline";
    setTimeout(function() {erro.style.display = "none";},800);
}