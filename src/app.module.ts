import { Module } from '@nestjs/common';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModel } from './post/Postapp.model';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.model';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Vq2R8FJ',
    database: 'nestjs_db',
    entities: [PostModel, User],
    migrationsTableName : "migrations",
    migrations : ["*.js"],
    migrationsRun: true,
  }),
  TypeOrmModule.forFeature([PostModel,User])],
  controllers: [CatController, PostController, UserController],
  providers: [CatService, PostService, UserService,],
})
export class AppModule { }
