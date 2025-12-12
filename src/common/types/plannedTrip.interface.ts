import { IPassengerForm } from './passengerForm.interface';
import { TripCountry } from './tripCountry.interface';

export interface PlannedTrip {
	id: string;
	passenger: IPassengerForm;
	totalTripDuration: number;
	tripCountries: TripCountry[];
	createdAt: Date;
}
