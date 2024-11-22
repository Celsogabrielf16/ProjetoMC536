package io.unicamp.fiscais.controller.payload.model;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Builder
@AllArgsConstructor
@Getter
@Data
public class EmpresaPayload {
    @NotNull
    private String cnpj;

    @NotNull
    private String nome;

    @NotNull
    private String email;

    @NotNull
    private String senha;
}
