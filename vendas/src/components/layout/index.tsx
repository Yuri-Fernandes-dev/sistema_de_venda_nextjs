import { Menu } from "../layout/menu";

export function Layout() {
  return (
    <div className="app">
      <div className="columns">
   
        <Menu />

        {/* Conteúdo principal */}
        <section className="column is-four-fifths">
          <div className="container">
            <section className="section">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Cadastro</p>
                </header>
                <div className="card-content">
                  <div className="content">Conteúdo</div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
