import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs/operators';
import { PaginateRequestDto } from '../../../shared/interfaces/generics/paginate-request.dto';
import { DtoGetListCliente } from '../_core/interfaces/clients/dtoGetListCliente';
import { ClienteService } from '../services/cliente.service';

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
	ds: MatTableDataSource<DtoGetListCliente> = new MatTableDataSource<DtoGetListCliente>();

	filter: PaginateRequestDto = {
		pageNumber: 1,
		rowPageNumber: 3
	};

	isLoading: boolean = false;
	isSP: boolean = true;

	@ViewChild('matPag') pagDs!: MatPaginator;

	displayedColumns = ['nro', 'cliente', 'estado', 'numeroTelefono', 'pais'];

	constructor(private readonly _clienteService: ClienteService) {}

	ngOnInit(): void {
		this.ds.paginator = this.pagDs;
		this.getListCliente();
	}

	getListCliente() {
		this.isLoading = true;
		const obs = this.isSP
			? this._clienteService.getListClienteSP(this.filter)
			: this._clienteService.getListClienteEF(this.filter);

		obs
			.pipe(
				finalize(() => {
					this.isLoading = false;
				})
			)
			.subscribe((res) => {
				if (!res.isSuccess) {
					return alert('Error en el servicio');
				}
				this.ds.data = res.data.list;
				this.pagDs.length = res.data.totalRow;
				this.pagDs.pageSize = this.filter.rowPageNumber;
				this.pagDs.pageIndex = this.filter.pageNumber - 1;
			});
	}

	changePage(e: PageEvent) {
		console.log(e);

		this.filter = {
			pageNumber: e.pageIndex + 1,
			rowPageNumber: e.pageSize
		};

		this.getListCliente();
	}

	changeService() {
		this.isSP = !this.isSP;
		this.getListCliente();
	}
}
