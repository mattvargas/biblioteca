declare module livro {

  export interface Livro {
    author: string;
    country: string;
    imageLink: string;
    language: string;
    link: string;
    pages: number;
    title: string;
    year: number;
  }

  export interface RootObject {
    livros: Livro[];
  }

}
