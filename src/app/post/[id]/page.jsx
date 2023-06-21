export default function Post ({ params }) {
  const { id } = params
  return (
        <h2>
            Es es el post {id}
        </h2>
  )
}
