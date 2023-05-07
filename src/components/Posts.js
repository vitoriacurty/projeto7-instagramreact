import { useState } from "react"

export default function Posts() {
  const posts = [
    {
      id: 1,
      usuario: "meowed",
      imgPerfil: "assets/img/meowed.svg",
      imgConteudo: "assets/img/gato-telefone.svg",
      imgCurtidas: "assets/img/respondeai.svg",
      txtCurtidas: "respondeai",
      likes: 101.523,
    },
    {
      id: 2,
      usuario: "barked",
      imgPerfil: "assets/img/barked.svg",
      imgConteudo: "assets/img/dog.svg",
      imgCurtidas: "assets/img/adorable_animals.svg",
      txtCurtidas: "adorable_animals",
      likes: 99.159,
    },
    {
      id: 3,
      usuario: "meowed",
      imgPerfil: "assets/img/meowed.svg",
      imgConteudo: "assets/img/gato-telefone.svg",
      imgCurtidas: "assets/img/respondeai.svg",
      txtCurtidas: "respondeai",
      likes: 101.523,
    }
  ]
  return (
    <>
      <div class="posts">
        {posts.map((p) => (
          <Post
            key={p.id}
            usuario={p.usuario}
            imgPerfil={p.imgPerfil}
            imgConteudo={p.imgConteudo}
            imgCurtidas={p.imgCurtidas}
            txtCurtidas={p.txtCurtidas}
            likes={p.likes}
          />
        ))}
      </div>
    </>
  )
}

function Post(props) {
  const [salvarPost, setSalvarPost] = useState("bookmark-outline")

  function salvaPost() {
    setSalvarPost(salvarPost === "bookmark-outline" ? "bookmark" : "bookmark-outline")
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgPerfil} alt={props.usuario} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgConteudo} alt="gato-telefone" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={salvaPost} name={salvarPost}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgCurtidas} alt={props.txtCurtidas} />
          <div class="texto">
            Curtido por <strong>{props.txtCurtidas}</strong> e <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}