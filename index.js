// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const alunos = new AlunoController()

alunos.listarAluno();
// alunos.adicionarAluno('Zeca pagodinho', 'pagodinho123@gmail.com', '89237483642', '8ss62j', 'tec');