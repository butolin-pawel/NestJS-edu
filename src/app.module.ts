import { Module } from '@nestjs/common';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { Postapp } from './post/postapp.model';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Vq2R8FJ',
    database: 'nestjs_db',
    entities: [Postapp]
  }),
TypeOrmModule.forFeature([Postapp])],
  controllers: [ CatController,PostController],
  providers: [CatService,PostService,],
})
export class AppModule {}
