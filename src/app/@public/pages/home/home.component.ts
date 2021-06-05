import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/@services/clientes.service';
import { Clientes} from 'src/app/interfaces/icliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clientes: Clientes[];

  constructor( private cs: ClientesService ) { }

  ngOnInit() {
    this.cs.getClientes()
      .subscribe( clientes => {
        this.clientes = clientes;
        console.log( clientes );
      });
  }

}
