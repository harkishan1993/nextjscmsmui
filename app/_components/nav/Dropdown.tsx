import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { Box, Button, Typography, alpha } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Iconify from '../Iconify';
import {menuData, MenuItemType} from './data'

const RecurciveFunct = memo(({ prop, activeSubMenu, setActiveSubMenu, activeMenu, setActiveMenu }: { prop: MenuItemType, activeSubMenu: number | null, setActiveSubMenu: (id: number | null) => void, activeMenu: number | null, setActiveMenu: (id: number | null) => void }) => {
  const refLi = useRef<HTMLLIElement | null>(null);
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    (!prop.children || prop.children.length === 0) && setActiveMenu(null)
    setActiveSubMenu(activeSubMenu === prop.id ? null : prop.id);
  }, [activeSubMenu, prop.id, setActiveSubMenu, setActiveMenu, prop.children]);

  let width: number = refLi.current?.getBoundingClientRect().width || 0

  useEffect(() => {
    if (refLi.current) {
      const rect = refLi.current.getBoundingClientRect();
      const availableSpaceRight = window.innerWidth - rect.right;
      const availableSpaceLeft = rect.left;
      if (availableSpaceRight < 200 && availableSpaceLeft > 200) {
        setPosition('left');
      } else {
        setPosition('right');
      }
    }
  }, [activeSubMenu]);

  if (!prop.children) {
    return (
      <Box component={"li"} position={'relative'}>
        <Button
          endIcon={(!!prop.children) && <Iconify
            icon={'uil:angle-right-b'}
            sx={{
              transform: `${activeSubMenu === prop.id && !!prop.children ? "rotate(90deg)" : "rotate(0deg)"}`
            }}
          />}
          fullWidth
          size='small'
          sx={{
            borderRadius: 0,
            justifyContent: "start",
            paddingLeft : 1.5,
            paddingRight : 1,
            color:(theme)=>theme.palette.text.secondary,
            ":hover":{
              backgroundColor: (theme) => {
                return alpha(theme.palette.action.hover, theme.palette.action.hoverOpacity)
              }
            }
          }}
        >
          {prop.name}
        </Button>
      </Box>
    );
  }

  return (
    <Box
      component={"li"}
      position={'relative'}
      ref={refLi}
      sx={
        {
          cursor: "pointer"
        }
      }
    >
      <Button
        onClick={handleClick}
        endIcon={(!!prop.children) && <Iconify
          icon={'uil:angle-right-b'}
          sx={{
            transform: `${activeSubMenu === prop.id && !!prop.children ? "rotate(90deg)" : "rotate(0deg)"}`
          }}
        />}
        fullWidth
        size='small'
        sx={{
          borderRadius: 0,
          paddingLeft : 1.5,
          paddingRight : 1,
          justifyContent: "space-between",
          color:(theme)=>theme.palette.text.secondary,
          ":hover":{
            backgroundColor: (theme) => {
              return alpha(theme.palette.action.hover, theme.palette.action.hoverOpacity)
            }
          }
        }}
      >
        {prop.name}
      </Button>
      <AnimatePresence>
        {
          activeSubMenu === prop.id && (
            <Box
              component={motion.ul}
              position={'absolute'}
              left={position === "right" ? width + 30 : -(width + 62)}
              top={4}
              p={2}
              width={200}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              exit={{ x: -10, transition: { duration: 0.2 } }}
              borderRadius={(theme) => `${theme.shape.borderRadius}px`}
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                boxShadow: (theme) => theme.shadows[1],
                ":after": {
                  content: "''",
                  width: '30px',
                  height: '4px',
                  position: 'absolute',
                  backgroundColor: (theme) => theme.palette.background.paper,
                  top: 4,
                  left: position === "left" ? 190 : -20
                }
              }}
            >
              {prop.children.map((val) => (
                <RecurciveFunct key={val.id} prop={val} activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
              ))}
            </Box>
          )
        }
      </AnimatePresence>
    </Box>
  );
});

RecurciveFunct.displayName = 'recursiveFun'

const MainMenuFunct = memo(({ prop, activeMenu, setActiveMenu }: { prop: MenuItemType, activeMenu: number | null, setActiveMenu: (id: number | null) => void }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [wh, setWh] = useState<number | null>(0);
  const refLi = useRef<HTMLUListElement | null>(null);
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const refTitle = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    if (refLi.current) {
      let hw: number = (window.innerWidth - (refTitle?.current?.getBoundingClientRect()?.left || 0))
      const rect = refLi.current.getBoundingClientRect();
      const availableSpaceRight = window.innerWidth - rect.right;
      if (availableSpaceRight < 20) {
        setPosition('left');
      } else {
        setPosition('right');
      }
      setWh(hw)
    }

  }, [activeMenu]);


  const handleClickTag = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setActiveMenu(activeMenu === prop.id ? null : prop.id);
    setActiveSubMenu(null); // Close all submenus when the main menu item is clicked
  }, [activeMenu, prop.id, setActiveSubMenu, setActiveMenu]);

  return (
    <Box component={"li"}
      ref={refTitle}
      onClick={handleClickTag}
    >
      <Button
        endIcon={(!!prop.children) && <Iconify
          icon={'uil:angle-right-b'}
          sx={{
            transform: `${activeMenu === prop.id && prop.children?.length !== 0 ? "rotate(90deg)" : "rotate(0deg)"}`
          }}
        />}
        size='small'
        fullWidth
        sx={{
          borderRadius: 0,
          paddingLeft : 1.5,
          paddingRight : 1,
          color:(theme)=>theme.palette.text.secondary,
          ":hover":{
            backgroundColor: (theme) => {
              return alpha(theme.palette.action.hover, theme.palette.action.hoverOpacity)
            }
          }
        }}
      >
        <Typography variant='subtitle1'>{prop.name}</Typography>
      </Button>
      <AnimatePresence>
        {activeMenu === prop.id && (!!prop.children) && (
          <Box
            component={motion.ul}
            position={'absolute'}
            top={60}
            right={position === "left" ? 30 : ''}
            width={200}
            display={'flex'}
            flexDirection={'column'}
            key="modal"
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10, transition: { duration: 0.2 } }}
            p={2}
            ref={refLi}
            borderRadius={(theme) => `${theme.shape.borderRadius}px`}
            sx={{
              backgroundColor: (theme) => theme.palette.background.paper,
              boxShadow: (theme) => theme.shadows[1],
              ":after": {
                content: "''",
                width: '4px',
                height: '16px',
                position: 'absolute',
                backgroundColor: (theme) => theme.palette.background.paper,
                top: -16,
                left: position === "left" ? -Math.abs(wh as number) + 245 : ''
              }
            }}
          >
            {prop.children?.map((val) => (
              <RecurciveFunct key={val.id} prop={val} activeMenu={activeMenu} setActiveMenu={setActiveMenu} activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} />
            ))}
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
});
MainMenuFunct.displayName = 'mainMenu'
const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  return (
    <Box component={'nav'} textTransform={'capitalize'}>
      <Box component={'ul'} display={'flex'} gap={1} >
        {menuData.map((val) => (
          <MainMenuFunct key={val.id} prop={val} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
