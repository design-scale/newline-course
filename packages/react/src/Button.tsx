import { tokens } from '@ds-turbo/foundation';

export type ButtonProps = {
  children?: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => (
  // Aula 157 - Button
  <button style={{ background: `(${tokens.colors.primary[400].value}` }}>
    {children}
  </button>
);

export default Button;
