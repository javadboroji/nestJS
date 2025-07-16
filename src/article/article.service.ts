import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BaseService } from 'src/comm/baseService/base.service';
@Injectable()
export class ArticleService extends BaseService<any> {
  constructor(private readonly prisma: PrismaService) { 
    super(prisma.article)
  }
  async getAllArticle() {
    return await this.findAll()
  }
}
