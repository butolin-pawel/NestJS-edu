import { HttpStatus, Injectable, Response } from '@nestjs/common';
import { Postapp } from 'src/post/postapp.model';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { response } from 'express';

@Injectable()
export class PostService {
    constructor(@InjectRepository(Postapp) private readonly postRepository: Repository<Postapp>){
    }

    getAll() : Promise<Postapp[]>{
        return this.postRepository.find();
    }

    addPost(post : Postapp) {
        if(post.avatar != null && post.description != null && post.title != null){
        this.postRepository.save(post);
        }
        else {
            return HttpStatus.BAD_REQUEST;
        }

        
    }
    getById(id : number) : Promise<Postapp>{
        const options: FindOneOptions<Postapp> = {
            where: { id: id },
        };
    
        return this.postRepository.findOne(options);
    }
    updatePost(post : Postapp){
        if(post.avatar != null && post.description != null && post.title != null){
        this.postRepository.save(post);
        }
        else {
            return HttpStatus.BAD_REQUEST;
        }
    }
    // updatePost(post : Postapp,id : number){
    //     post.id = id;
    //     this.postRepository.save(post);
    // }
    deletePost(id : number) {
        this.postRepository.delete(id);
    }
}
