
import './App.css';
import Banner from './components/banner/Banner';
import Row from './components/rows/Row';
import requests from './requests';
import Nav from './components/nav/Nav';
function App() {
  
  return (
    <div className="app">
     <Nav />
     <Banner />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
     
    </div>
  );
}

export default App;
