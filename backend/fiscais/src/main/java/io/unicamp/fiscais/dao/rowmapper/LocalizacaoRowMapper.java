package io.unicamp.fiscais.dao.rowmapper;

import io.unicamp.fiscais.model.Localizacao;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class LocalizacaoRowMapper implements RowMapper<Localizacao> {
    @Override
    public Localizacao mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Localizacao(
                rs.getString("id"),
                rs.getString("nome")
        );
    }
}
