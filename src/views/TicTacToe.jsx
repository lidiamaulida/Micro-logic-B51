import "../assets/styling/TicTcToe.css"

function Square () {
    return <button className="square ">X</button>
}

const TicTcToe = () => {
    return (
    <>
      <div className="squere-container">
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
    )
}

export default TicTcToe;