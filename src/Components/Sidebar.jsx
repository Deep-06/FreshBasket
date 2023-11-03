import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { VStack, Text } from '@chakra-ui/react';
export const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [category, setCategory] = useState(searchParams.getAll("category") || []);
    const [order, setOrder] = useState(searchParams.get("order") || "");

    const handleCategory = (e) => {
        const { value } = e.target;
        let newCategory = [...category];

        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el !== value)
        } else {
            newCategory.push(value);
        }
        setCategory(newCategory);

    };

    const handleOrder = (e) => {
        const { value } = e.target;
        setOrder(value);
    }

    useEffect(() => {
        let params = {
            category,
        };
        order && (params.order = order);

        setSearchParams(params);

    }, [category, order])

    return (
        <VStack>
            <Text fontSize='2xl'>Filter by Category</Text>
            <div>
                <input type="checkbox" value={"fruit"}
                    onChange={handleCategory} checked={category.includes("fruit")}
                />
                <label >Fruits</label>
            </div>
            <div>
                <input type="checkbox" value={"vegetable"}
                    onChange={handleCategory} checked={category.includes("vegetable")}
                />
                <label >Vegetables</label>
            </div>
            <div>
                <input type="checkbox" value={"dairy"}
                    onChange={handleCategory} checked={category.includes("dairy")}
                />
                <label >Dairy Products</label>
            </div>

            <Text fontSize='2xl'>Sort by price</Text>
            <VStack onChange={handleOrder}>
                <input type="radio" name="order" value={"asc"}
                    defaultChecked={order === "asc"}
                />
                <label >Low to High</label>


                <input type="radio" name="order" value={"desc"}
                    defaultChecked={order === "desc"}
                />
                <label >High to Low</label>

                <input type="radio" name="order" value={""}
                    defaultChecked={order === ""}
                />
                <label >Reset</label>
            </VStack>
        </VStack>

    )
}
