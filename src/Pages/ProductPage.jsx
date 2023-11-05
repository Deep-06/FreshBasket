import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Products } from '../Components/Products'
import { styled } from 'styled-components'
import { HStack, VStack, Image,Text } from '@chakra-ui/react';

export const ProductPage = () => {
  return (
    <div>

    <div style={{display:"flex", justifyContent:"space-between", gap:"10px", margin:'20px'}}>
      <VStack bgColor={'whitesmoke'} p={0} borderRadius='30%'>
        <Image src='https://img.freepik.com/premium-photo/pyramid-healthy-food-front-view_23-2148256086.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph' alt='' w='70%' borderRadius='50%'/>
        <Text fontSize="xl" fontWeight="extrabold">Fruits</Text>
      </VStack>

      <VStack bgColor={'whitesmoke'} p={0} borderRadius='30%' >
        <Image src='https://img.freepik.com/free-vector/vegetables-realistic-composition-white-background-with-tomato-onion-sweet-hot-pepper-eggplant_1284-16242.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph' alt='' w='70%' borderRadius='50%'/>
        <Text fontSize="xl" fontWeight="extrabold">Vegetables</Text>
      </VStack>

      <VStack bgColor={'whitesmoke'} p={0} borderRadius='30%'>
        <Image src='https://img.freepik.com/free-vector/milk-natural-dairy-products-picnic_1284-32755.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais' alt='' w='70%' borderRadius='50%'/>
        <Text fontSize="xl" fontWeight="extrabold">Dairy</Text>
      </VStack>

      <VStack bgColor={'whitesmoke'} p={0} borderRadius='30%'>
        <Image src='https://img.freepik.com/premium-photo/assortment-fresh-baked-bread-white-transparent-background_827055-606.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais' alt='' w='70%' borderRadius='50%'/>
        <Text fontSize="xl" fontWeight="extrabold">Bakery</Text>
      </VStack>

      <VStack bgColor={'whitesmoke'} p={0} borderRadius='30%' >
        <Image src='https://img.freepik.com/free-photo/top-view-appetizing-seafood-mix-wooden-table_181624-42803.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph' alt='' w='70%' borderRadius='50%'/>
        <Text fontSize="xl" fontWeight="extrabold">Seafood</Text>
      </VStack>

      <VStack bgColor={'whitesmoke'} p={0} borderRadius='30%' >
        <Image src='https://img.freepik.com/premium-photo/raw-chicken-drumstick-spices-fly-cutting-board-copy-space_94255-3643.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais' alt='' w='70%' borderRadius='50%'/>
        <Text fontSize="xl" fontWeight="extrabold">Chicken</Text>
      </VStack>

      <VStack bgColor={'whitesmoke'} p={0} borderRadius='30%' >
        <Image src='https://img.freepik.com/premium-photo/pile-meat-with-sprig-rosemary-it-with-white-background_435599-364.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais' alt='' w='70%' borderRadius='50%'/>
        <Text fontSize="xl" fontWeight="extrabold">Mutton</Text>
      </VStack>
      <VStack bgColor={'whitesmoke'} p={0} borderRadius='30%' >
        <Image src='https://img.freepik.com/free-photo/top-view-delicious-seafood-arrangement_23-2148926757.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais' alt='' w='70%' borderRadius='50%'/>
        <Text fontSize="xl" fontWeight="extrabold">Fish</Text>
      </VStack>
    </div>

    <DIV>
    <div className='sidebar'>
    <Sidebar/>
    </div>
    <div className='product-list'>
    <Products/>
    </div>
    </DIV>
    </div>
  )
}


const DIV = styled.div`
display:flex;
align-items:flex-start;


.sidebar{
  width:15%;
}

.product-list{
  width:85%;
}


`;