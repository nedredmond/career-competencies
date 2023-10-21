import { Matrix } from "../../data"

export const Overview = () => {
    return (<>
    {Matrix.map((competency) => (
        <>
            <h1>{competency.title}</h1>
            {competency.expectations.map((expectation) => (
                <>
                    <h2>{expectation.title}</h2>
                    {expectation.skills.map((skill) => (
                        <h3>{skill.description}</h3>
                    ))}
                </>
            ))}
        </>
    ))}
    </>)
}