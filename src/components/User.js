export default function User(props) {
  return (
    <>
      <div class="usuario">
        <img src={props.imagem} alt="imagem de perfil" />
        <div class="texto">
          <span>
            <strong>{props.usuario}</strong>
            <ion-icon name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    </>
  )
}