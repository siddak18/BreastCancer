import "../Styles/globals.css"
import Hero from "../Components/Hero"
import About from "../Components/About"
import Prevention from "../Components/Prevention"
import Treatment from "../Components/Treatment"
import Survivor from "@/Components/Survivor"
export default function Home() {
  return (
    <main className="flex w-full flex-col gap-14 items-center">
      <Hero></Hero>
      <About></About>
      <Prevention></Prevention>
      <Treatment></Treatment>
      <Survivor></Survivor>
    </main>
  )
}
