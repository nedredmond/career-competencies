import { Competencies, type Competency } from "./competencies";
import { Skills } from "./skills";
import { Expectations } from "./levels";

export const Matrix = Object.keys(Competencies).map((competencyKey) => (
    {
        ...Competencies[competencyKey as Competency],
        key: competencyKey,
        expectations: Expectations.map((expectationKey) => ({
            key: expectationKey,
            title: expectationKey.replace(/\b\w/g, s => s.toUpperCase()),
            skills: Object.values(Skills).filter((skill) => skill.competency === competencyKey && skill.expectation === expectationKey)
        }))
    }
))