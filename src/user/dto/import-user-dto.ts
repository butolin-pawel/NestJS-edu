import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class ImportUserDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly isHidden: boolean;
}
