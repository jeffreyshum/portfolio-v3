import { createRoot } from "react-dom/client"
import App from "./Components/App/App"
import "./globals.css"

const container = document.getElementById("app") as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
