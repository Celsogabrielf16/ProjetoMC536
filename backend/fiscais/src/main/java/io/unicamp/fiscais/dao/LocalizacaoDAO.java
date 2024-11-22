package io.unicamp.fiscais.dao;

import io.unicamp.fiscais.controller.payload.model.LocalizacaoPayload;
import io.unicamp.fiscais.dao.rowmapper.LocalizacaoRowMapper;
import io.unicamp.fiscais.exceptions.ObjectNotFoundException;
import io.unicamp.fiscais.model.Localizacao;
import io.unicamp.fiscais.model.Obra;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.UUID;
import java.util.stream.Stream;

@Slf4j
@RequiredArgsConstructor
@Repository
public class LocalizacaoDAO {
    private final NamedParameterJdbcTemplate rwJdbcTemplate;
    private final LocalizacaoRowMapper localizacaoRowMapper;
    private final String SELECT_LOCALIZACAO_BY_ID = """
            select *
            from localizacao l
            where l.id = :id
            """;
    private final String INSERT_LOCALIZACAO = """
            insert into
            localizacao ( id, nome)
            values ( :id, :nome )
            """;

    public Localizacao insert (LocalizacaoPayload localizacao) {
        final Map<String, Object> params = Map.of(
                "id", localizacao.getId(),
                "nome", localizacao.getNome()
        );

        try {
            rwJdbcTemplate.update(INSERT_LOCALIZACAO, params);
            return new Localizacao(localizacao.getId(), localizacao.getNome());
        } catch (Exception e) {
            log.error("[POSTGRES] Failure to insert localizacao {}", localizacao.getNome());
            throw e;
        }
    }

    public Localizacao selectLocalizacaoById (String id) {
        final Map<String, Object> params = Map.of("id", id);
        try(Stream<Localizacao> localizacaoStream = rwJdbcTemplate.queryForStream(SELECT_LOCALIZACAO_BY_ID, params, localizacaoRowMapper)) {
            return localizacaoStream.findFirst().orElseThrow(ObjectNotFoundException::new);
        }
    }
}
