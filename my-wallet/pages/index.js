import { useWeb3React } from "@web3-react/core"
import { injected } from "../componets/wallet/connetors"
//import "./CSS/index.css"
import "./index.css"


export default function Home() {
  const { active, account, activate, deactivate } = useWeb3React()
  async function connectToMywallet() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }
  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div className="login" >
      <button onClick={connectToMywallet}>Connet to Metamask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect}>disconnect from Metamask</button>
    </div>
  )
}
