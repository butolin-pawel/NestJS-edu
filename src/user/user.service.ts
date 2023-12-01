import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImportUserDto } from './dto/import-user-dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {

    }

    getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async addUser(user: ImportUserDto) {
        let email = user.email;
        let emailCheck: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailCheck.test(email)) {
            try {
                const find = await this.userRepository.findOne({
                    where: { email: email }
                });
                if (Boolean(find)) {
                    return new BadRequestException({
                        message: 'User with this email exist'
                    });
                }
                let createPost = await this.userRepository.save(user);
                return createPost;
            }
            catch (error) {
                return new BadRequestException({
                    message: error.message
                });
            }
        }
        return new BadRequestException({
            message: 'Email is not valid'
        });
    }

    getById(id: number): Promise<User> {
        try {
            const user = this.userRepository.findOne({
                where: { id: id }
            });
            if (!Boolean(user)) {
                throw new BadRequestException({
                    message: 'User is not exist'
                });
            }
            else {
                return user;
            }
        }
        catch (error) {
            throw new BadRequestException({
                message: error.message
            });
        }
    }
}
