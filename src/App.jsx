import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'

function App() {

  const pricingPromise = fetch('pricingData.json').then(res => res.json())


  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>


    </>
  )
}

export default App
