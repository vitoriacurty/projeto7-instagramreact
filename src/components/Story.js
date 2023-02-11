import { Usuario } from "./Usuario";

export function Story() {
  const stories = [
    { src: "assets/9gag.svg", usuario: "9gag" },
    { src: "assets/meowed.svg", usuario: "meowed" },
    { src: "assets/barked.svg", usuario: "barked" },
    { src: "assets/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
    { src: "assets/wawawicomics.svg", usuario: "wawawicomics" },
    { src: "assets/respondeai.svg", usuario: "respondeai" },
    { src: "assets/filomoderna.svg", usuario: "filomoderna" },
    { src: "assets/memeriagourmet.svg", usuario: "memeriagourmet" }
  ]

  return (
    <>
      {stories.map(item => 
        <div class="story">
          <div class="imagem">
            <img src={item.src} alt={item.usuario} />
          </div>
          <Usuario>{item.usuario}</Usuario>
        </div>
      )}
    </>
  )
}
