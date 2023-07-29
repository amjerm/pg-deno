import { type AgeIntegration } from "../services/age_service.ts";

type AgifyResponse = {
  count: number;
  name: string;
  age: number;
};

const baseEndpoint = "https://api.agify.io";

const agify_integration: AgeIntegration = {
  getByName: async (name: string): Promise<number> => {
    const ageRes: AgifyResponse = await fetch(`${baseEndpoint}?name=${name}`, {
      method: "GET",
    }).then((res) => res.json());

    return ageRes.age;
  },
};

export default agify_integration;
