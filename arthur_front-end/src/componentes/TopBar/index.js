import './TopBar.css'

function TopBar() {
    return (
        <header className="headerGeneric">
            <div className="logo_name">
                <p>TemDTudo</p>
            </div>
            <div className="link_pages">
                <a href="/home" style={{textDecoration: 'underline'}}>Home</a>
                <a href="/funcionarios">Gerência</a>
                <a href="{{url('buscaFunc')}}">Busca</a>
                <a href="">Venda</a>
                <a href="{{url('perfil')}}"><img src="../img/user.svg" alt="User Icon" /></a>
            </div>
        </header>
    )
}


export default TopBar