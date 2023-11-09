import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import requests from './Requests'
import Row from './Row'
function HomeScreen() {
  return (
    <div className="homeScreen">

       <Nav className/>
        <Banner/>
          <Row title="Netflix Originals"
          fetchUrl= {requests.fetchNetflixOriginals}
          isLargeRow
          />
          <Row title="Trending Now"
          fetchUrl= {requests.fetchTrending}
          isLargeRow
          />
          <Row title="Top rated"
          fetchUrl= {requests.fetchTopRated}
          isLargeRow
          />
          <Row title="Action Movies"
          fetchUrl= {requests.fetchActionMovies}
          isLargeRow
          />
          <Row title="comedy Movies"
          fetchUrl= {requests.fetchComedyMovies}
          isLargeRow
          />
          <Row title="Horror Movies"
          fetchUrl= {requests.fetchHorrorMovies}
          isLargeRow
          />
          <Row title="Romance Movies"
          fetchUrl= {requests.fetchRomanceMovies}
          isLargeRow
          />
          <Row title="Documentaries Movies"
          fetchUrl= {requests.fetchDocumentaries}
          isLargeRow
          />
           <Row title="Sci-fi Movies"
          fetchUrl= {requests.fetchSciFi}
          isLargeRow
          />

    </div>
  )
}

export default HomeScreen