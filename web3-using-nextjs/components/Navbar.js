import Head from "next/Head"
import Link from 'next/link'
import Logout from './Logout'
import { useMoralis } from "react-moralis";
function navbarandTitle() {
    const { isAuthenticated, user } = useMoralis();
    if(!isAuthenticated){
        return(
            <div></div>
            );
    }
    return (

        <nav>
            <Head>
                <title>418Y Web3 </title>
                <meta name="description" content="ICSI 418Y Web3 Music app" />
                {/* If need to add log on each tab page just providde the link below */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div className="userName">
                <h3>Welcome user: {user.get("username")}</h3>
            </div>
            <div class="tempback">
                <div className= "divNavbar"><Link href="/"><p className="list">Home</p></Link> </div>

                <div className= "divNavbar"><Link href="/main-src/profile"><p className="list">profile</p></Link></div>
                <div className= "divNavbar"> <Link href="/main-src/about"><p className="list">About</p></Link></div>
                <div className= "divNavbar"> <Link href="/main-src/musiclibrary"><p className="list">library</p></Link></div>
                <div className= "divNavbar"> <Link href="/main-src/upload"><p className="list">Upload</p></Link></div>
                <div className= "divNavbar"><Link href="/main-src/extra"><p className="list">Extra</p></Link></div>
                <div className= ""> <Logout /> </div>
            </div>

            

        </nav>
    )

} export default navbarandTitle;