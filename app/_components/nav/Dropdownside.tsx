import { Button, Stack, Typography, alpha } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MenuItemType, menuData } from './data'
import { AnimatePresence, motion } from 'framer-motion'
import Iconify from '../Iconify'

function MenuItem({ item, activeMenu, setActiveMenu, open }: { item: MenuItemType, activeMenu: null | number, setActiveMenu: (id: number | null) => void, open: boolean }) {

  const handelEvent = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveMenu(activeMenu == item.id ? null : item.id)

  }
  if (!item?.children) {
    return <Stack component={motion.li}
      whiteSpace={"nowrap"}
      width={"100%"}
      overflow={"hidden"}
      marginY={0.2}
      sx={{
        cursor: "pointer"
      }}>
      <AnimatePresence>
        <Stack
          component={motion.div}
          initial={{
            opacity: 0,
            visibility: "hidden"
          }}
          animate={{
            opacity: 1,
            visibility: "visible",
            transition: {
              duration: 0.2,
              delay: 0.2
            }
          }}
          exit={{
            opacity: 0,
            visibility: "hidden",
            transition: {
              duration: 0.2,
              delay: 0.2
            }
          }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingRight={2}
          borderRadius={1}
          paddingLeft={2}
          whiteSpace={"nowrap"}
          py={1}
          sx={{
            ":hover": {
              backgroundColor: (theme) => {
                return alpha(theme.palette.action.hover, theme.palette.action.hoverOpacity)
              }
            }
          }}
        >
          <Stack alignItems={'center'} flexDirection={'row'}>
            <Iconify icon={item.icon} height={24} />
            <Typography lineHeight={1.5} paddingLeft={item.level}>{item.name}</Typography>
          </Stack>
          <Stack></Stack>
        </Stack>
      </AnimatePresence>
    </Stack>
  }
  return (
    <Stack component={motion.li}
      overflow={"hidden"}
      sx={{
        cursor: "pointer"
      }}
      marginY={0.2}
      whiteSpace={"nowrap"}
      width={"100%"}
      onClick={handelEvent}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderRadius={1}
        py={1}
        whiteSpace={"nowrap"}
        paddingLeft={2}
        paddingRight={2}
        sx={{
          ":hover": {
            backgroundColor: (theme) => {
              return alpha(theme.palette.action.hover, theme.palette.action.hoverOpacity)
            }
          }
        }}
      >
        <Stack alignItems={'center'} flexDirection={'row'}>
          <AnimatePresence>
            <Stack
              component={motion.div}
              initial={{
                opacity: 0,
                visibility: "hidden"
              }}
              animate={{
                opacity: 1,
                visibility: "visible",
                transition: {
                  duration: 0.2,
                  delay: 0.2
                }
              }}
              exit={{
                opacity: 0,
                visibility: "hidden",
                transition: {
                  duration: 0.2,
                  delay: 0.2
                }
              }}>
              <Iconify key={0} icon={item.icon} height={24} />
            </Stack>
            {open && <Typography
              key={1}
              component={motion.p}
              initial={{
                opacity: 0,
                visibility: "hidden"
              }}
              animate={{
                opacity: 1,
                visibility: "visible",
                transition: {
                  duration: 0.2,
                  delay: 0.2
                }
              }}
              exit={{
                opacity: 0,
                visibility: "hidden",
                transition: {
                  duration: 0.2,
                  delay: 0.2
                }
              }}
              paddingLeft={item.level}
              lineHeight={1.5}
            >
              {item.name}
            </Typography>
            }
          </AnimatePresence>
        </Stack>
        {open && <AnimatePresence>
          <Stack
            component={motion.div}
            initial={{
              opacity: 0,
              visibility: "hidden"
            }}
            animate={{
              opacity: 1,
              visibility: "visible",
              transition: {
                duration: 0.2,
                delay: 0.2
              }
            }}
            exit={{
              opacity: 0,
              visibility: "hidden",
              transition: {
                duration: 0.2,
                delay: 0.2
              }
            }}
          >
            <Iconify
              icon={'uil:angle-right-b'}
              sx={{
                transform: `${activeMenu == item.id ? "rotate(90deg)" : "rotate(0deg)"}`,
                lineHeight: 1.5
              }}
            />
          </Stack>
        </AnimatePresence>}
      </Stack>
      {activeMenu == item.id && <Menu data={item.children} open={open} />}
    </Stack >
  )
}
function Menu({ data, open }: { data: MenuItemType[], open: boolean }) {
  const [activeMenu, setActiveMenu] = useState<number | null>(null)
  return (
    <Stack component={motion.ul} overflow={"hidden"} justifyContent={"center"} alignItems={"center"}>
      {
        data.map((val, index) => {
          return <MenuItem key={index} item={val} open={open} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        })
      }
    </Stack>
  )
}
function Dropdownside({ open }: { open: boolean }) {
  return (
    <Stack component={'nav'} padding={2}
      color={(theme) => theme.palette.text.secondary}>
      <Menu data={menuData} open={open} />
    </Stack>
  )
}

export default Dropdownside