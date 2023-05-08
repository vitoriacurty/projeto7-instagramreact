import { useState } from "react"

export default function User(props) {
  const [nome, setNome] = useState("catanacomics")
  const [foto, setFoto] = useState("assets/img/catanacomics.svg")

  function trocaNome(){
    const novoNome = prompt("Digite um novo nome de usuário")
    if (novoNome !== undefined && novoNome !== null && novoNome!== ""){
      setNome(novoNome)
    }
  }

  function trocaFoto(){
    const novaFoto = prompt("Insira a URL da imagem")
    if (novaFoto !== undefined && novaFoto !== null && novaFoto !== ""){
      setFoto(novaFoto)
    }
  }

  return (
    <>
      <div class="usuario">
        <img data-test="profile-image" onClick={trocaFoto} src={foto} alt="imagem de perfil" />
        <div class="texto">
          <span data-test="name">
            <strong>{nome}</strong>
            <ion-icon data-test="edit-name" onClick={trocaNome} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    </>
  )
}