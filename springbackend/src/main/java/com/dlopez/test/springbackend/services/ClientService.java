package com.dlopez.test.springbackend.services;

import java.util.List;
import java.util.Optional;

import com.dlopez.test.springbackend.models.entities.Client;

public interface ClientService {
    
    List<Client> findAll();

    Optional<Client> findById(Long id);

    Client save(Client client);

    Optional<Client> update(Client client, Long id);

    void remove(Long id);

}
