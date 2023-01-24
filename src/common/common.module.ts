import { Module } from '@nestjs/common';
import { AxiosAdapter } from './http-adapters/axios.adapter';
import { FetchAdapter } from './http-adapters/fetch.adapter';

@Module({
  providers: [AxiosAdapter, FetchAdapter],
  exports: [AxiosAdapter, FetchAdapter],
})
export class CommonModule {}
