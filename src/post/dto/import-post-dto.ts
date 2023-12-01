import {IsString, IsNotEmpty} from 'class-validator';

export class ImportPostDto {
    @IsString()
    @IsNotEmpty()
    readonly title : string;

    @IsString()
    @IsNotEmpty()
    readonly description  : string;

    @IsString()
    @IsNotEmpty()
    readonly avatar : string;


}
