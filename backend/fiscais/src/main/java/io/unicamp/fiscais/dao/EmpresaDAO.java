package io.unicamp.fiscais.dao;

import io.unicamp.fiscais.dao.rowmapper.EmpresaRowMapper;
import io.unicamp.fiscais.exceptions.ObjectNotFoundException;
import io.unicamp.fiscais.model.Empresa;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.Map;
import java.util.stream.Stream;

@Slf4j
@RequiredArgsConstructor
public class EmpresaDAO {
    private final NamedParameterJdbcTemplate rwJdbcTemplate;
    private final EmpresaRowMapper empresaRowMapper;
    private final String SELECT_EMPRESA_BY_CNPJ = """
            select *
            from empresa e
            where e.cnpj = :cnpj
            """;
    private final String SELECT_EMPRESA_BY_EMAIL = """
            select *
            from empresa e
            where e.email = :email
            """;
    private final String INSERT_EMPRESA = """ 
            insert into
            empresa ( cnpj, nome, email, senha )
            values ( :cnpj, :nome, :email, :senha )
            """;

    public void insert (Empresa empresa) {
        final Map<String, Object> params = Map.of(
                "cnpj", empresa.getCnpj(),
                "nome", empresa.getNome(),
                "email", empresa.getEmail(),
                "senha", empresa.getSenha()
        );

        try {
            rwJdbcTemplate.update(INSERT_EMPRESA, params);
        } catch (Exception e) {
            log.error("[POSTGRES] Failure to insert obra {}", empresa.getCnpj());
        }
    }

    public Empresa selectEmpresaByCnpj(String cnpj) {
        final Map<String, Object> params = Map.of("cnpj", cnpj);
        try(Stream<Empresa> empresaStream = rwJdbcTemplate.queryForStream(SELECT_EMPRESA_BY_CNPJ, params, empresaRowMapper)) {
            return empresaStream.findFirst().orElseThrow(ObjectNotFoundException::new);
        }
    }
    public Empresa selectEmpresaByEmail(String email) {
        final Map<String, Object> params = Map.of("email", email);
        try(Stream<Empresa> empresaStream = rwJdbcTemplate.queryForStream(SELECT_EMPRESA_BY_EMAIL, params, empresaRowMapper)) {
            return empresaStream.findFirst().orElseThrow(ObjectNotFoundException::new);
        }
    }

    public boolean isSenhaCorreta(String email, String senha) {
        return selectEmpresaByEmail(email).getSenha().equals(senha);
    }
}
