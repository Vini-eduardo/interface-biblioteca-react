import estilo from './Rodape.module.css'

function Rodape() {
    return (
        <footer className={estilo.rodape}> 
             <p>Desenvolvidor por: Vinícius Eduardo Correia </p>
             <p>Copyright</p>
        </footer>
    );
}

export default Rodape;