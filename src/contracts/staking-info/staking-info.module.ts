import { ContractModule } from '@lido-nestjs/contracts';
import { Module } from '@nestjs/common';

import { StakingInfo__factory } from '../generated';
import {
  STAKING_INFO_ADDRESSES,
  STAKING_INFO_TOKEN,
} from './staking-info.consts';

@Module({})
export class StakingInfoModule extends ContractModule {
  static module = StakingInfoModule;
  static contractFactory = StakingInfo__factory;
  static contractToken = STAKING_INFO_TOKEN;
  static defaultAddresses = STAKING_INFO_ADDRESSES;
}
