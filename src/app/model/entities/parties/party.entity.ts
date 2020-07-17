import { PartyUser } from './party-user.entity';

export interface Party {
  currentCampaign: string;
  description: string;
  id: number;
  isPrivate: boolean;
  name: string;
  nextScenario: string;
  nextSessionDate: Date;
  players: PartyUser[];
  prerequisite: string;
  previousSessionDate: Date;
}
