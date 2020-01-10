import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	contacts: Contact[] = [];
	filteredContacts: Contact[] = this.contacts;
	filter: String = '';

	constructor() { }

	ngOnInit() {
		this.contacts = [
			{
				id: 1,
				email: 'teste@teste.com.br',
				name: 'Carlos Eduardo da Costa',
				phoneNumber: '54 9106-1242'
			},
			{
				id: 2,
				email: 'teste@teste.com.br',
				name: 'Carlos Eduardo da Costa',
				phoneNumber: '54 9106-1242'
			},
		]
		console.log(this.filteredContacts)
	}

}
