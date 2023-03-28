import "./logo.css";

interface HeaderProps {
  imagem: string;
}

const logo = ({ imagem }: HeaderProps) => {
  return (
    <div className="logo">
      <img src={imagem} alt="logo" className="logo-img"></img>
      <p>
        <strong>Alura</strong> Books
      </p>
    </div>
  );
};

export default logo;
