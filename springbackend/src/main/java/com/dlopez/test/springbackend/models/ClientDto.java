package com.dlopez.test.springbackend.models;

import java.util.HashSet;
import java.util.Set;

import com.dlopez.test.springbackend.models.entities.Address;

import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientDto {
    
    @NotBlank
    @Size(min = 3, max = 15)
    private String name;

    @NotBlank
    @Size(min = 3, max = 15)
    private String lastname;

    @NotBlank
    private String identification;

    @NotBlank
    private String phone;

    @NotEmpty
    @Email
    private String email;

    @OneToMany(
        fetch = FetchType.EAGER,
        cascade = CascadeType.ALL
    )
    private Set<Address> addresses = new HashSet<>();
}
