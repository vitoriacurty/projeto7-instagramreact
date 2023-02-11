import { Usuario } from "./Usuario";

export default function Story() {
  return (
    <>
      <div class="story">
        <div class="imagem">
          <img src="assets/9gag.svg" alt="9gag" />
        </div>
        <Usuario>9gag</Usuario>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/meowed.svg" alt="meowed" />
        </div>
        <Usuario>meowed</Usuario>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/barked.svg" alt="barked" />
        </div>
        <Usuario>barked</Usuario>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/nathanwpylestrangeplanet.svg" alt="nathanwpylestrangeplanet" />
        </div>
        <Usuario>nathanwpylestrangeplanet</Usuario>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/wawawicomics.svg" alt="wawawicomics" />
        </div>
        <Usuario>wawawicomics</Usuario>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/respondeai.svg" alt="respondeai" />
        </div>
        <Usuario>respondeai</Usuario>

      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/filomoderna.svg" alt="filomoderna" />
        </div>
        <Usuario>filomoderna</Usuario>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/memeriagourmet.svg" alt="memeriagourmet" />
        </div>
        <Usuario>memeriagourmet</Usuario>
      </div>
      <Setinha />

    </>
  )
}

export function Setinha() {
  return (
    <>
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
      <Usuario>barked</Usuario>
    </>
  )
}