import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty({ message: "نام اجباری می باشد" })
    name: string;
    @IsNotEmpty({ message: "ایمیل اجباری می باشد" })
    email: string;
    @IsEnum(['admin', 'user', 'writer'], { message: 'نقش نامعتبر است' })
    role: 'admin' | 'user' | 'writer';
}