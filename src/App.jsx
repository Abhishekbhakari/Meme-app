import axios from 'axios'
import './App.css'
import MemeContainer from './components/memeContainer'
// import Pagination from './components/Pagination'
import { useEffect, useState } from 'react';

function App() {

  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(6);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = memes.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    featchMemes();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  },[]);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight ) {
      featchMemes();
    }
  }
  const featchMemes = async () => {
    setShowShimmer(true);
    const response = await axios.get('https://meme-api.com/gimme/20');
    setMemes((memes) => [...memes, ...response.data.memes]);
    setShowShimmer(false);
    console.log(response.data);
  }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "between " , }}>
      <h1>MEME_Adda</h1>
      <MemeContainer data={memes} />
      {/* <Pagination postsPerPage={postsPerPage} totalPosts={memes.length} paginate={paginate} currentPage={currentPage} /> */}
    </div>
  )
}

export default App
