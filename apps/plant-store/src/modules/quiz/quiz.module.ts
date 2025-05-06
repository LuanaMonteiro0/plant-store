import { Module } from '@nestjs/common'
import { QuizController } from './quiz.controller'
import { TunnelCatModule } from '@core/tunnelCat'

@Module({
  imports: [TunnelCatModule],
  controllers: [QuizController],
  providers: [],
})
export class QuizModule {}
