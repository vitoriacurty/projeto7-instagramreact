import { Usuario } from "./Usuario"

export const Post = () => {
  const post = [
    { srcUser: "assets/meowed.svg", user: "meowed", srcCont: "assets/gato-telefone.svg", altCont: "gato-telefone", srcCurt: "assets/respondeai.svg", altCurt: "respondeai", number: "101.523" },
    { srcUser: "assets/barked.svg", user: "barked", srcCont: "assets/dog.svg", altCont: "dog", srcCurt: "assets/adorable_animals.svg", altCurt: "adorable_animals", number: "99.159" },
    { srcUser: "assets/meowed.svg", user: "meowed", srcCont: "assets/gato-telefone.svg", altCont: "gato-telefone", srcCurt: "assets/respondeai.svg", altCurt: "respondeai", number: "101.523" }
  ]

  return (
    <>
      {post.map(item =>
        <div class="post">
          <div class="topo">
            <Usuario>
              <img src={item.srcUser} alt={item.user} />
              {item.user}
            </Usuario>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={item.srcCont} alt={item.altCont} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={item.srcCurt} alt={item.altCurt} />
              <div class="texto">
                Curtido por <strong>{item.altCurt}</strong> e <strong>outras {item.number} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}