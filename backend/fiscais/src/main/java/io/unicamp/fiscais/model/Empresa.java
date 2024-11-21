package io.unicamp.fiscais.model;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Builder
@AllArgsConstructor
@Getter
@Data
public class Empresa {
    @NotNull
    private String cnpj;

    @NotNull
    private String nome;

    @NotNull
    private String email;

    @NotNull
    private String senha;
}
