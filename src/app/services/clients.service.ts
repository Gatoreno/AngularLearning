import {Injectable} from '@angular/core';

@Injectable()
export class ClientService {

    private clients:client[] = [{
        id: '1',
        id_cartera: 'string',
        created_at: 'string',
        status: 'string',
        name: 'string',
        escolaridad: 'string',
        ocupacion: 'string',
        mail: 'string',
        phone: 'string',
        oficina: 'string',
        parentesco: 'string',
        trabajo: 'string',
        estado: 'string'
    },
    {
        id: '1',
        id_cartera: 'string',
        created_at: 'string',
        status: 'string',
        name: 'string',
        escolaridad: 'string',
        ocupacion: 'string',
        mail: 'string',
        phone: 'string',
        oficina: 'string',
        parentesco: 'string',
        trabajo: 'string',
        estado: 'string'
    }
    ];

    constructor(){
       
    }

    getClients(){
        return this.clients;
    }
}

export interface client {
        id: string;
        id_cartera: string;
        created_at: string;
        status: string;
        name: string;
        escolaridad: string;
        ocupacion: string;
        mail: string;
        phone: string;
        oficina: string;
        parentesco: string;
        trabajo: string;
        estado: string;
};