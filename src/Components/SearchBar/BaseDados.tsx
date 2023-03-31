import livro from "../../img/livro.png";

export interface LivroProps {
  nome: string;
  id: number;
  src: string;
}

export const livros: LivroProps[] = [
  { nome: "Liderança em Design", id: 1, src: livro },
  { nome: "Liderança em UX", id: 2, src: livro },
  { nome: "JavaScript Assertivo", id: 3, src: livro },
  { nome: "Cangaceiro em JavaScript", id: 4, src: livro },
  { nome: "Aventureiros do Java", id: 5, src: livro },
];
