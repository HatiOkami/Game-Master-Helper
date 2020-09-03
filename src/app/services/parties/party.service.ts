import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import Mock from '../../../assets/mock-json/party.mock.json';
import { Party } from '../../model/entities';
import { HttpApiService } from '../../shared/services/http-api.service';
import { EntityService } from '../entity.service';

@Injectable()
export class PartyService extends EntityService<Party> {
  public static readonly alias = 'partyService';

  constructor(private httpApi: HttpApiService) {
    super();
    this.servicePrefix = 'parties';
  }

  public getParty(partyId: number): Observable<Party> {
    // return this.httpApi.get(this.servicePrefix, partyId);
    return of(Mock);
  }

  protected _createInstance(data: Party): Party {
    return Object.assign(this._getDefaultData(), {
      currentCampaignId: data.currentCampaignId,
      description: data.description,
      id: data.id,
      isPrivate: data.isPrivate,
      name: data.name,
      nextScenarioId: data.nextScenarioId,
      nextSessionDate: data.nextSessionDate,
      players: data.players,
      prerequisite: data.prerequisite,
      previousSessionDate: data.previousSessionDate,
    });
  }

  protected _getDefaultData(): Party {
    return {
      currentCampaignId: null,
      description: null,
      id: null,
      isPrivate: true,
      name: null,
      nextScenarioId: null,
      nextSessionDate: null,
      players: [],
      prerequisite: null,
      previousSessionDate: null,
    };
  }
}
