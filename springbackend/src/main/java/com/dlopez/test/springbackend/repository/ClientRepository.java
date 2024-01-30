package com.dlopez.test.springbackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.dlopez.test.springbackend.models.entities.Client;

public interface ClientRepository extends CrudRepository<Client, Long>{
    
}
