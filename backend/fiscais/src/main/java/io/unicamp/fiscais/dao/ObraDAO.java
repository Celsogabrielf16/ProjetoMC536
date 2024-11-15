package io.unicamp.fiscais.dao;

import io.unicamp.fiscais.dao.rowmapper.ObraRowMapper;
import io.unicamp.fiscais.exceptions.ObjectNotFoundException;
import io.unicamp.fiscais.model.Obra;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.Map;
import java.util.stream.Stream;

@Slf4j
@RequiredArgsConstructor
public class ObraDAO {
    private final NamedParameterJdbcTemplate roJdbcTemplate;
    private final NamedParameterJdbcTemplate rwJdbcTemplate;
    private final ObraRowMapper obraRowMapper;
    private final String SELECT_OBRA_BY_ID = """
            select *
            from obra o
            where o.id = :id
            """;
    private final String INSERT_OBRA = """ 
            insert into
            obras ( id, id_localizacao, data_inicio,  data_previsao, data_conclusao, orcamento, nome, descricao, tipo, status )
            values ( :id, :order_id, :data_inicio,  :data_previsao, :data_conclusao, :orcamento, :nome, :descricao, :tipo, :status )
            """;

    public void insert (Obra obra) {
        final Map<String, Object> params = Map.of(
                "id", obra.getId(),
                "id_localizacao", obra.getId_localizacao(),
                "data_inicio", obra.getData_inicio(),
                "data_previsao", obra.getData_previsao(),
                "data_conclusao", obra.getData_conclusao(),
                "orcamento", obra.getOrcamento(),
                "nome", obra.getNome(),
                "descricao", obra.getDescricao(),
                "tipo", obra.getTipo(),
                "status", obra.getStatus()
        );

        try {
            rwJdbcTemplate.update(INSERT_OBRA, params);
        } catch (Exception e) {
            log.error("[POSTGRES] Failure to insert obra {}", obra.getId());
        }
    }

    public Obra selectObraById(String id) {
        final Map<String, Object> params = Map.of("id", id);
        try(Stream<Obra> obraStream = roJdbcTemplate.queryForStream(SELECT_OBRA_BY_ID, params, obraRowMapper)) {
            return obraStream.findFirst().orElseThrow(ObjectNotFoundException::new);
        }
    }
}
