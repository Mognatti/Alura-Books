import livro from "../../img/livro.png";

export interface LivroProps {
  nome: string;
  id: number;
  src: string;
}

const randomCover = () => {
  const bookCoverOptions: string[] = [
    livro,
    "https://ihc.fcsh.unl.pt/wp-content/uploads/2018/01/livro001.jpg",
    "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
    "https://i.pinimg.com/474x/bc/98/6c/bc986c22d09662d26d5fe228c4c57e59.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * bookCoverOptions.length);
  return bookCoverOptions[randomIndex];
};

export const livros: LivroProps[] = [
  { nome: "Liderança em Design", id: 1, src: randomCover() },
  { nome: "Liderança em UX", id: 2, src: randomCover() },
  { nome: "JavaScript Assertivo", id: 3, src: randomCover() },
  { nome: "Cangaceiro em JavaScript", id: 4, src: randomCover() },
  { nome: "Aventureiros do Java", id: 5, src: randomCover() },
];

export async function GetBooks() {
  try {
    const res = await fetch("http://localhost:8000/livros", {
      method: "GET",
      mode: "no-cors",
    });
    const { data }: { data: any } = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
