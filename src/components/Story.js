import { Usuario } from "./Usuario";

export const Story = (props) => {
  return (
    <>
      <div class="story">
        <div class="imagem">
          <img src={props.src} alt={props.usuario} />
        </div>
        <Usuario>{props.usuario}</Usuario>
      </div>
    </>
  )
}
