import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, Response } from '@nestjs/common';
import { PostModel } from 'src/post/Postapp.model';
import { PostService } from './post.service';
import { ImportPostDto } from './dto/import-post-dto';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {

    }
    @Get()
    getAllPosts(): Promise<PostModel[]> {
        return this.postService.getAll();
    }
    @Post()
    addPost(@Body() post: ImportPostDto) {
        this.postService.addPost(post);
    }
    @Get(':id')
    getPostById(@Param('id') id: number): Promise<PostModel> {
        return this.postService.getById(id);
    }
    @Put()
    updatePost(@Body() post: PostModel) {
        this.postService.updatePost(post);
    }
    @Delete(':id')
    deletePost(@Param('id') id: number) {
        this.postService.deletePost(id);
    }
}
