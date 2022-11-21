import React, { ReactFragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import {
  AppBar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import CustomDrawer from './drawer'
import { useSort } from 'context/sortMethods'
import { OptionsSort } from 'utility/sortOptions'

type Props = {
  children: ReactFragment
  title: string
  description: string
}

const navItems = [
  { path: 'Generalidades', link: '/' },
  { path: 'Funcionamiento', link: '/animation' },
  { path: 'Ejecución', link: '/analytics' },
  { path: 'Generar datos', link: '/generateArrays' }
]

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

const MainLayout = ({ children, title, description }: Props): JSX.Element => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [select, setSelect] = useState('shell')
  const handleChange = (e: SelectChangeEvent) => setSelect(e.target.value)

  const { state, dispatch } = useSort()

  useEffect(() => {
    if (select === 'shell')
      dispatch({ type: 'setMethod', payload: OptionsSort[select] })
    if (select === 'quick')
      dispatch({ type: 'setMethod', payload: OptionsSort[select] })
    if (select === 'bubble')
      dispatch({ type: 'setMethod', payload: OptionsSort[select] })
  }, [dispatch, select])

  return (
    <div>
      <Head>
        <title>{`Analisis de algoritmos | ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <AppBar component="nav" sx={{display: 'flex', flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {navItems.map((item) => (
                  <Link href={item.link} key={item.path}>
                    <Button sx={{ color: '#fff', textTransform: 'initial' }}>
                      {item.path}
                    </Button>
                  </Link>
                ))}
                <FormControl sx={{ m: 1, minWidth: 100, color: "white", borderColor: "white"}} color="secondary" size="small">
                  <InputLabel id="method-select" sx={{color: "white"}}>Método</InputLabel> 
                  <Select
                    value={select}
                    onChange={handleChange}
                    labelId="method-select"
                    autoWidth
                    sx={{color: "white"}}
                    label="Método"
                  >
                    <MenuItem value="shell">Shellsort</MenuItem>
                    <MenuItem value="bubble">Bubblesort</MenuItem>
                    <MenuItem value="quick">Quicksort</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <CustomDrawer
              navItems={navItems}
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
            />
          </Box>
          <Box sx={{ py: 8, width: '100%' }}>{children}</Box>
        </Box>
      </motion.main>
    </div>
  )
}

export default MainLayout
