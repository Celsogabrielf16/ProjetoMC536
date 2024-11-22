package io.unicamp.fiscais.dao;

import io.unicamp.fiscais.controller.payload.model.AtualizacaoPayload;
import io.unicamp.fiscais.dao.rowmapper.AtualizacaoRowMapper;
import io.unicamp.fiscais.exceptions.ObjectNotFoundException;
import io.unicamp.fiscais.model.Atualizacao;
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
public class AtualizacaoDAO {
    private final NamedParameterJdbcTemplate rwJdbcTemplate;
    private final AtualizacaoRowMapper atualizacaoRowMapper;
    private final String SELECT_ATUALIZACAO_BY_ID = """
            select *
            from atualizacao a
            where a.id = :id
            """;
    private final String INSERT_ATUALIZACAO = """ 
            insert into
            atualizacao ( id, id_obra, cnpj_empresa,  data, gasto_planejado, gasto_acumulado, porcentagem_concluida )
            values ( :id, :id_obra, :cnpj_empresa,  :data, :gasto_planejado, :gasto_acumulado, :porcentagem_concluida )
            """;

    public Atualizacao insert (AtualizacaoPayload atualizacao) {
        final Map<String, Object> params = Map.of(
                "id", atualizacao.getId(),
                "id_obra", atualizacao.getId_obra(),
                "cnpj_empresa", atualizacao.getCnpj_empresa(),
                "data", atualizacao.getData(),
                "gasto_planejado", atualizacao.getGasto_planejado(),
                "gasto_acumulado", atualizacao.getGasto_acumulado(),
                "porcentagem_concluida", atualizacao.getPorcentagem_concluida()
        );

        try {
            rwJdbcTemplate.update(INSERT_ATUALIZACAO, params);
            return new Atualizacao(
                atualizacao.getId(),
                atualizacao.getId_obra(),
                atualizacao.getCnpj_empresa(),
                atualizacao.getData(),
                atualizacao.getGasto_planejado(),
                atualizacao.getGasto_acumulado(),
                atualizacao.getPorcentagem_concluida()
            );
        } catch (Exception e) {
            log.error("[POSTGRES] Failure to insert atualizacao {}", atualizacao.getCnpj_empresa());
            throw e;
        }
    }

    public Atualizacao selectAtualizacaoById(String id) {
        final Map<String, Object> params = Map.of("id", id);
        try(Stream<Atualizacao> atualizacaoStream = rwJdbcTemplate.queryForStream(SELECT_ATUALIZACAO_BY_ID, params, atualizacaoRowMapper)) {
            return atualizacaoStream.findFirst().orElseThrow(ObjectNotFoundException::new);
        }
    }
}
