import { Injectable } from '@nestjs/common';
import { Cat } from './cat';

@Injectable()
export class CatService {
    Cats : Cat[] = [new Cat(1,'Tom',3),new Cat(2,'Jack',6),new Cat(3,'Bob',2)];
    
    getCats(): Cat[]{
        return this.Cats;
    }
    getCatById(id : number): Cat{
        return this.Cats[id-1];
    }
    addCat(cat : Cat){
        cat.id = this.Cats[this.Cats.length-1].id+1
        this.Cats.push(cat);
    }
    updateCat(cat : Cat) {
        this.Cats[cat.id-1] = cat;
    }
    deleteCat(id : number){
        
        this.Cats.splice(this.Cats.indexOf(new Cat(id,'',0)),1);
    }
}
