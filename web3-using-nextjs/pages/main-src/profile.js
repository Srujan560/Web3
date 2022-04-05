import {useMoralis} from "react-moralis";
import Blance from "./blance";
import Sendeth from "./sendEth";


function profile(){
    
    const {isAuthenticated,user} = useMoralis();
    if(!isAuthenticated){
        return(<div>
            <p>Please login</p>
        </div>
        );
    }
     console.log("Beloow")
    console.log(user)
    return(
        <div>

            <p>profile</p>
            <Blance user={user}/>
            <Sendeth/>
        </div>
        )
}export default profile;