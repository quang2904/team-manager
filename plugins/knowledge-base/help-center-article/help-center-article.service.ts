import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TenantAwareCrudService } from 'src/core';
import { isNotEmpty } from 'common';
import { HelpCenterArticle } from './help-center-article.entity';
import { IHelpCenterArticleUpdate } from 'contracts';

@Injectable()
export class HelpCenterArticleService extends TenantAwareCrudService<HelpCenterArticle> {
  constructor(
    @InjectRepository(HelpCenterArticle)
    private readonly helpCenterArticle: Repository<HelpCenterArticle>,
  ) {
    super(helpCenterArticle);
  }

  async getArticlesByCategoryId(categoryId: string): Promise<HelpCenterArticle[]> {
    return await this.repository
      .createQueryBuilder('knowledge_base_article')
      .where('knowledge_base_article.categoryId = :categoryId', {
        categoryId,
      })
      .getMany();
  }

  async deleteBulkByCategoryId(ids: string[]) {
    if (isNotEmpty(ids)) {
      return await this.repository.delete(ids);
    }
  }

  public async updateArticleById(id: string, input: IHelpCenterArticleUpdate): Promise<void> {
    await this.repository.update(id, input);
  }
}
