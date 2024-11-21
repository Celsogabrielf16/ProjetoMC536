package io.unicamp.fiscais.dao.rowmapper;

import io.unicamp.fiscais.model.Atualizacao;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AtualizacaoRowMapper implements RowMapper<Atualizacao> {
    @Override
    public Atualizacao mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Atualizacao(
                rs.getString("id"),
                rs.getString("id_obra"),
                rs.getString("cnpj_empresa"),
                rs.getDate("data"),
                rs.getFloat("gasto_planejado"),
                rs.getFloat("gasto_acumulado"),
                rs.getInt("porcentagem_concluida")
        );
    }
}
