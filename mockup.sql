set autocommit = 0;
set foreign_key_checks = 0;
truncate atendimento;
insert into atendimento (horario,automovel_id) values ('2015-07-28 10:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-28 11:00:00','2');
insert into atendimento (horario,automovel_id) values ('2015-07-28 15:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-28 17:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-29 08:00:00','3');
insert into atendimento (horario,automovel_id) values ('2015-07-29 15:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-30 08:00:00','2');
insert into atendimento (horario,automovel_id) values ('2015-07-30 10:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-30 14:00:00','2');
truncate automovel;
insert into automovel (cliente_id,placa,renavan,modelo_id,ano,quilometragem) values ('1','EMD 2790','213123123','3','2010','10000');
insert into automovel (cliente_id,placa,renavan,modelo_id,ano,quilometragem) values ('1','MBM 1234','213123123','1','2011','10000');
insert into automovel (cliente_id,placa,renavan,modelo_id,ano,quilometragem) values ('1','VSF 0000','213123123','2','2004','10000');
truncate equipe;
insert into equipe (nome,especialidade_id,id_func1,id_func2) values ('equipe rocket','1','7','4');
insert into equipe (nome,especialidade_id,id_func1,id_func2) values ('power rangers','2','5','6');
truncate especialidade;
insert into especialidade (nome) values ('Pneu');
insert into especialidade (nome) values ('Parachoque');
insert into especialidade (nome) values ('Motor');
truncate horario_atendimento;
truncate modelo_carro;
insert into modelo_carro (marca,modelo) values ('Fiat','Punto');
insert into modelo_carro (marca,modelo) values ('Peugeot','307');
insert into modelo_carro (marca,modelo) values ('Hyundai','HB20');
insert into modelo_carro (marca,modelo) values ('Ford','Focus');
insert into modelo_carro (marca,modelo) values ('Renault','Logan');
truncate ordem_de_servico;
insert into ordem_de_servico (equipe_id,automovel_id,data_emissao,horario,preco,tipo,status,descricao) values ('2','2','2015-07-33 11:00:00','2015-07-28 8:00:00','2000.00','0','0','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.');
insert into ordem_de_servico (equipe_id,automovel_id,data_emissao,horario,preco,tipo,status,descricao) values ('1','1','2015-07-31 13:00:00','2015-07-29 8:00:00','1000.00','0','0','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.');
truncate os_x_peca;
insert into os_x_peca (os_id,peca_id,quantidade) values ('1','1','10');
insert into os_x_peca (os_id,peca_id,quantidade) values ('1','2','1');
insert into os_x_peca (os_id,peca_id,quantidade) values ('1','3','8');
insert into os_x_peca (os_id,peca_id,quantidade) values ('1','4','15');
insert into os_x_peca (os_id,peca_id,quantidade) values ('1','5','2');
insert into os_x_peca (os_id,peca_id,quantidade) values ('1','6','15');
insert into os_x_peca (os_id,peca_id,quantidade) values ('2','1','3');
insert into os_x_peca (os_id,peca_id,quantidade) values ('2','2','6');
insert into os_x_peca (os_id,peca_id,quantidade) values ('2','4','17');
insert into os_x_peca (os_id,peca_id,quantidade) values ('2','6','12');
truncate os_x_tipo_de_servico;
insert into os_x_tipo_de_servico (os_id,tipo_id) values ('1','1');
insert into os_x_tipo_de_servico (os_id,tipo_id) values ('1','3');
insert into os_x_tipo_de_servico (os_id,tipo_id) values ('2','2');
insert into os_x_tipo_de_servico (os_id,tipo_id) values ('2','4');
truncate peca;
insert into peca (valor,nome,quantidade_em_estoque) values ('1.5','Fuzível','30');
insert into peca (valor,nome,quantidade_em_estoque) values ('300','Pneu','32');
insert into peca (valor,nome,quantidade_em_estoque) values ('450','Vidro','32');
insert into peca (valor,nome,quantidade_em_estoque) values ('600','Parachoque','8');
insert into peca (valor,nome,quantidade_em_estoque) values ('400','Direção','20');
insert into peca (valor,nome,quantidade_em_estoque) values ('50','Óleo','300');
truncate revisao;
insert into revisao (preco,modelo_id,quilometragem) values ('32','1','5000');
truncate revisao_x_peca;
insert into revisao_x_peca (revisao_id,peca_id,quantidade) values ('1','1','2');
insert into revisao_x_peca (revisao_id,peca_id,quantidade) values ('1','3','1');
insert into revisao_x_peca (revisao_id,peca_id,quantidade) values ('1','2','4');
truncate teste;
insert into teste (id,client_id) values ('1','23');
truncate tipo_de_servico;
insert into tipo_de_servico (nome,preco,duracao) values ('tirar amaços','799.99','450');
insert into tipo_de_servico (nome,preco,duracao) values ('pintura','299.99','300');
insert into tipo_de_servico (nome,preco,duracao) values ('restauração','2499.99','1200');
insert into tipo_de_servico (nome,preco,duracao) values ('troca de oleo','49.99','30');
insert into tipo_de_servico (nome,preco,duracao) values ('Conserto de parachoque','400','240');
insert into tipo_de_servico (nome,preco,duracao) values ('Conserto de motor','1200','600');
insert into tipo_de_servico (nome,preco,duracao) values ('Troca de embreagem','500','240');
truncate usuario;
insert into usuario (email,senha,nome,telefone,endereco,permissao) values ('cliente@usp.br','1234','Pedro Martinez','12345678','Av Luciano Gualberto, 123','0');
insert into usuario (email,senha,nome,telefone,endereco,permissao) values ('atendente@usp.br','1234','Filipe Arena','12345678','Av Luciano Gualberto, 123','1');
insert into usuario (email,senha,nome,telefone,endereco,permissao) values ('tecnico@usp.br','1234','Felipe Cardoso','12345678','Av Luciano Gualberto, 123','2');
insert into usuario (email,senha,nome,telefone,endereco,permissao,especialidade_id) values ('mecanico@usp.br','1234','Zé Generico','12345678','Av Luciano Gualberto, 123','3','1');
insert into usuario (email,senha,nome,telefone,endereco,permissao,especialidade_id) values ('mecanico2@usp.br','1234','Mayer Levy','12345678','Av Luciano Gualberto, 123','3','2');
insert into usuario (email,senha,nome,telefone,endereco,permissao,especialidade_id) values ('mecanic3@usp.br','1234','André Amaral','12345678','Av Luciano Gualberto, 123','3','1');
insert into usuario (email,senha,nome,telefone,endereco,permissao,especialidade_id) values ('mecanico4@usp.br','1234','Joao Batista','12345678','Av Luciano Gualberto, 123','3','2');
insert into usuario (email,senha,nome,telefone,endereco,permissao) values ('administrador@usp.br','1234','Eduardo Levy','12345678','Av Luciano Gualberto, 123','4');
set foreign_key_checks = 1;
commit;
