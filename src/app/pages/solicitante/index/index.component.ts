import { Component, OnInit } from '@angular/core';
import { Collection, Solicitante } from 'src/app/models/solicitante';
import { SolicitanteService } from 'src/app/services/solicitante.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  solicitantes: Solicitante[] = [];
  
  constructor(public solicitanteService: SolicitanteService) { }
  
  ngOnInit(): void {
    this.solicitanteService.getAll().subscribe((data: Collection)=>{
      this.solicitantes = data.solicitantes;
    })  
  }
  
  deletePost(id:number){
    this.solicitanteService.delete(id).subscribe(res => {
         this.solicitantes = this.solicitantes.filter(item => item.id !== id);
         console.log('Project deleted successfully!');
    })
  }

}
