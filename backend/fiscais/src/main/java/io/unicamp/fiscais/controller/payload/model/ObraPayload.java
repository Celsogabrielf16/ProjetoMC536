package io.unicamp.fiscais.controller.payload.model;

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
public class ObraPayload {
    @NotNull
    private String id;

    @NotNull
    private final String id_localizacao;

    @NotNull
    private final Date data_inicio;

    @NotNull
    private final Date data_previsao;

    private final Date data_conclusao;

    @NotNull
    private final float orcamento;

    @NotNull
    private final String nome;

    private final String descricao;

    @NotNull
    private final String tipo;

    @NotNull
    private final String status;
}
