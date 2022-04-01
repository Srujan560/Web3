import styles from '../styles/Home.module.css'
import { useMoralis } from "react-moralis";





export default function Home() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  console.log(isAuthenticated);
  console.log("Hello world");
  console.log(user);
  if (!isAuthenticated) {
    return (
      <div style={{ height: "100vh", backgroundColor: "black", paddingTop: "15vh", color: "white", }}>
        <center>
          <h1>Welcome to the Web3 Music Player.</h1>
          <h2>Connect your MetaMask wallet below to sign in.</h2>
          <button
            className="px-7 py-4 text-xl rounded-xl bg-yellow-300 animate-pulse"
            onClick={() =>
              authenticate({ signingMessage: "Authorize linking of your wallet" })
            }
          >
            Login using Metamask
          </button>

        </center>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.tempback}>
     
      </div>
      <p>I am here at Home</p>
    </div>

  )
}
