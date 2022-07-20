import { NgModule } from '@angular/core';
import { ThingsByAreaIdPipe } from './pipes/things-by-area-id.pipe';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [ThingsByAreaIdPipe],
  providers: [ApiService],
  exports: [ThingsByAreaIdPipe],
})
export class SharingModule {}
