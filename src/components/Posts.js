import { Post } from "./Post"

export const Posts = () => {
  const post = [
    { srcUser: "assets/meowed.svg", user: "meowed", srcCont: "assets/gato-telefone.svg", altCont: "gato-telefone", srcCurt: "assets/respondeai.svg", altCurt: "respondeai", number: 101.523 },
    { srcUser: "assets/barked.svg", user: "barked", srcCont: "assets/dog.svg", altCont: "dog", srcCurt: "assets/adorable_animals.svg", altCurt: "adorable_animals", number: 99.159 },
    { srcUser: "assets/meowed.svg", user: "meowed", srcCont: "assets/gato-telefone.svg", altCont: "gato-telefone", srcCurt: "assets/respondeai.svg", altCurt: "respondeai", number: 101.523 }
  ]

  return (
    <>
      {post.map(item =>
        <div class="posts">
          <Post
            key={item.user}
            srcUser={item.srcUser}
            user={item.user}
            srcCont={item.srcCont}
            altCont={item.altCont}
            srcCurt={item.srcCurt}
            altCurt={item.altCurt}
            number={item.number}
          />
        </div>
      )}
    </>
  )
}