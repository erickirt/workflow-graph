// g3-format-prettier
import {provideZoneChangeDetection} from '@angular/core';
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DagModePageModule} from './demo_page/demo_page';

@NgModule({providers: [provideZoneChangeDetection()]})
export class ZoneChangeDetectionModule {}

@NgModule({
  declarations: [AppComponent],
  imports: [ZoneChangeDetectionModule, BrowserModule, DagModePageModule],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
