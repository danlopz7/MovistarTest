package com.dlopez.test.springbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing
public class PersistenceConfig {
    
    /* @Bean
    public AuditorAware<String> auditorProvider() {
        return new AuditorAwareImpl();
    } */
} 
