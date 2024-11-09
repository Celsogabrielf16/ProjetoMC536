CREATE TABLE obra(
     id CHAR(36) NOT NULL PRIMARY KEY,
     id_localizacao CHAR(36) NOT NULL,
     cnpj_empresa CHAR(14) NOT NULL,
     data_inicio DATE NOT NULL,
     data_previsao DATE NOT NULL,
     data_conclusao DATE,
     orcamento NUMERIC(10,2) NOT NULL,
     nome VARCHAR(50) NOT NULL,
     descricao VARCHAR(300),
     tipo VARCHAR(20) NOT NULL,
     status VARCHAR(20) NOT NULL,
     FOREIGN KEY (cnpj_empresa) REFERENCES empresa(CNPJ),
     FOREIGN KEY (id_localizacao) REFERENCES localizacao(id)
);