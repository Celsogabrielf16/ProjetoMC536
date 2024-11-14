package io.unicamp.fiscais.config;

import io.unicamp.fiscais.dao.ObraDAO;
import io.unicamp.fiscais.dao.rowmapper.ObraRowMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

@Configuration
public class ServiceConfig {
    @Bean
    public ObraDAO obraDAO(@Qualifier("rwJdbcTemplate") NamedParameterJdbcTemplate jdbcTemplate) {
        return new ObraDAO(null, jdbcTemplate, new ObraRowMapper());
    }
}
