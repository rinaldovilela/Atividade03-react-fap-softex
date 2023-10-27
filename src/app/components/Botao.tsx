import './style.css'

export function Botao() {
    const handleClick = () => {
        console.log('Olá!!!')
    }
    return (<button className='botao' onClick={handleClick}>Diga Oi!</button>);
}
