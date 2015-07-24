set autocommit = 0;
set foreign_key_checks = 0;
truncate atendimento;
insert into atendimento (horario,automovel_id) values ('2015-07-14 10:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-14 11:00:00','2');
insert into atendimento (horario,automovel_id) values ('2015-07-14 15:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-14 17:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-14 08:00:00','3');
insert into atendimento (horario,automovel_id) values ('2015-07-14 15:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-14 14:00:00','2');
insert into atendimento (horario,automovel_id) values ('2015-07-15 10:00:00','1');
insert into atendimento (horario,automovel_id) values ('2015-07-15 08:00:00','2');
truncate automovel;
insert into automovel (cliente_id,placa,renavan,modelo,ano,quilometragem) values ('0','EMD 2790','213123123','renault logan','2010','10000');
insert into automovel (cliente_id,placa,renavan,modelo,ano,quilometragem) values ('0','MBM 1234','213123123','renault logan','2011','10000');
insert into automovel (cliente_id,placa,renavan,modelo,ano,quilometragem) values ('0','VSF 0000','213123123','renault logan','2004','10000');
truncate equipe;
insert into equipe (nome,especialidade,id_func1,id_func2) values ('equipe rocket','1','3','4');
insert into equipe (nome,especialidade,id_func1,id_func2) values ('power rangers','0','5','6');
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
truncate ordem_de_servico;
insert into ordem_de_servico (equipe_id,automovel_id,data_emissao,horario,preco,tipo,status) values ('0','0','2015-07-14 11:00:00','2015-07-28 8:00:00','2000.00','0','0');
insert into ordem_de_servico (equipe_id,automovel_id,data_emissao,horario,preco,tipo,status) values ('1','1','2015-07-14 13:00:00','2015-07-29 8:00:00','1000.00','0','0');
truncate os_x_peca;
insert into os_x_peca (os_id,peca_id) values ('0','0');
insert into os_x_peca (os_id,peca_id) values ('0','1');
insert into os_x_peca (os_id,peca_id) values ('0','2');
insert into os_x_peca (os_id,peca_id) values ('0','4');
insert into os_x_peca (os_id,peca_id) values ('0','5');
insert into os_x_peca (os_id,peca_id) values ('1','2');
insert into os_x_peca (os_id,peca_id) values ('1','4');
insert into os_x_peca (os_id,peca_id) values ('0','3');
insert into os_x_peca (os_id,peca_id) values ('1','0');
insert into os_x_peca (os_id,peca_id) values ('1','1');
truncate os_x_tipo_de_servico;
insert into os_x_tipo_de_servico (os_id,tipo_id) values ('0','0');
insert into os_x_tipo_de_servico (os_id,tipo_id) values ('0','2');
insert into os_x_tipo_de_servico (os_id,tipo_id) values ('1','1');
insert into os_x_tipo_de_servico (os_id,tipo_id) values ('1','3');
truncate peca;
insert into peca (valor,nome,quantidade_em_estoque) values ('1.5','Fuzível','30');
insert into peca (valor,nome,quantidade_em_estoque) values ('300','Pneu','32');
insert into peca (valor,nome,quantidade_em_estoque) values ('450','Vidro','32');
insert into peca (valor,nome,quantidade_em_estoque) values ('600','Parachoque','8');
insert into peca (valor,nome,quantidade_em_estoque) values ('400','Direção','20');
insert into peca (valor,nome,quantidade_em_estoque) values ('50','Óleo','300');
truncate revisao;
truncate revisao_x_peca;
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
insert into usuario (email,senha,nome,telefone,endereco,permissao) values ('cliente@usp.br','1234','cliente','12345678','Av Luciano Gualberto, 123','0');
insert into usuario (email,senha,nome,telefone,endereco,permissao) values ('atendente@usp.br','1234','atendente','12345678','Av Luciano Gualberto, 123','1');
insert into usuario (email,senha,nome,telefone,endereco,permissao) values ('tecnico@usp.br','1234','tecnico','12345678','Av Luciano Gualberto, 123','2');
insert into usuario (email,senha,nome,telefone,endereco,permissao,especialidade) values ('mecanico@usp.br','1234','mecanico','12345678','Av Luciano Gualberto, 123','3','1');
insert into usuario (email,senha,nome,telefone,endereco,permissao,especialidade) values ('mecanico2@usp.br','1234','mecanico2','12345678','Av Luciano Gualberto, 123','3','2');
insert into usuario (email,senha,nome,telefone,endereco,permissao,especialidade) values ('mecanic3@usp.br','1234','mecanico3','12345678','Av Luciano Gualberto, 123','3','1');
insert into usuario (email,senha,nome,telefone,endereco,permissao,especialidade) values ('mecanico4@usp.br','1234','mecanico4','12345678','Av Luciano Gualberto, 123','3','2');
insert into usuario (email,senha,nome,telefone,endereco,permissao) values ('administrador@usp.br','1234','administrador','12345678','Av Luciano Gualberto, 123','4');
set foreign_key_checks = 1;
commit;
