document.addEventListener('DOMContentLoaded', function () {  //eventlist contendo uma função (com parâmetros vazios até então) como parâmetro após o 'DOMContentLoader, isto é após o documento ser carrecado. 
    const API_URL = 'https://rickandmortyapi.com/api/character/'; // por boa prática, coloquei a url da API numa const já que ela não será alterada.
    const API_HEADER = { // da mesma forma os headers, já que també não sofrerão alteração.
      Accept: 'application/json',
      "Content-Type": 'application/json'
    }

    let containers = document.querySelectorAll('.container'); // a variável containers  recebe document.querySelectorAll passando .container como parametro, dessa forma ele vai buscar no html tudo que se encaixar no parâmetro passado;
    containers.forEach(function (container) {// usei o foreach para iterar e preencher os elementos que estão no meu container passado como parametro na função;
      let characterID = Math.floor(Math.random() * 671); // criei a variavel characterID e atribui a ela a função random para randomizar o numero de personagens (671);
      fetch(API_URL + characterID, { headers: { API_HEADER } }) // no meu fetch, chamei a const criada para a url da api e concatenei com a variavel characterID, nos headers chamei a const criada para os mesmos.
        .then((response) => response.json())
        .then(({ image, name, status, species }) => { // meu then está retornando do json a imagem e o nome;
  
          let imageElement = container.querySelector('img'); // variavel p/ elemento de imagem (imagem do personagem) criada recebendo o querySelector passando 'img' como parametro.
          imageElement.src = image; // aqui eu setei o src da minha imagem e atribui a ela o valor image que é o parametro que retorna a imagem da api.
          imageElement.alt = `Personagem: ${name}`; // da mesma forma aqui só passei no alt o nome do personagem, formatado no ${name} para concatenar com a palavra personagem.
  
          let nameElement = container.querySelector('p'); // variavel p/ elemento de texto (nome do personagem) criada recebendo o querySelector passando 'p' como parametro.
          nameElement.innerText = name; // aqui utilizei o innerText para conseguir alterar a minha tag p passada como parametro, substituindoa pelo valor atribuido que foi o name (nome vindo da api);
  
          let statusElement = container.querySelector('#status'); //adicionei tbm os campos status e espécie 
          statusElement.innerText = `Status : ${status}`;

          let speciesElement = container.querySelector('#especie')
          speciesElement.innerText = `Species : ${species}`
        })
    })
  
  });

