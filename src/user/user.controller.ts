import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('users') 
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get("getAll")
    getUsers(){
        return this.userService.getAllUser()
    }
    @Post("addNewUser")
    addNewUser(@Body() userDto:CreateUserDto){
        return this.userService.addNewUser(userDto)
    }
}
