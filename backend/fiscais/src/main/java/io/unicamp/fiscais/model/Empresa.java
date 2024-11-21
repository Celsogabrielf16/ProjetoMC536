package io.unicamp.fiscais.model;

import io.unicamp.fiscais.dao.EmpresaDAO;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Qualifier;

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
