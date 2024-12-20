import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';

@Pipe({
	name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
	private phoneUtil = PhoneNumberUtil.getInstance();

	transform(value: string | null | undefined, country: string = 'CL'): string {
		if (!value) return 'No existe.';

		try {
			const parsedNumber = this.phoneUtil.parse(value, country);

			if (this.phoneUtil.isValidNumber(parsedNumber)) {
				return this.phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL);
			}

			console.warn(`Número inválido: ${value}`);
			return 'No existe.';
		} catch (error) {
			console.error('Error al formatear el número:', error);
			return 'No existe.';
		}
	}
}
