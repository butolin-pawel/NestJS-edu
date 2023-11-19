import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cat } from './cat';
import { CatService } from './cat.service';
import { log } from 'console';
@Controller('cat')
export class CatController {
    constructor(private catService : CatService ){

    }
    @Get()
    getAllCat() : Cat[]{
        return this.catService.getCats();
    }
    @Get(':id')
    getCatById(@Param('id')id :number) : Cat{
        return this.catService.getCatById(id);
    }
    @Post()
    addCat(@Body() cat : Cat){
        console.log(cat);
        this.catService.addCat(cat);
        
    }
    @Put()
    updateCat(@Body() cat : Cat){
        this.catService.updateCat(cat);
    }
    @Delete(':id')
    deleteCat(@Param('id') id : number){
        this.catService.deleteCat(id);
    }
}
