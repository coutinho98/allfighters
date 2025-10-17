import PiramideLogo from '../assets/image/piramide.png';

function Footer() {
    return (
        <footer className="bg-[#262635] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <img
                        src={PiramideLogo}
                        alt="Logo All Fighters"
                        className="w-30 h-auto"
                    />
                </div>
                <p className="text-slate-500 text-sm">© 2025 Pirâmide Grappling Association. Todos os direitos reservados.</p>
            </div>
        </footer>

    );
}

export default Footer;  