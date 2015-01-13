function Atacar(id_audio) {
    var arquivo = document.getElementById(id_audio);
    arquivo.play();
}

function CriarPersonagem() {
	var personagem = {Forca: 0, Armadura: 0, Resistencia: 0, Vida: 0};
	var ex = 1;
	personagem.Forca = document.querySelector("#idforca").value;
	personagem.Armadura = document.querySelector("#idarmadura").value;
	personagem.Resistencia = document.querySelector("#idresistencia").value;
	personagem.Vida = 50 * ex;

	AtributosPersonagem(personagem);
}

function AtributosPersonagem(personagem) {
	var vlf = document.querySelector('.vlforca');
    var vla = document.querySelector('.vlarmadura');
    var vlr = document.querySelector('.vlresistencia');
    vlf.innerHTML = personagem.Forca;
    vla.innerHTML = personagem.Armadura;
    vlr.innerHTML = personagem.Resistencia;
}