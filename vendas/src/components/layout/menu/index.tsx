import "../../../app/style/menu.css"

export function Menu() {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="menu-label" id="minhas_vendas">
        Minhas Vendas
      </p>
      <ul className="menu-list">
        <li>
          <a href="#">
            <span className="icon"></span> Home
          </a>
        </li>

         <li>
          <a href="#">
            <span className="icon"></span> Cadastro
          </a>
        </li>

         <li>
          <a href="#">
            <span className="icon"></span> Config
          </a>
        </li>


        



      </ul>
    </aside>
  );
}


