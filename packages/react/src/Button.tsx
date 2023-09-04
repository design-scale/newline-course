import { tokens } from '@ds-turbo/foundation';

export type ButtonProps = {
  children?: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => (
  // Aula 157 - Button
  <button
    style={{
      backgroundColor: tokens.colors.primary[300].original.value,
      padding: '12px 24px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '4px',
    }}
  >
    {children}
  </button>
);

export default Button;
