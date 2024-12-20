import { PhoneFormatPipe } from './phone-format.pipe';

describe('PhoneFormatPipe', () => {
	let pipe: PhoneFormatPipe;

	beforeEach(() => {
		pipe = new PhoneFormatPipe();
	});

	it('debería formatear correctamente un número de teléfono válido', () => {
		const phoneNumber = '982345678'; // Número válido para Chile
		const country = 'CL'; // Chile
		const formattedPhone = pipe.transform(phoneNumber, country);

		expect(formattedPhone).toBe('+56 9 8234 5678'); // Formato esperado
	});

	it('debería devolver "No existe." para un valor null o undefined', () => {
		expect(pipe.transform(null, 'CL')).toBe('No existe.');
		expect(pipe.transform(undefined, 'CL')).toBe('No existe.');
	});

	it('debería devolver "No existe." si ocurre un error al formatear', () => {
		spyOn(pipe['phoneUtil'], 'parse').and.throwError('Error inesperado');
		const phoneNumber = '912345678';
		const result = pipe.transform(phoneNumber, 'CL');

		expect(result).toBe('No existe.');
	});

	it('debería manejar correctamente códigos de país personalizados', () => {
		const phoneNumber = '934197172'; // Número válido para Peru
		const country = 'PE';
		const formattedPhone = pipe.transform(phoneNumber, country);

		expect(formattedPhone).toBe('+51 934 197 172');
	});
});
