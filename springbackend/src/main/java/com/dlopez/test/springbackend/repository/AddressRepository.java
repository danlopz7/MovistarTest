package com.dlopez.test.springbackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.dlopez.test.springbackend.models.entities.Address;

public interface AddressRepository extends CrudRepository<Address, Long>{
    
}
