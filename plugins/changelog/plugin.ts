import { SeederModule } from 'src/core';
import { IOnPluginBootstrap, IOnPluginDestroy } from 'common';
import { ExtensionPlugin, OnBasicPluginSeed } from 'plugin';
import { ChangelogModule } from './changelog.module';
import { Changelog } from './changelog.entity';
import { ChangelogSeederService } from './changelog-seeder.service';

@ExtensionPlugin({
  imports: [ChangelogModule, SeederModule],
  entities: [Changelog],
  providers: [ChangelogSeederService],
})
export class ChangelogPlugin implements IOnPluginBootstrap, IOnPluginDestroy, OnBasicPluginSeed {
  constructor(private readonly changelogSeederService: ChangelogSeederService) {}

  onPluginBootstrap() {}

  onPluginDestroy() {}

  async onBasicPluginSeed() {
    await this.changelogSeederService.createBasicDefault();
  }
}
