import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @IsStrongPassword()
  password: string;
  @IsString()
  @IsPhoneNumber('UZ')
  phoneNumber: string;
  role: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
}
