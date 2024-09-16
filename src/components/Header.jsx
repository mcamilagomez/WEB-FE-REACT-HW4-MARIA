import logo from '../assets/logo.png';

function Header(props) {
    const { title } = props;
    return (
      <header className="w-full border-b mb-[110px] h-0">
        <nav className="relative bg-[#2C3E50] text-white w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 max-w-full mx-auto sm:mb-[100px]">
            <div className="logo-section flex justify-center mb-4 ">
              <h2 className="text-[35px] sm:text-[23px] font-bold text-center">
                Planificación Estratégica Toyota Corolla 2024
              </h2>
            </div>
            <div className="flex items-center">
              <img src={logo} alt="Logo icon" className="w-20 h-20 sm:w-28 sm:h-28 object-contain" />
            </div>
          </div>
        </nav>
      </header>

    );
}
       

export default Header;
  