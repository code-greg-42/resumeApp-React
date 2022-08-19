export default function ResumeCard(props) {

    const {contactInfo, education, technicalSkills, workExperience} = props.resumeObject;

    return (<>
        <div className="text-gray-100 relative w-[70vw] ml-72 pl-8 text-sm text-left divide-y-2 divide-y-blue-200">
            <div className="text-center mt-4">
            <h1 className="text-3xl font-bold">{contactInfo.name}</h1>
            <div className="inline-flex pl-4 divide-x-2 text-blue-200 -mx-2">
            <p className="px-2">{contactInfo.email}</p>
            <p className="px-2">{contactInfo.location}</p>
            <p className="px-2">{contactInfo.phone}</p>
            </div>
            <h2 className="text-lg text-left">Education</h2>
            </div>
            <div>
            {education.map(e => (
                <div key={e.name} className="grid mt-2">
                <div className="inline-flex divide-x-2 -mx-2">
                <p className="text-md font-semibold px-2">{e.name}</p>
                <p className="px-2 text-blue-200">{e.date}</p>
                </div>
                <div className="inline-flex text-blue-200 w-3/4 divide-x -mx-2">
                {('details' in e) ? e.details.map(detail => (
                    <p className="px-2" key={detail}>{detail}</p>
                )): ""}
                </div>
                </div>
            ))}
            <h2 className="mt-4 text-lg">Technical Skills</h2>
            </div>
            <div className="text-blue-200">
            <ul className="mt-2 grid grid-cols-3 list-disc list-inside">
            {technicalSkills.map(skill => (
                <li key={skill}>{skill}</li>
            ))}
            </ul>
            <h2 className="mt-4 text-lg text-gray-100">Work Experience</h2>
            </div>
            <div className="mb-2">
            {workExperience.map(work => (
                <div key={work.name} className="mt-2">
                <p className="text-md font-semibold">{work.name}</p>
                <p className="text-blue-200">{work.date}</p>
                <ul className="text-blue-200 list-disc list-inside">
                {work.details.map(detail => (
                    <li key={detail}>{detail}</li>
                ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
    </>)
}