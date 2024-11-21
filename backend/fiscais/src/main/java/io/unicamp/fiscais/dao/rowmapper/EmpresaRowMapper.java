package io.unicamp.fiscais.dao.rowmapper;

import io.unicamp.fiscais.model.Empresa;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EmpresaRowMapper implements RowMapper<Empresa> {
    @Override
    public Empresa mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Empresa(
                rs.getString("cnpj"),
                rs.getString("nome"),
                rs.getString("email"),
                rs.getString("senha")
        );
    }
}
