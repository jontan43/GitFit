import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, password: string): Promise<User| null> {
		const user = await this.userService.findByUsername(username);
		if (user && user.password === password) {
			return user;
		}
		return null;
	}

  	async login(user: any) {
    	const payload = { username: user.username, sub: user.id };
    	return {
      	access_token: this.jwtService.sign(payload),
    	};
  	}
}
