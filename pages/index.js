// import {Container} from '../styles/Common.styled'
import HomePage from '../components/Home/Home'

function Home({ posts }) {
  return (
    <>
        <HomePage />   
    </>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  
  return {
    props: {
      posts,
    },
  }
}

export default Home; 