import styled from "styled-components";

const SearchBarInput = styled.input`
  border: none;
  padding: 18px;
  font-size: 16px;
  margin-top: 32px;
  width: 60vw;
  border-radius: 50px;
  font-size: 16px;
  margin-bottom: 30px;

  &::placeholder {
    font-size: 16px;
  }
`;

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({ type, id, placeholder, onBlur }: InputProps) {
  return (
    <SearchBarInput
      type={type}
      id={id}
      placeholder={placeholder}
      onBlur={onBlur}
    ></SearchBarInput>
  );
}
