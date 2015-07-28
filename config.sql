drop database if exists autocar;
create database autocar;
use autocar;
CREATE TABLE atendimento(id int(11) auto_increment, horario datetime, automovel_id int(11), primary key (id));
CREATE TABLE automovel(id int(11) auto_increment, cliente_id int(11), placa varchar(10), renavan varchar(50), modelo_id int(11), ano int(4) null, quilometragem int(10) null, primary key (id));
CREATE TABLE equipe(id int(11) auto_increment, nome varchar(100), especialidade_id int(11), id_func1 int(11), id_func2 int(11), primary key (id));
CREATE TABLE especialidade(id int(11) auto_increment, nome varchar(32), primary key (id));
CREATE TABLE horario_atendimento(id int(11) auto_increment, horario datetime, disponivel bool, primary key (id));
CREATE TABLE modelo_carro(id int(11) auto_increment, marca varchar(40), modelo varchar(40), primary key (id));
CREATE TABLE ordem_de_servico(id int(11) auto_increment, equipe_id int(11), automovel_id int(11), data_emissao datetime, data_conclusao datetime, horario datetime, preco decimal(6,2), tipo int(1) not null default 0, revisao_id int(11) null, status int(1), descricao varchar(2047), primary key (id));
CREATE TABLE os_x_peca(os_id int(11), peca_id int(11), quantidade int(11), primary key (os_id, peca_id));
CREATE TABLE os_x_tipo_de_servico(os_id int(11), tipo_id int(11), primary key (os_id, tipo_id));
CREATE TABLE peca(id int(11) auto_increment, valor decimal(6,2), nome varchar(100), quantidade_em_estoque int(10) default 0, primary key (id));
CREATE TABLE revisao(id int(11) auto_increment, preco decimal(10,2), modelo_id int(11) not null, quilometragem int(10) default 0, primary key (id));
CREATE TABLE revisao_x_peca(revisao_id int(11), peca_id int(11), quantidade int(5) default 1, primary key (revisao_id, peca_id));
CREATE TABLE teste(id int (11), client_id int (11), primary key (id));
CREATE TABLE tipo_de_servico(id int(11) auto_increment, nome varchar(50), preco decimal(6,2), duracao int(11), primary key (id));
CREATE TABLE usuario(id int(11) auto_increment, email varchar(255) unique not null, senha varchar(255) not null, nome varchar(255) not null, telefone varchar(255), endereco varchar(255), permissao int(1) not null default 0, especialidade_id int(11) null, primary key (id));
ALTER TABLE atendimento ADD INDEX (automovel_id) ,ADD FOREIGN KEY (automovel_id) REFERENCES automovel(id) ON DELETE CASCADE;
ALTER TABLE automovel ADD INDEX (cliente_id) ,ADD FOREIGN KEY (cliente_id) REFERENCES usuario(id) ON DELETE CASCADE,ADD INDEX (modelo_id) ,ADD FOREIGN KEY (modelo_id) REFERENCES modelo_carro(id) ON DELETE CASCADE;
ALTER TABLE equipe ADD INDEX (especialidade_id) ,ADD FOREIGN KEY (especialidade_id) REFERENCES especialidade(id) ON DELETE CASCADE,ADD INDEX (id_func1) ,ADD FOREIGN KEY (id_func1) REFERENCES usuario(id) ON DELETE CASCADE,ADD INDEX (id_func2) ,ADD FOREIGN KEY (id_func2) REFERENCES usuario(id) ON DELETE CASCADE;
ALTER TABLE ordem_de_servico ADD INDEX (equipe_id) ,ADD FOREIGN KEY (equipe_id) REFERENCES equipe(id) ON DELETE CASCADE,ADD INDEX (automovel_id) ,ADD FOREIGN KEY (automovel_id) REFERENCES automovel(id) ON DELETE CASCADE,ADD INDEX (revisao_id) ,ADD FOREIGN KEY (revisao_id) REFERENCES revisao(id) ON DELETE CASCADE;
ALTER TABLE os_x_peca ADD INDEX (os_id) ,ADD FOREIGN KEY (os_id) REFERENCES ordem_de_servico(id) ON DELETE CASCADE,ADD INDEX (peca_id) ,ADD FOREIGN KEY (peca_id) REFERENCES peca(id) ON DELETE CASCADE;
ALTER TABLE os_x_tipo_de_servico ADD INDEX (os_id) ,ADD FOREIGN KEY (os_id) REFERENCES ordem_de_servico(id) ON DELETE CASCADE,ADD INDEX (tipo_id) ,ADD FOREIGN KEY (tipo_id) REFERENCES tipo_de_servico(id) ON DELETE CASCADE;
ALTER TABLE revisao ADD INDEX (modelo_id) ,ADD FOREIGN KEY (modelo_id) REFERENCES modelo_carro(id) ON DELETE CASCADE;
ALTER TABLE revisao_x_peca ADD INDEX (revisao_id) ,ADD FOREIGN KEY (revisao_id) REFERENCES revisao(id) ON DELETE CASCADE,ADD INDEX (peca_id) ,ADD FOREIGN KEY (peca_id) REFERENCES peca(id) ON DELETE CASCADE;
ALTER TABLE usuario ADD INDEX (especialidade_id) ,ADD FOREIGN KEY (especialidade_id) REFERENCES especialidade(id) ON DELETE CASCADE;
