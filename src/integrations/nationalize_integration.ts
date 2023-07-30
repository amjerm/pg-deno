import { type NationalityIntegration } from "../services/nationality_service.ts";

type NationalizeResponse = {
  name: string;
  country: NationalizeCountry[];
};

type NationalizeCountry = {
  country_id: string;
  probability: number;
};

const baseEndpoint = "https://api.nationalize.io";

const agify_integration: NationalityIntegration = {
  getByName: async (name: string): Promise<string> => {
    const nationalityRes: NationalizeResponse = await fetch(
      `${baseEndpoint}?name=${name}`,
      {
        method: "GET",
      }
    ).then((res) => res.json());

    const countries = nationalityRes.country;

    if (!countries?.length) {
      throw Error("No countries found");
    }

    if (countries.length === 1) {
      return countries[0].country_id;
    }

    const country = getHighestProbability(countries);

    return country?.country_id;
  },
};

export const getHighestProbability = (
  countries: NationalizeCountry[]
): NationalizeCountry => {
  const highest: NationalizeCountry = countries
    .slice(1)
    .reduce((highest, country) => {
      if (!highest) {
        return country;
      }

      if (country.probability > highest.probability) {
        return country;
      }

      return highest;
    }, countries[0]);

  return highest;
};

export default agify_integration;
