import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
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
