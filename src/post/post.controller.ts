import { Controller, Get, Post,Body, Param, Put, Delete } from '@nestjs/common';
import { Postapp } from 'src/postapp/postapp';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postService : PostService){

    }
    @Get()
    getAllPosts() : Promise<Postapp[]>{
        return this.postService.getAll();
    }
    @Post()
    addPost(@Body()  post : Postapp){
        this.postService.addPost(post);
    }
    @Get(':id')
    getPostById(@Param('id') id : number) : Promise<Postapp>{
        return this.postService.getById(id);
    }
    @Put()
    updatePost(@Body() post : Postapp){
        this.postService.updatePost(post);
    }
    // @Put(':id')
    // updatePost(@Body() post : Postapp,@Param('id') id ){
    //     this.postService.updatePost(post);
    // }
    @Delete(':id')
    deletePost(@Param('id') id : number){
        this.postService.deletePost(id);
    }
}
