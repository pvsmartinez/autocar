set autocommit = 0;
set foreign_key_checks = 0;
truncate atendimento;
truncate automovel;
truncate equipe;
truncate horario_atendimento;
truncate ordem_de_servico;
truncate os_x_peca;
truncate os_x_tipo_de_servico;
truncate peca;
truncate revisao;
truncate revisao_x_peca;
truncate tipo_de_servico;
truncate usuario;
set foreign_key_checks = 1;
commit;