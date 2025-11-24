import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { VStack, Text, HStack } from '@chakra-ui/react';
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
        <VStack spacing={2} alignItems="flex-start">
            <Text fontSize='2xl'>Filter by Category</Text>
            <HStack>
                <input type="checkbox" value={"fruit"}
                    onChange={handleCategory} checked={category.includes("fruit")}
                />
                <label >Fruits</label>
            </HStack>
            <HStack>
                <input type="checkbox" value={"vegetable"}
                    onChange={handleCategory} checked={category.includes("vegetable")}
                />
                <label >Vegetables</label>
            </HStack>
            <HStack>
                <input type="checkbox" value={"dairy"}
                    onChange={handleCategory} checked={category.includes("dairy")}
                />
                <label >Dairy</label>
            </HStack>
            <HStack>
                <input type="checkbox" value={"bakery"}
                    onChange={handleCategory} checked={category.includes("bakery")}
                />
                <label >Bakery</label>
            </HStack>
            <HStack>
                <input type="checkbox" value={"seafood"}
                    onChange={handleCategory} checked={category.includes("seafood")}
                />
                <label >Seafood</label>
            </HStack>
            <HStack>
                <input type="checkbox" value={"fish"}
                    onChange={handleCategory} checked={category.includes("fish")}
                />
                <label >Fish</label>
            </HStack>
            <HStack>
                <input type="checkbox" value={"chicken"}
                    onChange={handleCategory} checked={category.includes("chicken")}
                />
                <label >Chicken</label>
            </HStack>
            <HStack>
                <input type="checkbox" value={"mutton"}
                    onChange={handleCategory} checked={category.includes("mutton")}
                />
                <label >Mutton</label>
            </HStack>
            

            <Text fontSize='2xl'>Sort by price</Text>
            <VStack onChange={handleOrder} alignItems="flex-start">
                <HStack>
                    <input type="radio" name="order" value={"asc"} 
                        defaultChecked={order === "asc"}
                    />
                    <label >Low to High</label>
                </HStack>
                <HStack>
                    <input type="radio" name="order" value={"desc"}
                        defaultChecked={order === "desc"}
                    />
                    <label >High to Low</label>
                </HStack>
                <HStack>
                    <input type="radio" name="order" value={""}
                        defaultChecked={order === ""}
                    />
                    <label >Reset</label>
                </HStack>
            </VStack>
        </VStack>

    )
}
