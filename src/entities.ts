import { Item } from './quizz/item.entity';
import { Quizz } from './quizz/quizz.entity';
import { Score } from './score/score.entity';
import { User } from './user/user.entity';

const entities = [User, Quizz, Item, Score];

export { User, Quizz, Item, Score };
export default entities;
