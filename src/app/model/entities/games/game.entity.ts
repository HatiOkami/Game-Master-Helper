import { Adjective } from './adjective.entity';

export interface Game {
  adjectives: Adjective;
  description: string;
  id: number;
  image: string;
  title: string;
}
