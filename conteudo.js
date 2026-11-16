// ============================================================
// CONTEÚDO DO SITE - é aqui (ou no admin.html) que actualiza tudo
// ============================================================
// tipo:   "musica" ou "video"
// fonte:  "local"   -> ficheiro dentro da pasta media/ (ex: "media/minha-musica.mp3")
//         "youtube" -> coloque apenas o ID do vídeo (ex: "dQw4w9WgXcQ")
// data:   data de lançamento AAAA-MM-DD. Se for futura, aparece "Em breve" e fica bloqueado até esse dia.
// capa:   imagem opcional (ex: "media/capa1.jpg"). Se vazio, usa um fundo de cor.

window.SITE = {
  nome: "Minha Plataforma",
  slogan: "Novos lançamentos de música e vídeo. Só para ouvir e assistir online.",
  contactos: "contacto@exemplo.com",
  itens: [
    {
      id: "1",
      tipo: "musica",
      titulo: "Primeira Música",
      artista: "Nome do Artista",
      descricao: "Single de estreia.",
      capa: "media/capa1.jpg",
      fonte: "local",
      ficheiro: "media/musica1.mp3",
      data: "2026-11-01"
    },
    {
      id: "2",
      tipo: "video",
      titulo: "Primeiro Videoclipe",
      artista: "Nome do Artista",
      descricao: "Videoclipe oficial.",
      capa: "",
      fonte: "youtube",
      ficheiro: "dQw4w9WgXcQ",
      data: "2026-11-10"
    },
    {
      id: "3",
      tipo: "musica",
      titulo: "Próximo Lançamento",
      artista: "Nome do Artista",
      descricao: "Disponível na data de lançamento.",
      capa: "",
      fonte: "local",
      ficheiro: "media/musica2.mp3",
      data: "2027-01-15"
    }
  ]
};
