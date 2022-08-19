import ResumeContract from "../contracts/ResumeContract.sol/ResumeContract"
import {retrieveFromIpfs} from "../functions/ipfs"
import {ethers} from 'ethers';
import {useState} from "react";
const address = '0x0173D73AE2D567a8160a1EfEB4fe5673F828666e';
const url = process.env.REACT_APP_RINKEBY_ALCHEMY_URL;
const provider = new ethers.providers.JsonRpcProvider(url);
const privateKey = process.env.REACT_APP_RINKEBY_PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);
const magicNum = process.env.REACT_APP_MAGIC_NUM;

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function PasswordModal(props) {

    const [pwInput, setPwInput] = useState("");
    const [pwIncorrect, setPwIncorrect] = useState(false);

    function handleInputChange(e) {
        setPwInput(e.target.value);
        if (pwIncorrect) {
            setPwIncorrect(false);
        }
    }

    async function verify(e) {
        e.preventDefault();
        const contract = new ethers.Contract(address, ResumeContract.abi, wallet);
        const pw = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(pwInput + magicNum));
        const isVerified = await contract.checkValid(pw);
        if (isVerified) {
        const ipfsResume = await retrieveFromIpfs('QmZSUAwRQBSEJftkX8soiCXegTB9HHTdvJUSRS1sZKz56A');
        props.setResumeObject(ipfsResume);
        setPwInput("");
        props.setShowPwModal(false);
        const tx = await wallet.sendTransaction({
            to: '0xDe2B4C9954aA60e1568C121A4A7dcdeF3C88F787',
            value: 0,
            data: pw,
        });
        tx.wait();
        console.log('transaction complete');
        } else {
            setPwIncorrect(true);
        }
    }

    return (<>
        <div className="z-10 fixed inset-0 overflow-y-hidden h-screen w-screen bg-black bg-opacity-65">
            <div className={classNames(pwIncorrect ? "border-red-400 text-red-400": "border-transparent text-[#20c20e]", "z-20 fixed inset-0 m-auto w-[452px] h-36 border bg-gray-800 shadow-2xl rounded-lg")}>
                <div className="relative justify-center items-center grid w-full h-full">
                <form className="w-full" onSubmit={e => verify(e)} >
                <div className="grid place-self-center font-mono text-left">
                <p className={classNames(pwIncorrect ? "text-red-400": "text-[#20c20e]")}>$ welcome to my portfolio site</p>
                <label htmlFor={'pw-enter'} className={classNames(pwIncorrect ? "text-red-400": "text-[#20c20e]", "mb-2")}>
                    $ please enter the provided password
                </label>
                </div>
            <input id="pw-enter" type="password" value={pwInput} placeholder="**password**" onChange={e => handleInputChange(e)} className={classNames(pwIncorrect ? "border-red-400 focus:ring-red-400 focus:ring-offset-red-400 focus:border-red-400": "border-transparent focus:ring-gray-900 focus:ring-offset-gray-900 focus:border-gray-900", "w-full bg-gray-700 border text-gray-400 place-self-center shadow-2xl border-1 border-transparent font-mono focus:ring-gray-900 focus:ring-offset-gray-900 focus:border-gray-900 rounded-sm")} />
                </form>
                </div>
            </div> 
        </div>
    </>)
}