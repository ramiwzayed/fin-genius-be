import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  role: string;

  @Column()
  password: string;

  @Column()
  dateOfBirth: number;
}
