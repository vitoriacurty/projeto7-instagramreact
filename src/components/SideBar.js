import { Sugestoes } from "./Sugestoes";
import { Usuario } from "./Usuario";
import { useState } from "react"

export const SideBar = () => {
  const [name, setName] = useState("catanacomics")
  const [photo, setPhoto] = useState("assets/catanacomics.svg")

  const user = [{ alt: "imagem de perfil" }]
  const copyright = "© 2021 INSTAGRAM DO FACEBOOK"
  const links = "Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"

  const editUserName = () => {
    const newName = prompt("Escolha um novo nome de usuário: ")
    setName(!newName ? name : newName)
  }

  const editPhoto = () => {
    const newPhoto = prompt("Insira o link da sua foto: ")
    setPhoto(!newPhoto ? photo : newPhoto)
  }

  return (
    <>
      <div class="sidebar">
        {user.map(item =>
          <Usuario>
            <img src={photo} alt={item.alt} onClick={editPhoto}/>
            <div class="texto">
              <span>
                <strong>{name}</strong>
                <ion-icon name="pencil" onClick={editUserName}></ion-icon>
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
