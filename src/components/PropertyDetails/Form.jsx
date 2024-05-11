import { Textarea, Image, VStack, HStack, Box, Text, Input, Button } from '@chakra-ui/react'

const Form = ({searchedHouse}) => {
  return (
    <VStack border='1px' borderColor='pink.100' boxShadow='md' px='5' py='6'>
        <HStack>
            <Image borderRadius='full' boxSize='75px' src={searchedHouse.agent.image} />
            <Box>
                <Text mb='-3px' fontWeight='extrabold' fontSize='15px'>{searchedHouse.agent.name}</Text>
                <Text style={{fontSize: '12px'}}>+{searchedHouse.agent.phone}</Text>
            </Box>
        </HStack>

        <VStack my='3px' spacing='2px'>
        <form action="mailto:ntpmcoat@email.com" method="post" enctype="text/plain">
                <Input type="text" name="Name" placeholder="Name*" required mt='3' mb='2'/>
                <Input type="email" name="Email" placeholder="Email*" required />
                <Input my='2' type="tel" name="Phone" placeholder="Phone*" required />
                <Textarea my='2' name="Message" placeholder="Message*" required size='sm'  defaultValue='Hello, I am interested in [Modern apartment]' />
                <HStack my='2'>
                    <Button w='full' px='4'>Send Message</Button>
                    <Button w={{base: 'full', md: '50%'}} variant='outline'>Call</Button>
                </HStack>
            </form>

           
   
        </VStack>
    </VStack>
  )
}

export default Form




