package io.unicamp.fiscais.model;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.sql.Date;

@Builder
@AllArgsConstructor
@Getter
@Data
public class Atualizacao {
    @NotNull
    private String id;

    @NotNull
    private String id_obra;

    @NotNull
    private String cnpj_empresa;

    @NotNull
    private Date data;

    @NotNull
    private float gasto_planejado;

    @NotNull
    private float gasto_acumulado;

    @NotNull
    private int porcentagem_concluida;
}
