package com.dlopez.test.springbackend.services;

import java.util.List;
import java.util.Optional;

import com.dlopez.test.springbackend.models.ClientDto;
import com.dlopez.test.springbackend.models.entities.Client;

public interface ClientService {
    
    List<Client> findAll();

    Optional<Client> findById(Long id);

    Client save(Client user);

    Optional<Client> update(ClientDto user, Long id);

    void remove(Long id);

}
