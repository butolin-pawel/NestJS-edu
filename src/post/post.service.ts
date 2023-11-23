import { Injectable } from '@nestjs/common';
import { Postapp } from 'src/postapp/postapp';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(@InjectRepository(Postapp) private readonly postRepository: Repository<Postapp>){
    }

    getAll() : Promise<Postapp[]>{
        return this.postRepository.find();
    }

    addPost(post : Postapp) {
        this.postRepository.save(post);
    }
    getById(id : number) : Promise<Postapp>{
        const options: FindOneOptions<Postapp> = {
            where: { id: id },
            // Другие опции, если необходимо
        };
    
        return this.postRepository.findOne(options);
    }
    updatePost(post : Postapp){
        this.postRepository.save(post);
    }
    // updatePost(post : Postapp,id : number){
    //     post.id = id;
    //     this.postRepository.save(post);
    // }
    deletePost(id : number) {
        this.postRepository.delete(id);
    }
}
