package io.unicamp.fiscais.dao.rowmapper;

import io.unicamp.fiscais.model.Localizacao;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

@Component
public class LocalizacaoRowMapper implements RowMapper<Localizacao> {
    @Override
    public Localizacao mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Localizacao(
                rs.getString("id"),
                rs.getString("nome")
        );
    }
}
