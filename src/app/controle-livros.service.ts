import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Livro } from './Livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'O Código Da Vinci (2003)',
      resumo:
        'Quando um curador do museu do Louvre é assassinado, Langdon se vê envolvido em uma complexa trama cheia de enigmas que o leva a desvendar um dos principais segredos da humanidade.',
      autores: ['Dan Brown'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'O Pequeno Príncipe (1943)',
      resumo:
        'Um dos maiores clássicos infantis foi escrito e ilustrado pelo autor Antoine de Saint-Exupéry quando se encontrava exilado na América do Norte durante a II Guerra Mundial. Muito da vida do autor como aviador pode ser identificada no livro.',
      autores: ['Antoine de Saint-Exupéry'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Dom Quixote (1612)',
      resumo:
        'Escrito em uma época em que os romances de cavalaria se encontravam em declínio, Miguel de Cervantes inspirou-se nisto para criar as aventuras de um homem louco que acreditava viver nesse mundo fantástico. Sem dúvidas, uma obra prima.',
      autores: ['Miguel de Cervantes'],
    },
  ];

  /* Retorna um objeto do tipo livro com todos os livros da classe */
  obterLivros(): Observable<Livro[]> {
    return of(this.livros);
  }

  /* Adiciona livros a classe */
  incluir(receberLivro: Livro): void {
    const maiorCod =
      this.livros.reduce(
        (esteCod, livros) => Math.max(esteCod, Number(livros.codigo)),
        0
      ) + 1;

    const adicionarLivro = {
      codigo: maiorCod,
      codEditora: Number(receberLivro.codEditora),
      titulo: receberLivro.titulo,
      resumo: receberLivro.resumo,
      autores: receberLivro.autores,
    };

    this.livros.push(adicionarLivro);
  }

  /* Remove livros da classe */
  remove(codLivro: number) {
    const index = this.livros.findIndex((livro) => livro.codigo === codLivro);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

  constructor() {}
}
