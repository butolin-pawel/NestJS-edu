import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, Response } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';
import { ImportUserDto } from './dto/import-user-dto';
@Controller('user')
export class UserController {
    constructor(private userRepository: UserService) {

    }
    @Get()
    getAllPosts(): Promise<User[]> {
        return this.userRepository.getUsers();
    }
    @Post()
    addPost(@Body() post: ImportUserDto) {
        return this.userRepository.addUser(post);
    }
    @Get(':id')
    getPostById(@Param('id') id: number): Promise<User> {
        return this.userRepository.getById(id);
    }
}
