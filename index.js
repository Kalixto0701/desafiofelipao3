class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
        switch (this.tipo){
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes maciais'
                break;
            case 'ninja':
                ataque = 'shuriken'
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
const hero = new heroi('Merlin', 115, 'mago')
hero.atacar();
const hero2 = new heroi('Kratos', 29, 'guerreiro');
hero2.atacar();
const hero3 = new heroi('Punho de Ferro', 25, 'monge');
hero3.atacar();
const hero4 = new heroi('Naruto', 17, "ninja");
hero4.atacar();
