import { useState } from "react"
import { Usuario } from "./Usuario"

export const Post = (props) => {
  const [save, setSave] = useState("bookmark-outline")
  const [like, setLike] = useState("heart-outline")
  const [color, setColor] = useState("heart-outline")
  const [curt, setCurt] = useState(props.number)

  function savePost() {
    if (save === "bookmark-outline") {
      setSave("bookmark");
    } else {
      setSave("bookmark-outline");
    }
  }

  function likePost() {
    if (like === "heart-outline") {
      setLike("heart");
      setColor("red")
      setCurt(parseFloat(curt) + 0.001)
    } else {
      setLike("heart-outline");
      setColor("black")
      setCurt(parseFloat(curt) - 0.001)
    }
  }

  function likeImage() {
    if (like === "heart-outline") {
      setLike("heart");
      setColor("red")
      setCurt(parseFloat(curt) + 0.001)
    }
  }

  return (
    <>
      <div class="post" data-test="post">
        <div class="topo">
          <Usuario>
            <img src={props.srcUser} alt={props.user} />
            {props.user}
          </Usuario>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.srcCont} alt={props.altCont} onClick={likeImage} data-test="post-image"/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon class={color} name={like} onClick={likePost} data-test="like-post"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={save} onClick={savePost} data-test="save-post"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.srcCurt} alt={props.altCurt} />
            <div class="texto" data-test="likes-number">
              Curtido por <strong>{props.altCurt}</strong> e <strong>outras {curt.toFixed(3)} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}