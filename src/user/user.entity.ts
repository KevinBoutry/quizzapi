import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Quizz } from 'src/quizz/quizz.entity';
import { Score } from 'src/score/score.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Quizz, (quizz) => quizz.user)
  quizzes: Quizz[];

  @OneToMany(() => Score, (score) => score.user)
  scores: Score[];
}
