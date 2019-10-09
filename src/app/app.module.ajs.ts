import { authModule } from './auth/auth.module';
import { blocksModule } from './blocks/blocks.module';
import { compareModule } from './compare/compare.module';
import { coreModule } from './core/core.module';
import { eventModule } from './event/event.module';
import { exportModule } from './export/export.module';
import { gameModule } from './game/game.module';
import { playerModule } from './player/player.module';
import { quicksearchModule } from './quicksearch/quicksearch.module.ajs';
import { scoresModule } from './scores/scores.module';
import { submitModule } from './submit/submit.module';
import { timelineModule } from './timeline/timeline.module';
import { publicModule } from './public/public.module.ajs';
import { appComponent } from './app.component.ajs';

export const appModule = angular
  .module('kongtrac.app', [
    coreModule,
    authModule,
    blocksModule,
    submitModule,
    scoresModule,
    gameModule,
    playerModule,
    eventModule,
    compareModule,
    timelineModule,
    quicksearchModule,
    exportModule,
    publicModule
  ])
  .config(
    /* @ngInject */
    function($qProvider, $urlServiceProvider) {
      $qProvider.errorOnUnhandledRejections(false);
      $urlServiceProvider.deferIntercept();
    }
  )
  .component('appComponent', appComponent).name;

declare var angular: angular.IAngularStatic;
import { setAngularJSGlobal } from '@angular/upgrade/static';
setAngularJSGlobal(angular);
