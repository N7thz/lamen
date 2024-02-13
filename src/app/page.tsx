import { Header } from "@/components/header"
import { Main } from "@/components/main"

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 2000))

  return (

    <div
      className="min-h-screen flex flex-col backgroundImage"
    >
      <Header />
      <Main />
    </div>
  )
}



