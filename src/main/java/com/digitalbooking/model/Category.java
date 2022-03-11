package com.digitalbooking.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCategory;

    @Column(length = 50, nullable = false)
    private String title;

    @Column(length = 200, nullable = false)
    private String description;

    @Column(length = 300, nullable = false)
    private String urlImage;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "category")
    private List<Product> products;
}
