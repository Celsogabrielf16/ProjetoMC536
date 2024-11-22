package io.unicamp.fiscais.dao;

import io.unicamp.fiscais.controller.payload.model.ObraPayload;
import io.unicamp.fiscais.dao.rowmapper.ObraRowMapper;
import io.unicamp.fiscais.exceptions.ObjectNotFoundException;
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
public class ObraDAO {
    private final NamedParameterJdbcTemplate rwJdbcTemplate;
    private final ObraRowMapper obraRowMapper;
    private final String SELECT_OBRA_BY_ID = """
            select *
            from obra o
            where o.id = :id
            """;
    private final String INSERT_OBRA = """ 
            insert into
            obra ( id, id_localizacao, data_inicio,  data_previsao, data_conclusao, orcamento, nome, descricao, tipo, status )
            values ( :id, :order_id, :data_inicio,  :data_previsao, :data_conclusao, :orcamento, :nome, :descricao, :tipo, :status )
            """;

    public Obra insert (ObraPayload obra) {
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
            return new Obra(
                obra.getId(),
                obra.getId_localizacao(),
                obra.getData_inicio(),
                obra.getData_previsao(),
                obra.getData_conclusao(),
                obra.getOrcamento(),
                obra.getNome(),
                obra.getDescricao(),
                obra.getTipo(),
                obra.getStatus()
            );
        } catch (Exception e) {
            log.error("[POSTGRES] Failure to insert obra {}", obra.getNome());
            throw e;
        }
    }

    public Obra selectObraById(String id) {
        final Map<String, Object> params = Map.of("id", id);
        try(Stream<Obra> obraStream = rwJdbcTemplate.queryForStream(SELECT_OBRA_BY_ID, params, obraRowMapper)) {
            return obraStream.findFirst().orElseThrow(ObjectNotFoundException::new);
        }
    }
}
