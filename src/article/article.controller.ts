import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Get("getAllArticle")
    getAll() {
        return this.articleService.getAllArticle()
    }
    @Post("addNewArticle")
    createArticle(@Body() artc){

    }
}
