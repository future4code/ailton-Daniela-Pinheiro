import React, { useState, useEffect } from "react"
import axios from "axios"
import './styles.css'
import PokeCard from "./components/PokeCard/PokeCard"

function App() {

  const [pokeLista, setPokeLista] = useState([])
  const [pokeNome, setPokeNome] = useState("")

  useEffect(() => {
    const pegaPokeLista = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeLista(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    pegaPokeLista()
  }, [])

  const onChangePokeNome = (event) => {
    setPokeNome(event.target.value)
  }

  return <main>
    <select onChange={onChangePokeNome}>
      <option value={""}>Escolha um pokémon</option>
      {pokeLista.map((pokemon) => {
        return <option key={pokemon.name} value={pokemon.name}>
          {pokemon.name}
        </option>
      })}
    </select>
    {pokeNome && <PokeCard pokeEscolhido={pokeNome} />}
  </main>
}

export default App
