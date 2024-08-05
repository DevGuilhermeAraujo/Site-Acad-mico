import Conexao from './utils/Conexao.js';
import User from './models/User.js';
import Permissao from './models/Permissao.js';

class App {
    static db;
    static user;
    static permissao;

    static async init() {
        App.db = new Conexao();
        //await App.db.conectar(); // Certifique-se de que a conexão está sendo estabelecida
        App.user = new User(App.db);
        App.permissao = new Permissao(App.db); // Cria uma instância com o banco de dados
    }
}

// Inicializa o aplicativo
await App.init();

export default App;