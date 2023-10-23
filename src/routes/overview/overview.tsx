import { Matrix } from "../../data"
import "./overview.css"

export const Overview = () => {
    return (<span id="overview">
    {Matrix.map((competency) => (
        <details key={competency.key}>
            <summary>{competency.title}</summary>
            {competency.expectations.map((expectation) => (
                <details key={expectation.key}>
                    <summary>{expectation.title}</summary>
                    {expectation.skills.map((skill) => (
                        <p key={skill.id}>{skill.description}</p>
                    ))}
                </details>
            ))}
        </details>
    ))}
    </span>)
}