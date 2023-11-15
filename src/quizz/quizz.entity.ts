import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Item } from './item.entity';
import { Score } from 'src/score/score.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class Quizz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  timer: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  theme: string;

  @Column()
  type: string;

  @Column()
  textColor: string;

  @Column()
  backgroundColor: string;

  @Column()
  showTitle: boolean;

  @Column()
  public: boolean;

  @Column({ default: 0 })
  timeplayed: number;

  @Column({ default: 0 })
  upvote: number;

  @Column({ default: 0 })
  downvote: number;

  @ManyToOne(() => User, (user) => user.quizzes)
  user: User;

  @OneToMany(() => Item, (item) => item.quizz)
  items: Item[];

  @OneToMany(() => Score, (score) => score.quizz)
  scores: Score[];
}
