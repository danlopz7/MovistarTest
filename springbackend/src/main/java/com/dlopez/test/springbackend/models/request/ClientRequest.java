package com.dlopez.test.springbackend.models.request;

import java.util.List;
import java.util.Set;

import com.dlopez.test.springbackend.models.entities.Address;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientRequest {

    @NotBlank
    @Size(min = 3, max = 15)
    private String username;

    @NotBlank
    @Size(min = 3, max = 15)
    private String name;

    @NotBlank
    @Size(min = 3, max = 15)
    private String lastname;

    @NotEmpty
    @Email
    private String email;

    @NotBlank
    private String identification;

    @NotBlank
    private String phone;

    private List<Address> addresses;
}
