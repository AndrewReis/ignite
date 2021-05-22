import dynamic from 'next/dynamic';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';

import { Header } from '../components/Header/index';
import { SideBar } from '../components/Sidebar/index';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },

  // dataLabels: {
  //   enabled: false
  // },

  tooltip: {
    enabled: false
  },

  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z'
    ]
  },

}

const series = [
  { name: 'series001', data: [100, 50, 9, 60, 20, 90] }
]


export default function Dashboard() {
  return (
    <Flex flexDirection='column' h='100vh' >
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6' >
        <SideBar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start' >
          <Box p={['6', '8']} pb={['6', '8']} bg='gray.800' borderRadius={8} >
            <Text fontSize='lg' mb='4' >Incritos da semana</Text>
            <Chart options={options} series={series} height={180} type='area' />
          </Box>
          <Box p={['6', '8']} pb={['6', '8']} bg='gray.800' borderRadius={8} >
            <Text fontSize='lg' mb='' >Taxa de abertura</Text>
            <Chart options={options} series={series} height={180} type='area' />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
