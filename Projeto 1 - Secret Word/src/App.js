// Css
import './App.css';
// React
import { useCallback, useEffect, useState } from 'react'
// Dados
import { wordsList } from './data/words'
// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

// Define os Estagios do game
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  // Atribui a tela atual ao estagio que o jogo se encontra
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLettres, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesseds, setGuesseds] = useState(5)
  const [score, setScore] = useState(0)
 

  const pickWordAndPickCategory = () => {
    // Pick Random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    // Pick Random Word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return { word, category }
  }

  // Função para mudar o estagio do jogo
  const startGame = useCallback(() => {
    clearLettersStates()
    //Pick Word e Pick Category
    const { word, category } = pickWordAndPickCategory()
    // Create Array of Letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    console.log(wordLetters)
    setGameStage(stages[1].name)
  }, [pickWordAndPickCategory])
  //Processar letras do imput
  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase()
    // check letter
    if (guessedLettres.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)) {
      return
    }
    // push guessed letter or remove a guess
    if (letters.includes(normalizeLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizeLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizeLetter
      ])
      setGuesseds((actualGuesseds) => actualGuesseds - 1)
    }
  }

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    // reset all states
    
    if (guesseds === 0) {
      setGameStage(stages[2].name)
      clearLettersStates()
    }
  }, [guesseds])

  // check in condition
  useEffect(() => {
    const uniqueLetters = [... new Set(letters)]

    if(guessedLettres.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore += 100)
      startGame()
    }

  }, [guessedLettres, letters, startGame])
  
  const retry = () => {
    setScore(0)
    setGuesseds(5)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {/* Aqui abre o componente do determinado estagio */}
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLettres={guessedLettres}
        wrongLetters={wrongLetters}
        guesseds={guesseds}
        score={score}
      />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
