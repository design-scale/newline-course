// import './input.css';
// import '../lib/output.css';
//import { tokens } from '@ds-turbo/foundation';

export type ButtonProps = {
  children?: React.ReactNode;
};

// const Button = ({ children }: ButtonProps) => (
//   // Aula 157 - Button
//   <button
//     style={{
//       backgroundColor: tokens.colors.primary[300].original.value,
//       padding: '12px 24px',
//       border: 'none',
//       cursor: 'pointer',
//       borderRadius: '4px',
//     }}
//   >
//     {children}
//   </button>
// );

const Button = ({ children }: ButtonProps) => (
  // Aula 157 - Button
  <button
    className={[
      'newline-bg-neutral-900 hover:newline-bg-primary-700',
      'active:newline-bg-primary-800 newline-text-neutral-white',
      'newline-py-8 newline-px-[20px]',
      'newline-rounded-large',
    ].join(' ')}
  >
    {children}
  </button>
);

export default Button;
