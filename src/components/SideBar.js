import { Sugestoes } from "./Sugestoes";
import { Usuario } from "./Usuario";

export const SideBar = () => {
  const user = [{ src: "assets/catanacomics.svg", alt: "imagem de perfil", user: "catanacomics" }]
  const copyright = "© 2021 INSTAGRAM DO FACEBOOK"
  const links = "Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"

  return (
    <>
      <div class="sidebar">
        {user.map(item =>
          <Usuario>
            <img src={item.src} alt={item.alt} />
            <div class="texto">
              <span>
                <strong>{item.user}</strong>
                <ion-icon name="pencil"></ion-icon>
              </span>
            </div>
          </Usuario>
        )}

        <Sugestoes />

        <div class="links">
          {links}
        </div>

        <div class="copyright">
          {copyright}
        </div>
      </div>
    </>
  )
}