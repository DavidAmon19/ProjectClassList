class Digimon {
    constructor(id, nome, imagem, descricao) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
    }
}

let evolutions = [
    new Digimon(1, 'Guilmon', 'https://img.mypcards.com/img/9/1711/digimon_ex2_008/digimon_ex2_008_en.jpg', 'Rookie,Reptile'),
    new Digimon(2, 'Growlmon', 'https://img.mypcards.com/img/9/1806/digimon_bt12_010/digimon_bt12_010_en.jpg', 'Champion, Virus, Dark Dragon'),
    new Digimon(3, 'WarGrowlmon', 'https://repositorio.sbrauble.com/arquivos/in/digimon/1/6453af5931b24-w1zye-2l0pj-4df43aa68d69dd36bfdbdb69cfbeec89.jpg', 'Ultimate, Virus, Cyborg'),
    new Digimon(4, 'Gallantmon', 'https://repositorio.sbrauble.com/arquivos/in/digimon/35/64c8e52dc3627-m1psx-zmjt9-279b56eaf40b44da6cbb9a49292d478f.jpg', 'Mega, Virus, Royal Knight')
];


evolutions.map((digimon)=>{
    conteudo.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
        <img src="${digimon.imagem}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${digimon.nome}</h5>
        <p class="card-text">${digimon.descricao}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `
})


// Filtrar digimons que possuem "Virus" em sua descrição
const digVirus = evolutions.filter((digitais)=>{

    return digitais.descricao.includes("Virus");
})

console.log(digVirus)

// Encontrar o digimon com nome "Growlmon"
const growlmon = evolutions.find(digimon => digimon.nome === "Growlmon");
console.log(growlmon)

// Calcular o total de caracteres nas descrições de todos os digimons
const totalCaracteres = evolutions.reduce((total, digimon) => total + digimon.descricao.length, 0);
console.log(totalCaracteres)

// Verificar se há algum digimon com "Cyborg" em sua descrição
const hasCyborg = evolutions.some(digimon => digimon.descricao.includes("Cyborg"));
console.log(hasCyborg)

// Verificar se todos os digimons possuem "Virus" em sua descrição
const allVirus = evolutions.every(digimon => digimon.descricao.includes("Virus"));
console.log(allVirus)

// Ordenar os digimons por nome em ordem alfabética
const sortedDigimons = evolutions.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(sortedDigimons);