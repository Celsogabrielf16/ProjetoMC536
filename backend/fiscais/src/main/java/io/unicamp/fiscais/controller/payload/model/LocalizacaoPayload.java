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
public class LocalizacaoPayload {
    @NotNull
    private String id;

    private String nome;
}
