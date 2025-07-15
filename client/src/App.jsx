import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const translate = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3001/api/translate", {
        text: input,
      });
      setOutput(res.data.translation);
    } catch (err) {
      setOutput("Помилка перекладу");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Перекладач 🇪🇸 ➜ 🇺🇦</h1>
      <textarea
        rows="4"
        placeholder="Введіть текст іспанською..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={translate} disabled={loading}>
        {loading ? "Переклад..." : "Перекласти"}
      </button>
      <h3>Переклад:</h3>
      <p>{output}</p>
    </div>
  );
}

export default App;
