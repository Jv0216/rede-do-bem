// ======== Rede do Bem - Página ONGs ========

// Lista de ONGs (você pode adicionar mais livremente)
const ongs = [
  {
    nome: "EducaMais",
    cidade: "Rio de Janeiro",
    tipo: "educacao",
    descricao: "Promove acesso à educação e cursos gratuitos para jovens de baixa renda.",
    imagem: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60"
  },
  {
    nome: "Cuidar é Viver",
    cidade: "São Paulo",
    tipo: "saude",
    descricao: "Oferece atendimentos médicos e psicológicos voluntários em comunidades.",
    imagem: "https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSmX1Mj0HZmicIE4Rit17U-9NPGNCmLHZWGqba1mW3hhNmpy0dBNQltVRXOzSvVeKHP_pQ-E2tnMt2qrokjQG84HUGDmx7PHNNLFtB6oZzvpakgfGOvUBOEjlBBt02n9uXMwknhUz7JNaC5akh3fj-ESU2eTWwmg9GrE2Y6KZT2Z2WukC2kJE-NV4hhuNvLHPUc7BCHmnOrG5vKfvwUhTL1q4WlsocqAi6pDuFBvXP4TGWYbOVHjyNwmWKmsj9M2oAjzXhJkutZ5tt8GzeznBAuI40HImOkkCejUgubNluEy57TzKRLJD8Q6SyI8N9IanRfH2eCmCLuYafeykgWrggqu6jlcqVQ6YIyi7zr0OobbrKUphMzUVpirpfAi9OPQFYCeRgNH81twhnGVYyD6xB0leayrN-cqThrpzIsNoWAzC5x0v616fqhwXJ9EwF9dbKESEDDf0kUu1u4_Q98s7IvdDKWeb_I-JCegHYpeXPnnQA-tHo8YOVd_ketgtWJ5gIewmQRpXm0bFnIOHt6sckC0Xne0SF2YrW0Jkw46BvVUVsdwlAbwLXeKjyrXUJ1HN9Mk8_TkA0_x7XqISWTe34ksqSp13ZQKjrzRDW1qOYxqiExgysaulWtKawvQ2wlx1UA_khLhhE6xop9ej8HtNFkbdRtM-JxzJPjizb8gPwJ4aAHxWnzY8jElKwh4SUgayIPXCPahC8XjqYsnSNd7G0XYzzQ0WeeELLSHS30B4VihOymBRKbR_PMocxZipixT504NorMfHzfYj08Y32PHfZfxGvaVCV1RgpQ0Ivorh8r0J52p0o_miqTk609EtKuCo3U81o3f3YrleP9X1zfNarfV_uRt85qwcR9n4p8DiccdQm96dvlrGy7hHJ7hd47dLk9X3301WCmKul43b_t3n6IfgFGYIz3X1ppq6aAklXxCRI-B3REyo0OEkBKAIy54HWtSZmesI7mQvym8iSpp6-xc0Sby6eib6EM5tM1EffafB3WslfCHybBioaDrgoOTiovc_uGZXMnhb4YSGpEx0qXJTK88hjbXuB5uqd38zau0X833YJJk6AajtO9mhWwwQRfKF8HNS85etJVabRqJsOKz6oGcdEhtDT5ppHSY_UXJlnfbiENAcMvFPZExrVqNFPeFbrVKEMWmVvJvyiFfYuYGPgDOmts9xJ-5dMgFIBK7Oy7h6gsJ_z3KaSIoWdwT0ExJ3vvv7OH5H4-43sWhfQGN1sXgw-08uA7yqeQ=s1024-rj"
  },
  {
    nome: "Lar Esperança",
    cidade: "Belo Horizonte",
    tipo: "abrigo",
    descricao: "Abrigo para crianças em situação de vulnerabilidade social.",
    imagem: "https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSnUv2teLp1qCsv95CC6Y0Nfp-XqNvCTdoHDFbQhZcQMUJb6Qga4Rkno4egarhXFUkgIibpaJMzI-GvDSQckiDLp39WZaBTJs7dAHwM_SudTocMQTRflcOSmB71lnXVpgNC_4b3w_q-xbb__bjlVtNRIj-fKB1lucaVoAFpeZCIlrVUozJ1SjW17PnmNMXHG2ShjI9pCJsdIJBsWrKDhQd9Pq6smUUQ11k28haapMXpHa8yYINvMCFP6FzPDgeJgW0atGLHzT8IVMFnCzurERBv3VguEHw1WBI8Spcj_EVyFgqlvHM1CIn1WXKEXdl1REg3LODXcR1v6GgMn64w6hPY5JiyGz49ONxC1Pf8n2U9SumuY4yMu13U9A4eXnLzt3ivwtRmb663EdNJfo8MnhzeBaVXqALWtVkwcAC9_XJc8zUBPf7o7IBQttoPMoNRGGg7fFkF5kAVNxkCF0sui3fCJWM8flaFNE1Uk_BTHautqJ3I2SSyEVBVO0Hs-tsLISQGBXMrfyJYp8ceSNqex3XVev2OLLFyuiQ31UyfhQm-BpdBDPUmva1n6Bmm7lQ26oW1CXtmLdcky4LDkY174PrmHvbEj-lVtQkcaNsSq5pGTue44afwvb7PMfysB_on5lHgHE3JL-7y1N_wr9OHIJPggcqFbufcB73B8uqVDAR29VJ_Nz4ezz8RXmx5QGra509FJ2rp2zuZfP1HYBPXJIPJIIaabPdxs4nIDxmDSLf_mcDUnEgwSB95lYoPgf2YNU6Nf_BF8jeQt5YmeOHbv93yBXYT8eH2IP_GXEOAre9xatPaISnjauwpPKqZR8cmwYMsN0DZ6nckuv79pt8vW-Gs9KR-UXzWG4NNJuKV0fgugTBKFgER9Qiffn-GXuLvRukpiEYGAtK4Q7iWzHyRE77qX1J6qe7ZGF7BAs24xN4wxU3W2oJIiWiATA18gXIQMy8RxtSMYi_bdV1e9q1Y9ZgdBhLHgHVhKgG5ZQiq2mp78girov5q5WTqmDsmoteBjyySbjrFmk13USCuWtklnTjGSTvGiXLjh691onRA2SMU40TOQ5hioLsldhzxiHFZAqsd7owh_kQEsHHHqX7nyIpaHQ4etC7TPq8oFqb1oRhS3KqxA5jsC-Cnh2xrV5TXIje3mcXHyXeq1XjLg6ANh5xEbjbqILrLN26wAhYXiJyGk6x0HntWhnsNhc7geJTPS0SRYB2qR5k1PwsccJaic-BUP-L9ow40P3foh311l=s1024-rj"
  },
  {
    nome: "Mãos Amigas",
    cidade: "Fortaleza",
    tipo: "saude",
    descricao: "Campanhas de vacinação e ações de saúde preventiva em bairros carentes.",
    imagem: "https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSkMByifLHpn0Ed3TZcrgnKVUxqyRszQvyfn8dA7jVKxR9Df7O2fRwCfJIWF9wz0v52i2cO3gwHtee_4p0t_wYm50ZHjXSHVuxMoNOmeRcSWLDh5uZHxkjUMdtdyTHpxSBfxp1HYFa_TdOCMiYxljRDLxnfJ1VBaXeq5D9-zyw15Oqa1DaybyvPb1goZrNKPi2vvhHtVslDyzrh0sIQH-v0Tfy1JxmUZpvk_dKm7yEctps0zU5TwxathQPQpDx0geBRxB3vgFSLqjgc6wQ--z_DFhjCdnLDgZh1TMHvko2YKKHfsHma5ElAMjGyXjGGTxeqhqy_vLXWsD0WwobXddziWQ1bUKIH_GIGlCZl_lbD-Qwptcfh40iJsHTe2sq_QGrhAgjRUnrdW3yRyzx74Bf8FWMqpZYLc0M0k7wbsYfj-rYMIMyGXiLEooSb1-BNLkyUJ-4VUlegEZpmYg8X7P68VHGI2drZvEEaS8ov2zUQ5_ZEjZTRRgtvZPt8kJfJ-dYEKD10Y96zLVgUJdXZEk_YEhFXiA6wO90MT5ZYonQaRJnrJ2XavtKgLQItI6e_YxcENbDieufFeGpg5-iAANvt_nbZawICvt6QpY2HXy-8B2XdFSlPBdd9Dg_mC4YlK1EuwAazrlel9FmNl8tAecHYuJIOdeT6WXeRszUtzKLuz3Ofy8eXT_B6MdmmpWdiadSkWEl1_Iho3iXrNV97RJ-8FJG_3RZodoxg-3DtiCXPFkCpt6jPuOGETuWo36ip5Y5Hyb1mdwUSW5Pay8ptzyvd4PMRwkYJCMg04YtJM_kFdNvq0X7LMU88uhEXT4b5OWdGT_lWK6DrQfWQeCHgOvcPOhQKLJcjf0HwGrYmw7UZ8TMIOFX5fVJLKoe5NzimKHf_iOVaQyl4cR5XJLFLe_q2dXOu96p5tS-eGa_vs5woIusHHAz75lI_VmugT1ILZHUr3aXH7a2rGVErjmOEQSIDOZmLYLxC-sf61Ho_ZQClEYL9dDrmUbT03DB-dig5cklv838mGU0GGsqPrUdDQc3XmvO933FgXWvfW8Dj0_0iYlpv8DtNE5AWz-1HJ8aymYQL7O904y6iwp-bJurdD8_f8dsvrSoA1hkxM70BWg6CZekhTplgPucTa71YqAfiT1-zSaGDSIXckaiIxrRvEQ7kw1wrINuLfNyWnZgABF57OjbxlnFe5nfuHXEBv8EviY4qStGJ5arsdBxJ2ZSQWGjuR4Kgvm2bpSGZxXhWJ=s1024-rj"
  },
  {
    nome: "Futuro Brilhante",
    cidade: "Curitiba",
    tipo: "educacao",
    descricao: "Oferece reforço escolar e capacitação profissional para adolescentes.",
    imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
  },
  {
    nome: "Casa do Sol",
    cidade: "Recife",
    tipo: "abrigo",
    descricao: "Abrigo e reabilitação para pessoas em situação de rua.",
    imagem: "https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSnqbIneO9mlkbo-9htzfvrzVbxhDwdP2njwp_-I3bRoi64_CJb-p7HmniemrBsqUZlehPZpFd881znbgrfMSms-juoYGX2ls4t3r3i3CX_GBRZr3dvXqzJGRaSUlCj0dCLItELrLF-AjsoSuBgZtCzwww_G7FpWoUj6Uq7xYWYQutyyomosSc2JFO1hcB9HDnVpfhPbajvuekKJ1IsoMecE-6yKSgKq-el80e4XQ04QZ_nahI_ut_gPrhPUpgzMOj4_htwMN6jgu4PJ_DI0ngvB41W0T4PLLsQVMqj7nA4Sigh7Lgww5mTvY-KwWqbUfe0SqWa3ojQk6fv8ZDGG5EKruMstw1ia9bkOO5kTVef_AS42l289ZMrsxeukC1ctsQfxSm0kJC81rNIk2fBZkD1omx1q_qRFuqhb-obbozYFBsCmary4CJeU3nrmz5eQGtflTojUGJr9RkMT-A9i6rXCnyExJDVVM2oGeeEHxPPDBu9UD6Th2KwBSsd8b34M9RJtkWe3Yiu5vgfqV6z8hvKBp-Z0jkf-j3I74RyotgLD-7pLSekAlAYM8WNOcEbPFVt5RsjZbh31ilVr8tzhJMlcIwigb80PCSwuFSZNCYE3TDRLgSYAbFxftcbco0KLOZiflItAYcnH0tCSmaOwBJM7gLYIiUy43GqFVTnlIS-pVmdHXLmyqu78TToB39ji7KMAGTjKkuNK0pT-X-K-EKQFEnbaZvvhz6mIu4zSuyb18KY8d-zUQztJUaG7yhr5a_-nWrG1BqHXkPUOPXfOLBslj7SQhd-UNGhsUnruAd18n18xQOqDnaau-5QbYqCsnMKvHgFZcK8hfPnqaE0wD4yQ_M6YPmQECxF5EjcRtm284btUejH3vPsgi2wrnjtdPWJjKRoIpTMLjjOPb-QTxETIvfU03KQh76yGlfWvTHTDOi7DLRivrJezUU9rG5pEzCP_tD1RNPxu-mherSXQBgkNJ1RKwDTE1NumWFHb-SiNddJq_7yAJPhNoF6s-5CXVQSc9ULQucZekfPSFI0c0vontn214kEAnmkQlfnzICYpTv_hDpy7oHQScM8ej2KHTMkjrj4Lq9MYGeaDpjlSK-NA1yMWcZvm0olc-LWs8L3owvQoNVSzF3lSg-GdF_WNa9s6nGzCT71PnUxRM9sgrb1VyHVnJC_ZjSZKg32fcIzFZx-jkS6VI6lZz_-jvfpRLgRXA06kNR9_j8BzxjUqyxsTJqzIwetZWvOml9k=s1024-rj"
  }
];

// Seleciona os elementos
const ongsList = document.getElementById("ongsList");
const searchCity = document.getElementById("searchCity");
const filterType = document.getElementById("filterType");

// Função para renderizar os cards
function renderOngs(lista) {
  ongsList.innerHTML = "";

  if (lista.length === 0) {
    ongsList.innerHTML = "<p style='text-align:center; color:#64748b;'>Nenhuma ONG encontrada.</p>";
    return;
  }

  lista.forEach(ong => {
    const card = document.createElement("div");
    card.classList.add("ong-card");

    card.innerHTML = `
      <img src="${ong.imagem}" alt="${ong.nome}" class="ong-img">
      <div class="ong-info">
        <h3>${ong.nome}</h3>
        <p>${ong.descricao}</p>
        <div class="ong-tags">
          <span class="ong-tag">${ong.cidade}</span>
          <span class="ong-tag">${ong.tipo.charAt(0).toUpperCase() + ong.tipo.slice(1)}</span>
        </div>
      </div>
    `;

    ongsList.appendChild(card);
  });
}

// Função de filtro
function filtrarOngs() {
  const cidade = searchCity.value.toLowerCase();
  const tipo = filterType.value;

  const filtradas = ongs.filter(ong => {
    const matchCidade = ong.cidade.toLowerCase().includes(cidade);
    const matchTipo = tipo === "all" || ong.tipo === tipo;
    return matchCidade && matchTipo;
  });

  renderOngs(filtradas);
}

// Eventos
searchCity.addEventListener("input", filtrarOngs);
filterType.addEventListener("change", filtrarOngs);

// Inicializa a página
renderOngs(ongs);
