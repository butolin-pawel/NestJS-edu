import { Controller, Get, Post,Body, Param, Put, Delete, HttpCode, HttpStatus, Response } from '@nestjs/common';
import { Postapp } from 'src/post/postapp.model';
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
        try{
        this.postService.addPost(post);
        }
        catch (error){
            return HttpStatus.BAD_REQUEST;
        }
    }
    @Get(':id')
    getPostById(@Param('id') id : number) : Promise<Postapp>{
        return this.postService.getById(id);
    }
    @Put()
    updatePost(@Body() post :  Postapp){
        
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
