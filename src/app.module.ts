import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, UserController, ArticleController ],
  providers: [AppService, UserService, ArticleService],
})

export class AppModule {}
