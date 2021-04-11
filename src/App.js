import './App.css';
import Row from './Row';
import requests from './Requests'
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
     <Nav/>
      <Banner/>
      <Row title="VIDEOHUB ORIGINAL" fetchUrl={requests.fetchTrending} isLargerRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTopRated } />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchMystery} />
      <Row title ="Western" fetchUrl = {requests.fetchWestern}/>
      <Row title="TV Shows" fetchUrl={requests.fetchTV} />
    </div>
  );
}

export default App;
