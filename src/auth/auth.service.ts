import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { RegisterDto } from './dto/register.dto';
import { compare, genSalt, hashSync } from "bcrypt-ts";
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService{
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(loginDto:LoginDto): Promise<User| null>{
		const user = await this.userService.findByUsername(loginDto.username);
		if (user && await compare(loginDto.password,user.password)) {
			return user;
		}
		return null;
	}

  	async login(user: any){
    	const payload = { username: user.username, sub: user.id };
    	return {
      	access_token: this.jwtService.sign(payload),
    	};
  	}

	 async register(registerDto: RegisterDto): Promise<User> {
    const existingUser = await this.userService.findByUsername(registerDto.username);
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const hashedPassword = await hashSync(registerDto.password, 10);
    return this.userService.create({
      username: registerDto.username,
      password: hashedPassword,
    });
  }
}
