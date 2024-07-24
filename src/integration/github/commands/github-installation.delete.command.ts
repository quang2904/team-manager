import { IIntegrationTenant } from 'contracts';

export class GithubInstallationDeleteCommand {
  constructor(public readonly integration: IIntegrationTenant) {}
}
