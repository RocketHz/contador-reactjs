const Contador = () =>{
    const [winner, setWinner] = React.useState(0);

    const increase = () => setWinner(winner + 1);

    const [loser, setLoser] = React.useState(0);

    const increase1 = () => setLoser(loser + 1);

    const [draw, setDraw] = React.useState(0);

    const increase2 = () => setDraw(draw + 1);

    const reset = () => {
        setWinner(winner - winner);
        setLoser(loser - loser);
        setDraw(draw - draw);
    }

    return (
    <div>
        <div>
            <div>
                <h1 className={winner === winner ? "higher" : ""}>Ganadas: {winner}</h1>
                <hr/>

                <button onClick={increase}>Aumentar</button>
            </div>
        </div>
        <div>
            <div>
                <h1 className={loser === loser ? "less" : ""}>Perdidas: {loser}</h1>
                <hr/>

                <button onClick={increase1}>Aumentar</button>
            </div>
        </div>
        <div>
            <div>
                <h1 className={draw === draw ? "equalize" : ""}>Empate: {draw}</h1>
                <hr/>

                <button onClick={increase2}>Aumentar</button>
            </div>
        </div>
        <div>
            <div>
                <h2>Presiona Restaurar si requiere resetear los valores</h2>
                <hr/>
                <button onClick={reset}>Restaurar</button>
            </div>
        </div>

    </div>
        );
}