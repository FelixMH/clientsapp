export interface IClientes {
  id:         number;
  nombre:     string;
  apellido:   string;
  email:      string;
  created_at: Date;
}

export class Clientes {
  id:         number    = 0;
  nombre:     string    = "";
  apellido:   string    = "";
  email:      string    = "";
  created_at: Date      = new Date();
}
