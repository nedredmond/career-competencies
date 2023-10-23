import type { LoaderFunction } from "react-router-dom";
import { Skills } from "../../data";

export const loader: LoaderFunction = async ({ params }) => ({
  skill: Skills[params.id as keyof typeof Skills],
});
