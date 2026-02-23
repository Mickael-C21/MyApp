import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const option = params.get('option')
    const number1 = parseFloat(params.get('number1'))
    const number2 = parseFloat(params.get('number2'))

    if (!option || isNaN(number1) || isNaN(number2)) return

    let res = 0

    switch (option) {
      case 'addition':
        res = number1 + number2
        break
      case 'soustraction':
        res = number1 - number2
        break
      case 'multiplication':
        res = number1 * number2
        break
      case 'division':
        res = number2 !== 0 ? number1 / number2 : 'Erreur'
        break
      default:
        res = null
    }

    setResult(res)
  }, [])

  return (
    <div className="page">
      <div className="calculator-box">
        <h1>🧮 Calculatrice</h1>

        <form method="GET" className="form-box">
          <select name="option" defaultValue="multiplication">
            <option value="addition">+ (addition)</option>
            <option value="soustraction">- (soustraction)</option>
            <option value="multiplication">× (multiplication)</option>
            <option value="division">/ (division)</option>
          </select>

          <input
            type="number"
            name="number1"
            placeholder="Nombre 1"
            required
          />

          <input
            type="number"
            name="number2"
            placeholder="Nombre 2"
            required
          />

          <button type="submit">Valider</button>
        </form>

        {result !== null && (
          <p className="result">Résultat : {result}</p>
        )}
      </div>
    </div>
  )
}

export default App
