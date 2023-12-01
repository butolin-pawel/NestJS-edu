import { BadRequestException, HttpStatus, Injectable, Response } from '@nestjs/common';
import { PostModel } from 'src/post/Postapp.model';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { response } from 'express';
import { ImportPostDto } from './dto/import-post-dto';

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostModel) private readonly postRepository: Repository<PostModel>) {
    }

    getAll(): Promise<PostModel[]> {
        return this.postRepository.find();
    }

    async addPost(post: ImportPostDto) {
        const {avatar,description,title} = post;
        try{
            const find = await this.postRepository.findOne({
                where: {avatar,description,title}
            });
            if(Boolean(find)){
                throw new BadRequestException({
                    message : 'Post is exist'
                });
            }
            let createPost = await this.postRepository.save(post);
            return createPost;
        }
        catch(error){
            throw new BadRequestException({
                message : error.message
            });
        }


    }
    getById(id: number): Promise<PostModel> {
        const options: FindOneOptions<PostModel> = {
            where: { id: id },
        };

        return this.postRepository.findOne(options);
    }
    updatePost(post: PostModel) {
        if (post.avatar != null && post.description != null && post.title != null) {
            this.postRepository.save(post);
        }
        else {
            return HttpStatus.BAD_REQUEST;
        }
    }
    // updatePost(post : PostModel,id : number){
    //     post.id = id;
    //     this.postRepository.save(post);
    // }
    deletePost(id: number) {
        this.postRepository.delete(id);
    }
}
