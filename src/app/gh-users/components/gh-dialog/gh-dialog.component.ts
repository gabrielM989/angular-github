import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../models/ghUser';
import { ghRep } from '../../models/ghRep';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  rep!: ghRep[]

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (usuario) => {
        this.user = usuario

        this.user.created_at = this.user.created_at
        this.user.updated_at = this.user.updated_at
      },
      (erro) => {
        console.log('Aconteceu o seguinte erro: ' + erro)

      }
    )
    this.ghService.findRep(this.username).subscribe(
      (dados) => {

        this.rep = dados

      },
      (erro) => {
        console.log('Aconteceu o seguinte erro: ' + erro)
      }
    )
  }
}
