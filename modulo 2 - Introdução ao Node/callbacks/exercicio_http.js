function adicionarHttp(url) {
  let stringConcatenada = "http://" + url;
  return stringConcatenada;
}

function processar(sites, adicionarHttp) {
  let sitesComHttp = [];
  for (let indice = 0; indice < sites.length; indice++) {
    let siteComHttp = adicionarHttp(sites[indice]);
    sitesComHttp.push(siteComHttp);
  }
  return sitesComHttp;
}

let listaSites = ["www.google.com", "facebook.com"];
processar(listaSites, adicionarHttp);

function adicionarHttp(url) {
  let stringConcatenada = "http://" + url;
  return stringConcatenada;
}

function processar(sites, adicionarHttp) {
  let sitesComHttp = sites.map(function (site) {
    let siteComHttp = adicionarHttp(site);
    return siteComHttp;
  })
  return sitesComHttp;
}

let listaSites = ["www.google.com", "facebook.com"];
let sitesComHttp = processar(listaSites, adicionarHttp);
console.log(sitesComHttp);