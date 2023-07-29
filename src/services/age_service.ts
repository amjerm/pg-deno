import agify_integration from "../integrations/agify_integration.ts";

export type AgeIntegration = {
  getByName: (name: string) => Promise<number>;
};

//
type AgeService = AgeIntegration;

const integration: AgeIntegration = agify_integration;
const age_service: AgeService = { ...integration };

export default age_service;
