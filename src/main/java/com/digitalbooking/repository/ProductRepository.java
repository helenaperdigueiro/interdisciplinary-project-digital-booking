package com.digitalbooking.repository;

import com.digitalbooking.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("select p from Product p where p.city.name = :name")
    List<Product> findByCity(String name);

    @Query("select p from Product p where p.category.title = :title")
    List<Product> findByCategory(String title);

    @Query("select p from Product p left join fetch p.reservations r where p.city.name = :name " +
            "and (:start not between r.startDate and r.endDate or r.startDate is null) " +
            "and (r.startDate not between :start and :end or r.startDate is null)")
    List<Product> findByCityDateAvailable(String name, Date start, Date end);
}
