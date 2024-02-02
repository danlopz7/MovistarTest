package com.dlopez.test.springbackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dlopez.test.springbackend.models.dto.ClientDto;
import com.dlopez.test.springbackend.models.dto.mapper.DtoMapperClient;
import com.dlopez.test.springbackend.models.entities.Address;
import com.dlopez.test.springbackend.models.entities.Client;
import com.dlopez.test.springbackend.models.request.ClientRequest;
import com.dlopez.test.springbackend.repository.ClientRepository;

@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Client> findAll() {
        return (List<Client>) clientRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<ClientDto> findById(Long id) {
        return clientRepository.findById(id).map(c -> DtoMapperClient.builder().setClient(c).build());
    }

    @Override
    @Transactional
    public ClientDto save(Client client) {
        for (Address address : client.getAddresses()) {
            address.setClient(client);
        }

        return DtoMapperClient.builder().setClient(clientRepository.save(client)).build();
    }

    @Override
    @Transactional
    public Optional<ClientDto> update(ClientRequest client, Long id) {
        Optional<Client> o = clientRepository.findById(id);
        Client clientOptional = null;

        if (o.isPresent()) {
            System.out.println("im in");
            Client clientDb = o.orElseThrow();
            clientDb.setUsername(client.getUsername());
            clientDb.setName(client.getName());
            clientDb.setLastname(client.getLastname());
            clientDb.setEmail(client.getEmail());
            clientDb.setPhone(client.getPhone());
            clientDb.setIdentification(client.getIdentification());

            updateAddresses(clientDb, client.getAddresses());

            clientOptional = clientRepository.save(clientDb);
        }

        return Optional.ofNullable(DtoMapperClient.builder().setClient(clientOptional).build());
    }

    @Override
    @Transactional
    public void remove(Long id) {
        clientRepository.deleteById(id);
    }

    private void updateAddresses(Client clientDb, List<Address> newAddresses) {

        // Eliminar direcciones que ya no están presentes
        clientDb.getAddresses().removeIf(address -> !newAddresses.contains(address));

        // Actualizar o agregar nuevas direcciones
        if (newAddresses != null) {
            for (Address newAddress : newAddresses) {
                if (!newAddress.getStreet().trim().isEmpty() && !newAddress.getNumber().trim().isEmpty()) {
                    if (!clientDb.getAddresses().contains(newAddress)) {
                        newAddress.setClient(clientDb);
                        clientDb.getAddresses().add(newAddress);
                    }
                }
            }
        }
    }
}
