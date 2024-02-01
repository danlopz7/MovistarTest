package com.dlopez.test.springbackend.models.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.dlopez.test.springbackend.models.auditable.Auditable;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "clients")
@Getter
@Setter
public class Client extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min = 3, max = 15)
    @Column(unique = true)
    private String username;

    @NotBlank
    @Size(min = 3, max = 15)
    private String name;

    @NotBlank
    @Size(min = 3, max = 15)
    private String lastname;

    @NotEmpty
    @Email
    @Column(unique = true)
    private String email;

    @NotBlank
    @Column(unique = true)
    private String phone;

    @NotBlank
    @Column(unique = true)
    private String identification;

    //@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<Address> addresses = new HashSet<>();

    /*
     * @ManyToMany
     * 
     * @JoinTable(
     * name = "users_roles",
     * joinColumns = @JoinColumn(name = "client_id"),
     * inverseJoinColumns = @JoinColumn(name = "address_id"),
     * uniqueConstraints = { @UniqueConstraint(columnNames = {"client_id",
     * "address_id"})})
     * private List<Address> addresses;
     */

}
