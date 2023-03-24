import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Input,
  SimpleGrid,
  Stack,
  flexbox,
  Container,
  Center,
} from '@chakra-ui/react';
import React, { useEffect, useState , } from 'react';
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [search, setsearch] = useState('chicken');
  const [resultarr, setresultarr] = useState([]);
  const naviagte =useNavigate();

  useEffect(() => {
    // preventDefault();
    Getserch();
  }, [search]);

  // console.log(res);

  const Changesearch = e => {
    console.log(e.target.value);
    setsearch(e.target.value);
    // console.log(res);
  };

  const Getserch = async () => {
    // event.preventDefault();
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    // console.log(res.data.meals)
    // const finalres=(res.data.meals);
    setresultarr(res.data.meals);
    console.log(res.data.meals);
    // console.log(res.data);
    console.log(resultarr);
  };

  return (
    <div>
      <Stack>
        <HStack p={50} display={'Flex'} justifyContent={'center'}>
          <FormControl width={1000}>
            <FormLabel fontWeight={700}>
              Enter the Name of Food Recipe
            </FormLabel>
            <Flex>
              <Input
                border="2px"
                borderColor="Blue.600"
                type="text"
                value={search}
                onChange={Changesearch}
              />
              <Button colorScheme="blue" onClick={Getserch}>
                search
              </Button>
            </Flex>
          </FormControl>
        </HStack>
      </Stack>
      <div>
          <Center fontSize={32} fontWeight={700}>
            Recipes wow
          </Center>
        </div>
       
         <Flex display={'flex'} flexWrap={'wrap'}>

         
        {resultarr == null ? (
          <Flex display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Heading color={'red.800'}> Sorry Not Found Try other Word </Heading>
          </Flex>
        ) : (
          resultarr.map((meals, idMeal) => (
            <div ClassName="col-4">
              {
                <Box padding={6}>
                  <Image
                    src={meals.strMealThumb}
                    alt="Image of recipe"
                    height={200}
                    width={200}
                    borderRadius="lg"
                  />
                  <Heading size="md" padding={2}>
                    {' '}
                    {meals.strMeal}
                  </Heading>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    justifyContent="center"
                    key={meals.idMeal}
                    onClick={ () => { naviagte(`/${meals.idMeal}`)}}
                     
                  >
                    More Details
                  </Button>
                </Box>
              }
            </div>
          ))
        )}

        </Flex>

      </div>
    
  );
};

export default Home;
