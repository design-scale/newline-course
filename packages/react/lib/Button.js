import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const Button = ({ children }) => (
// Aula 157 - Button
_jsxs("button", { className: [
        'newline-bg-primary-500 hover:newline-bg-primary-700',
        'active:newline-bg-primary-800 newline-text-neutral-white',
        'newline-py-8 newline-px-[20px]',
        'newline-rounded-large',
    ].join(' '), children: [children, _jsx("span", { className: "newline-px-[40px]", children: "Teste" })] }));
export default Button;
//# sourceMappingURL=Button.js.map