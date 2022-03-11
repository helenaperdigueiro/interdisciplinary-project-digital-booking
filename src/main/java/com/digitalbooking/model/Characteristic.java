package com.digitalbooking.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
public class Characteristic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCharacteristic;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 300, nullable = false)
    private String url;
}