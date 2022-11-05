import { useRouter } from "next/router"
import { useContext} from "react"
import { Contexto2 } from "./_app"


export default function Home() {

  const router = useRouter()
  
  
  const active = useContext(Contexto2)
  active.setactive(false)

  
  setTimeout(()=>{router.push("/");},3000)
  return (
    <div className="over">
    <div className="container error">
    <h2 className=" h1 pt-5 pb-5">The requested page does not exist</h2>
    <p className="h2 pb-5"> You will be redirected to the page in 3 seconds</p>
    <div className="pb-5"></div>
    <div className="pb-5"></div>
    <div className="pb-0"></div>
    </div>
    </div>
  )
}