import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { UserRole } from 'src/comm/enums/user-role.enum';
export class CreateUserDto {
     @ApiProperty()
    @IsNotEmpty({ message: "نام اجباری می باشد" })
    name: string;
     @ApiProperty()
    @IsNotEmpty({ message: "ایمیل اجباری می باشد" })
    email: string;
    @ApiProperty()
    @IsEnum(UserRole, { message: 'نقش نامعتبر است' })
    role: UserRole;
}