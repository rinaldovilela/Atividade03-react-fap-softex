import './style.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img
                        src="https://softexrecife.org.br/wp-content/uploads/2022/07/Logo-Softex-PE_PNG.png"
                        alt="Logo da Softex"
                    />
                </div>
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} Softex</p>
                    <p>Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
