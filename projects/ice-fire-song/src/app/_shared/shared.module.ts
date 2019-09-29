import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '@ice-fire-song-shared/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  exports: [CommonModule, FormsModule, LoadingComponent],
  imports: [CommonModule, FormsModule]
})
export class SharedModule {}
