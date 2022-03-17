package com.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idProduct")
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProduct;

    @Column(length = 100, nullable = false)
    private String name;

    @Column(length = 300, nullable = false)
    private String description;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    @JsonIgnoreProperties("product")
    private List<Image> images;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties("products")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    @JsonIgnoreProperties("products")
    private City city;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "product_characteristic")
    @JsonIgnoreProperties("products")
    private List<Characteristic> characteristics;

}
