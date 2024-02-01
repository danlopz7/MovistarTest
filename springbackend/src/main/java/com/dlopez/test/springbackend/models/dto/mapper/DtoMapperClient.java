package com.dlopez.test.springbackend.models.dto.mapper;

import com.dlopez.test.springbackend.models.dto.ClientDto;
import com.dlopez.test.springbackend.models.entities.Client;

public class DtoMapperClient {

    private Client client;

    private DtoMapperClient() {
    }

    public static DtoMapperClient builder() {
        return new DtoMapperClient();
    }

    public DtoMapperClient setClient(Client client) {
        this.client = client;
        return this;
    }

    public ClientDto build() {
        if (client == null) {
            throw new RuntimeException("Debe pasar el entity client!");
        }

        return new ClientDto(client.getId(), client.getUsername(), client.getName(), client.getLastname(),
                client.getEmail(), client.getPhone(), client.getIdentification(), client.getAddresses());
    }
}
