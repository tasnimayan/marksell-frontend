import Link from 'next/link';

const Button = ({children, href, className, type="primary"}) => {
  const button = {
    primary:"rounded relative inline-flex group items-center justify-center px-3.5 py-1 cursor-pointer border-b-2 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white text-base font-semibold overflow-hidden",
    secondary:"rounded relative inline-flex group items-center justify-center px-3.5 py-1 cursor-pointer border active:border-purple-600 active:shadow-none shadow-lg border-purple-700 text-gray-700 text-base font-semibold overflow-hidden",
  }
  return (
    <Link href={href ?? "#"} class={button[type]+className}>
      <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
      <span class="relative">{children}</span>
    </Link>
  );
};

export default Button;