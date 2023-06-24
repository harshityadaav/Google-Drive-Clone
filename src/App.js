import { auth, provider } from "./firebase";
import { useState } from "react";
import Data from "./Data";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {

  const [user, setUser] = useState(null);

  const signIn = ()=>{
    auth.signInWithPopup(provider).then(({user})=>{
        setUser(user);
     }).catch(error=>{
        alert(error);
    })
}

  return (
    <>
    {
      user ? (
        <>
          <Header photoURL={user.photoURL}/>
          <div className="App">
            <Sidebar/>
            <Data/>
          </div>
        </>
    ) : (
     <div className="loginWrap">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png"/>
       <button onClick={signIn}>Login to Google Drive</button>
     </div>
    )
    }
    
    </>
  );
}

export default App;
