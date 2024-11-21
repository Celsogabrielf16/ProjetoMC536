package io.unicamp.fiscais.dao;

import io.unicamp.fiscais.dao.rowmapper.AtualizacaoRowMapper;
import io.unicamp.fiscais.exceptions.ObjectNotFoundException;
import io.unicamp.fiscais.model.Atualizacao;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.Map;
import java.util.stream.Stream;

@Slf4j
@RequiredArgsConstructor
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

    public void insert (Atualizacao atualizacao) {
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
        } catch (Exception e) {
            log.error("[POSTGRES] Failure to insert atualizacao {}", atualizacao.getId());
        }
    }

    public Atualizacao selectAtualizacaaById(String id) {
        final Map<String, Object> params = Map.of("id", id);
        try(Stream<Atualizacao> atualizacaoStream = rwJdbcTemplate.queryForStream(SELECT_ATUALIZACAO_BY_ID, params, atualizacaoRowMapper)) {
            return atualizacaoStream.findFirst().orElseThrow(ObjectNotFoundException::new);
        }
    }
}
