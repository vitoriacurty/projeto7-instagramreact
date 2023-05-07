export default function Suggestions() {
  const sugestoes = [
    { usuario: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg", razao: "Segue você" },
    { usuario: "chibirdart", imagem: "assets/img/chibirdart.svg", razao: "Segue você" },
    { usuario: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram" },
    { usuario: "adorable_animals", imagem: "assets/img/adorable_animals.svg", razao: "Segue você" },
    { usuario: "smallcutecats", imagem: "assets/img/smallcutecats.svg", razao: "Segue você" },
  ]
  return (
    <>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestoes.map((s) => (
          <Sugestao
            key={s.usuario}
            usuario={s.usuario}
            razao={s.razao}
            imagem={s.imagem}
          />))}

      </div>
    </>
  )
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} alt={props.usuario} />
        <div class="texto">
          <div class="nome">{props.usuario}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}