import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',        // ✅ Your DB host
      port: 5432,               // ✅ Default Postgres port
      username: 'gym_admin',// ✅ Replace with your DB username
      password: 'admin123',// ✅ Replace with your DB password
      database: 'gym_booking', // ✅ Replace with your DB name
      entities: [User],
      synchronize: true,        // ✅ Auto-create tables (disable in production)
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
