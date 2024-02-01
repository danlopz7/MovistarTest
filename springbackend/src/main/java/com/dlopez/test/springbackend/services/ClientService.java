package com.dlopez.test.springbackend.services;

import java.util.List;
import java.util.Optional;

import com.dlopez.test.springbackend.models.dto.ClientDto;
import com.dlopez.test.springbackend.models.entities.Client;
import com.dlopez.test.springbackend.models.request.ClientRequest;

public interface ClientService {

    List<Client> findAll();

    Optional<ClientDto> findById(Long id);

    ClientDto save(Client client);

    Optional<ClientDto> update(ClientRequest client, Long id);

    void remove(Long id);

}
