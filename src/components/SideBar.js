import { Sugestoes } from "./Sugestoes";
import { Usuario } from "./Usuario";

export const SideBar = () => {
  return (
    <>
      <div class="sidebar">
        <Usuario>
          <img src="assets/catanacomics.svg" alt="imagem de perfil" />
          <div class="texto">
            <span>
              <strong>catanacomics</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </Usuario>

        <Sugestoes />

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </>
  )
}