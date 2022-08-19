export default function LinkBar() {
    return (<>
        <div className="fixed top-0 left-0 w-72 h-full bg-black text-white border-r-4 border-r-gray-600">
            <div className="grid grid-cols-1 text-center">
            <p className="text-lg mt-8 font-bold">Link to Portfolio</p>
            <a className="bg-gray-700 hover:bg-gray-800 mt-2 mx-3 shadow-2xl border-2 border-gray-800 rounded-sm p-2 flex justify-center items-center" href="https://www.github.com/grandersson" target="_blank" rel="noreferrer">Github</a>
            <p className="text-lg font-bold mt-8">Most Recent Project</p>
            <p className="text-md text-gray-300">(hosted on netlify)</p>
            <a className="bg-gray-700 hover:bg-gray-800 mt-2 mx-3 shadow-2xl border-2 border-gray-800 rounded-sm p-2 flex justify-center items-center" href="https://fantasybaseball-draftdemo.netlify.app/" target="_blank" rel="noreferrer">Fantasy Baseball - Draft</a>
            <a className="bg-gray-700 hover:bg-gray-800 mt-2 mx-3 shadow-2xl border-2 border-gray-800 rounded-sm p-2 flex justify-center items-center" href="https://fantasybaseball-scoringdemo.netlify.app/" target="_blank" rel="noreferrer">Fantasy Baseball - Scoring</a>
            <p className="text-lg font-bold mt-8">Contact Me</p>
            <a className="bg-gray-700 hover:bg-gray-800 mt-2 mx-3 shadow-2xl border-2 border-gray-800 rounded-sm p-2 flex justify-center items-center" href="mailto: grandersson1991@gmail.com">Send Email</a>
            <a className="bg-gray-700 hover:bg-gray-800 mt-2 mx-3 shadow-2xl border-2 border-gray-800 rounded-sm p-2 flex justify-center items-center" href="sms:(610)(5052915)">Send Text</a>
            <a className="bg-gray-700 hover:bg-gray-800 mt-2 mx-3 shadow-2xl border-2 border-gray-800 rounded-sm p-2 flex justify-center items-center" href="tel:6105052915">Call</a>
            </div>
        </div>
    </>)
}