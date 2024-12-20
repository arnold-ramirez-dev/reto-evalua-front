import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse, PaginateRequestDto } from 'src/app/shared';
import { PaginateResponse } from 'src/app/shared/interfaces/generics/paginate-response.dto';
import { GET_LIST_CLIENTE_EF, GET_LIST_CLIENTE_SP } from '../_core/config/url-sales';
import { DtoGetListCliente } from '../_core/interfaces/clients/dtoGetListCliente';

@Injectable({
	providedIn: 'root'
})
export class ClienteService {
	constructor(private readonly _http: HttpClient) {}

	public getListClienteSP(dto: PaginateRequestDto): Observable<GenericResponse<PaginateResponse<DtoGetListCliente>>> {
		return this._http.get<GenericResponse<PaginateResponse<DtoGetListCliente>>>(
			`${GET_LIST_CLIENTE_SP}?pageNumber=${dto.pageNumber}&rowPageNumber=${dto.rowPageNumber}`
		);
	}

	public getListClienteEF(dto: PaginateRequestDto): Observable<GenericResponse<PaginateResponse<DtoGetListCliente>>> {
		return this._http.get<GenericResponse<PaginateResponse<DtoGetListCliente>>>(
			`${GET_LIST_CLIENTE_EF}?pageNumber=${dto.pageNumber}&rowPageNumber=${dto.rowPageNumber}`
		);
	}
}
