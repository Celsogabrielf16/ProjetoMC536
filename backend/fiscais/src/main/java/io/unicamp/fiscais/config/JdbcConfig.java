package io.unicamp.fiscais.config;

import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

@Configuration
@ConfigurationPropertiesScan
@EnableTransactionManagement
public class JdbcConfig {


    @Bean
    public DataSource roDataSource() {}

    @Bean
    public NamedParameterJdbcTemplate rwJdbcTemplate(DataSource rwDataSource) {
        return new NamedParameterJdbcTemplate(rwDataSource);
    }

    @Bean
    public PlatformTransactionManager platformTransactionManager(DataSource rwDataSource) {
        return new DataSourceTransactionManager(rwDataSource);
    }

}
