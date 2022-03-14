// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App


import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import './App.css'
import Card from "./components/Card"
//import Contact from "./components/Contact"
//import Joke from "./components/Joke"
import data from "./data"


export default function App() {

    const cards = data.map(item => {
        return (
            <Card
               key={item.id}
               {...item}
            ></Card>
        )
    })

    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}




{/* <div className="contacts">
                <Contact 
                    img="https://www.istockphoto.com/photo/cat-world-gm1311993425-400932011?utm_source=unsplash&utm_medium=affiliate&utm_campaign=category_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&utm_term=cat%3A%3A%3A"
                    name="Mr. Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.com"
                ></Contact>
                <Contact 
                    img="https://www.istockphoto.com/photo/cat-world-gm1311993425-400932011?utm_source=unsplash&utm_medium=affiliate&utm_campaign=category_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&utm_term=cat%3A%3A%3A"
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com"
                ></Contact>
                <Contact 
                    img="https://www.istockphoto.com/photo/cat-world-gm1311993425-400932011?utm_source=unsplash&utm_medium=affiliate&utm_campaign=category_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&utm_term=cat%3A%3A%3A"
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                ></Contact>
                <Contact 
                    img="https://www.istockphoto.com/photo/cat-world-gm1311993425-400932011?utm_source=unsplash&utm_medium=affiliate&utm_campaign=category_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&utm_term=cat%3A%3A%3A"
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                ></Contact> 

            <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />
            <Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." 
            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!" 
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
            />
            <Joke 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
            /> 

            </div> */}
