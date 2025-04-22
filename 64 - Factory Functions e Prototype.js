function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        falar() {
            console.log(`${this.nome} está falando`)
        },

        comer() {
            console.log(`${this.nome} está comendo`)
        },

        beber() {
            console.log(`${this.nome} está bebendo`)
        }

    }
}

const p1 = criaPessoa('Luiz', 'Roberto');
p1.falar()
p1.comer()
p1.beber()

// Com protype:

function criaPessoa2(nome, sobrenome) {
    const pessoa2Prototype = {
        falar() {
            console.log(`${this.nome} está falando`)
        },

        comer() {
            console.log(`${this.nome} está comendo`)
        },

        beber() {
            console.log(`${this.nome} está bebendo`)
        }
    }
    return Object.create(pessoa2Prototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p2 = criaPessoa2 ('Maria', 'Joan');
p2.falar()