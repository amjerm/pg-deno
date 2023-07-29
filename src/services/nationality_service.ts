import nationalize_integration from "../integrations/nationalize_integration.ts";

export type NationalityIntegration = {
  getByName: (name: string) => Promise<string>;
};

//
type NationalityService = NationalityIntegration;

const integration: NationalityIntegration = nationalize_integration;
const nationality_service: NationalityService = { ...integration };

export default nationality_service;
