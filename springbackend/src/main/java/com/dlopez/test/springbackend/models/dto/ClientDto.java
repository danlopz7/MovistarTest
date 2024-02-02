package com.dlopez.test.springbackend.models.dto;

import java.util.List;
import java.util.Set;

import com.dlopez.test.springbackend.models.entities.Address;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientDto {
    
    private Long id;
    private String username;
    private String name;
    private String lastname;
    private String email;
    private String phone;
    private String identification;
    private List<Address> addresses;

}
