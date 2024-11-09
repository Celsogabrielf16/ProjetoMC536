CREATE TABLE atualizacao(
    id CHAR(36) NOT NULL PRIMARY KEY,
    id_obra CHAR(36) NOT NULL,
    cnpj_empresa CHAR(14) NOT NULL,
    data DATE NOT NULL,
    gasto_planejado NUMERIC(10,2) NOT NULL,
    gasto_acumulado NUMERIC(10,2) NOT NULL,
    porcentagem_concluida INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id),
    FOREIGN KEY (cnpj_empresa) REFERENCES empresa(CNPJ)
);