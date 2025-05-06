import { Module } from '@nestjs/common'

import { TunnelCatFactory } from './tunnel-cat.factory'

@Module({
  providers: [TunnelCatFactory],
  exports: [TunnelCatFactory],
})
export class TunnelCatModule {}
