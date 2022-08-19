import LinkBar from "./Components/LinkBar"
import PasswordModal from "./Components/PasswordModal"
import ResumeCard from "./Components/ResumeCard"
import {useState} from "react";

function App() {

  const [showPwModal, setShowPwModal] = useState(true);
  const [resumeObject, setResumeObject] = useState({});

  return (<>
      {showPwModal ? <PasswordModal setResumeObject={setResumeObject} setShowPwModal={setShowPwModal} />: ""}
      {!showPwModal ? <div><LinkBar /><ResumeCard resumeObject={resumeObject} /></div>: ""}
  </>);
}

export default App;
