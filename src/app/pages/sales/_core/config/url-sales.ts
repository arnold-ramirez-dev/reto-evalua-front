import { environment } from 'src/environments/environment';

const WEB_BASE_URL = `${environment.url}`;

export const GET_LIST_CLIENTE_SP: string = `${WEB_BASE_URL}/cliente/list/sp`;
export const GET_LIST_CLIENTE_EF: string = `${WEB_BASE_URL}/cliente/list/ef`;
