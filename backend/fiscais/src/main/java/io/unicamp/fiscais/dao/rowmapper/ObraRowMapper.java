package io.unicamp.fiscais.dao.rowmapper;

import io.unicamp.fiscais.model.Obra;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

@Component
public class ObraRowMapper implements RowMapper<Obra> {
    @Override
    public Obra mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Obra(
                rs.getString("id"),
                rs.getString("id_localizacao"),
                rs.getDate("data_inicio"),
                rs.getDate("data_previsao"),
                rs.getDate("data_conclusao"),
                rs.getFloat("orcamento"),
                rs.getString("nome"),
                rs.getString("descricao"),
                rs.getString("tipo"),
                rs.getString("status")
        );
    }
}
