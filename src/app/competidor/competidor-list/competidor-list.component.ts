import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competidor } from '../competidor';
import { CompetidorService } from '../competidor.service';

@Component({
  selector: 'app-competidor-list',
  templateUrl: './competidor-list.component.html',
  styleUrls: ['./competidor-list.component.css']
})
export class CompetidorListComponent implements OnInit {

  competidores: Array<Competidor> = [];
  searchText = '';

  constructor(
    private competidorService: CompetidorService,
    private router: Router,
    ) { }

  getCompetidores(): void {
    this.competidorService.getCompetidores().subscribe((competidores) => {
      this.competidores = competidores;
    });
}

  ngOnInit() {
    this.getCompetidores();
  }

  navegarClassicAlarm(){
    this.router.navigate([`/alarmaClasica/`])
  }
  
  navegarVoiceAlarm(){
    this.router.navigate([`/alarmaVoz/`])  
  }

  navegarPersonalizedAlarm(){
    this.router.navigate([`alarmaPersonalizada/`])  
  }

  navegarAlarmList(){
    this.router.navigate([`/listaAlarmas/`])  
  }


}
