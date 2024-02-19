import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <main className="flex-fill py-4">
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <header>
                <h1 className="py-3">Hello World</h1>
              </header>
              <Counter />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
