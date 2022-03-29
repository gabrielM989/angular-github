import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhUser } from '../models/ghUser';
import { ghRep } from '../models/ghRep';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string = 'https://api.github.com/users' /* readonly --> quer dizer que só pode ler a propriedade do componente e não alterá-la */
  /* Além dela ser privada é apenas de leitura */

  constructor(
    private http: HttpClient /* realizando a requisição de dependência */

  ) { }

  findUser(username: string): Observable<GhUser>{
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findRep(username: string) : Observable<ghRep[]>{
    return this.http.get<ghRep[]>(`${this.baseUrl}/${username}/repos`)
  }
}
