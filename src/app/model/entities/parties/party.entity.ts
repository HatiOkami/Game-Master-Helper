import { PartyUser } from './party-user.entity';

export interface Party {
  currentCampaignId: string;
  description: string;
  id: number;
  isPrivate: boolean;
  name: string;
  nextScenarioId: string;
  nextSessionDate: Date;
  players: PartyUser[];
  prerequisite: string;
  previousSessionDate: Date;
}
