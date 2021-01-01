import React from "react"
import Vacation from "./Vacation"
import vacationSpots from "./vacationSpots"

function App() {
  const arra = vacationSpots.map(vaca => <Vacation key={vaca.id} place={vaca.place} price={vaca.price} timeToGo={vaca.timeToGo} />)
 
    return (
        <div className = "Vacation">
            {arra}            
        </div>
    )
}

export default App
