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
public class Localizacao {
    @NotNull
    private String id;

    @NotNull
    private String nome;
}
