import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ImportUserDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly isHidden: boolean;
}
