import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { PhoneFormatPipe } from '../pipes/phone-format.pipe';
import { StatePipe } from '../pipes/state.pipe';

@NgModule({
	declarations: [PhoneFormatPipe, StatePipe],
	imports: [],
	exports: [MatTableModule, PhoneFormatPipe, StatePipe, MatPaginatorModule, MatButtonModule, MatProgressSpinnerModule]
})
export class TemplateModule {}
