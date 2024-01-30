package com.dlopez.test.springbackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dlopez.test.springbackend.models.ClientDto;
import com.dlopez.test.springbackend.models.entities.Client;
import com.dlopez.test.springbackend.repository.AddressRepository;
import com.dlopez.test.springbackend.repository.ClientRepository;

@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Client> findAll() {
        return (List<Client>) clientRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Client> findById(Long id) {
        return clientRepository.findById(id);
    }

    @Override
    @Transactional
    public Client save(Client user) {
        return null;
    }

    @Override
    @Transactional
    public Optional<Client> update(ClientDto user, Long id) {
        return null;
        
    }

    @Override
    @Transactional
    public void remove(Long id) {
        clientRepository.deleteById(id);
    }
     
}
