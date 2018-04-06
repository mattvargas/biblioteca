declare module livro {

  export interface Livro {
    author: string;
    language: string;
    title: string;
    year: number;
  }

  export interface RootObject {
    livros: Livro[];
  }

}
