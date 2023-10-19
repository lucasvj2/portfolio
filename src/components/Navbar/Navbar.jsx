import { navLinks } from '../../constants'

export default function Navbar() {
  return (
    <div className="flex flex-col items-start">
      {navLinks.map((element, index) => (
        <NavbarElement key={index} name={element.title} index={index}/>
      ))}
    </div>
  );
}

function NavbarElement({ name, index }) {
  return (
    <div
    className="slideFromLeft w-60 border-b transition-all duration-300 hover:py-5 flex flex-col items-start justify-center py-3 cursor-pointer text-light"
    style={{ animationDelay: `${index * 100}ms` }}
    >
      <h1 className="text-3xl font-mweather font-bold">{name}</h1>
    </div>
  );
}
