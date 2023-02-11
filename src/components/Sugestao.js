import { Usuario } from "./Usuario"

export const Sugestao = () => {
  const perfilSugerido = [
    { src: "assets/bad.vibes.memes.svg", user: "bad.vibes.memes", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/chibirdart.svg", user: "chibirdart", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/razoesparaacreditar.svg", user: "razoesparaacreditar", razao: "Novo no Instagram", seguir: "Seguir" },
    { src: "assets/adorable_animals.svg", user: "adorable_animals", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/smallcutecats.svg", user: "smallcutecats", razao: "Segue você", seguir: "Seguir" }
  ]

  return (
    <>
      {perfilSugerido.map(item =>
        <div class="sugestao">
          <Usuario>
            <img src={item.src} alt={item.user} />
            <div class="texto">
              <div class="nome">{item.user}</div>
              <div class="razao">{item.razao}</div>
            </div>
          </Usuario>
          <div class="seguir">{item.seguir}</div>
        </div>
      )}
    </>
  )
}