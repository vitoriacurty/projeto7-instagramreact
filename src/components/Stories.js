import { Story } from "./Story"

export const Stories = () => {
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
    <div class="stories">
      {stories.map(item =>
        <Story
          key={item.usuario}
          src={item.src}
          alt={item.usuario}
          usuario={item.usuario}
        />
      )}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}