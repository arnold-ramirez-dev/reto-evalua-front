import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateModule } from 'src/app/shared/template/template.module';
import { ClientComponent } from './client/client.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
	declarations: [ClientComponent],
	imports: [CommonModule, SalesRoutingModule, TemplateModule]
})
export class SalesModule {}
