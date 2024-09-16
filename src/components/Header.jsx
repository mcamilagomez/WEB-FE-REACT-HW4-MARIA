import logo from '../assets/logo.png';

function Header(props) {
    const { title } = props;
    return (
      <header className="w-full border-b mb-[80px] h-0">
        <nav className="relative bg-[#2C3E50] text-white w-full h-[115px] sm:h-[115px] flex justify-between items-center p-4 sm:mb-0p">
          <h2 className="text-[25px] sm:text-[15px] md:text-[25px] font-bold">
            Planificación Estratégica Toyota Corolla 2024
          </h2>
          <img src={logo} alt="Logo icon" className="w-20 h-20 sm:w-28 sm:h-28 object-contain" />
        </nav>
      </header>


    

    );
}
       

export default Header;
  