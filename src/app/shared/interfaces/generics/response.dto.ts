export interface Response {
	isSuccess: boolean;
	message: string;
}

export interface GenericResponse<T> extends Response {
	data: T;
}
