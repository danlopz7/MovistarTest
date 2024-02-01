/* package com.dlopez.test.springbackend.config;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;

public class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {

        //Authentication authentication = SecurityContext.getContext().getAuthentication();

        //if (authentication == null || !authentication.isAuthenticated()) {
        //    return null;
        //}

        //return Optional.of(authentication.getName().toUpperCase()); 

        return Optional.of("ROLE_USER");
    }
    
} */
