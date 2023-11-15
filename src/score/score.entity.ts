import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Quizz } from 'src/quizz/quizz.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column()
  maxScore: number;

  @Column()
  time: number;

  @Column({ default: null })
  stars: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.scores)
  user: User;

  @ManyToOne(() => Quizz, (quizz) => quizz.scores)
  quizz: Quizz;
}
