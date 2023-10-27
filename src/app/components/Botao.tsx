import './style.css'

export function Botao() {
    const handleClick = () => {
        console.log('Olá!!!')
    }
    return (<button onClick={handleClick}>Diga Oi!</button>);
}
