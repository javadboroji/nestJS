import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UserService {
    getAllUser() {
       try {
         const users = [
            {
                id: 1, name: "javad", lastName: "boroji", email: "javadboroji2222@gmail.com", role: "admin"
            },
            {
                id: 2, name: "ali", lastName: "ahmadi", email: "ali2222@gmail.com", role: "user"
            },
            {
                id: 3, name: "max", lastName: "wiliam", email: "max2222@gmail.com", role: "writer"
            }
        ];
        return users
       } catch (error) {
        throw new InternalServerErrorException(" خطا در  دریافت کاربران")
       }
    }
}
