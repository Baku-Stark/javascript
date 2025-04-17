const Database = require('better-sqlite3');
const db = new Database('./database.db'); // Arquivo do banco de dados
const readline = require('readline'); // Para input no console

// Cria a tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL,
    estoque INTEGER
  )
`);

// Interface para ler inputs do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menu principal
function menu() {
  console.log(`
  === MENU ===
  1. Adicionar produto
  2. Listar produtos
  3. Atualizar produto
  4. Remover produto
  5. Sair
  `);
  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1': adicionarProduto(); break;
      case '2': listarProdutos(); break;
      case '3': atualizarProduto(); break;
      case '4': removerProduto(); break;
      case '5': rl.close(); break;
      default: console.log('Opção inválida!'); menu();
    }
  });
}

// Funções CRUD
function adicionarProduto() {
  rl.question('Nome do produto: ', (nome) => {
    rl.question('Preço: ', (preco) => {
      rl.question('Estoque: ', (estoque) => {
        const stmt = db.prepare('INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)');
        stmt.run(nome, parseFloat(preco), parseInt(estoque));
        console.log('Produto adicionado!');
        menu();
      });
    });
  });
}

function listarProdutos() {
  const produtos = db.prepare('SELECT * FROM produtos').all();
  console.log('\n=== PRODUTOS ===');
  console.table(produtos); // Exibe como tabela bonita
  menu();
}

function atualizarProduto() {
  rl.question('ID do produto a atualizar: ', (id) => {
    rl.question('Novo nome: ', (nome) => {
      rl.question('Novo preço: ', (preco) => {
        rl.question('Novo estoque: ', (estoque) => {
          const stmt = db.prepare('UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?');
          stmt.run(nome, parseFloat(preco), parseInt(estoque), id);
          console.log('Produto atualizado!');
          menu();
        });
      });
    });
  });
}

function removerProduto() {
  rl.question('ID do produto a remover: ', (id) => {
    const stmt = db.prepare('DELETE FROM produtos WHERE id = ?');
    stmt.run(id);
    console.log('Produto removido!');
    menu();
  });
}

// Inicia o app
console.log('App SQLite no console!');
menu();