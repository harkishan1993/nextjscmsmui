"use client"
import React, { useState, Ref, use, useRef } from 'react';
import {
    Alert,
    alpha,
    Avatar,
    Badge,
    Box,
    Button,
    Chip,
    Divider,
    IconButton,
    InputBase,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import Iconify from '../Iconify';
import { AnimatePresence, m, motion } from 'framer-motion';
import { useSelector } from '@/app/_redux/store';
import { RootState } from '@/app/_redux/rootReducer';
import Navbar from './Dropdown';
import Layout from '../LayoutNav';
import MenuReuse from '../Menu';
import Dropdownside from './Dropdownside';
import { menuData, MenuItemType } from './data';
function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: "32px",
            height: "32px",
            fontSize: "14px"
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
let flterredArray: MenuItemType[] = []
function filterMenuData(menuData: MenuItemType[]) {
    for (let i = 0; i < menuData?.length; i++) {
        if (!!menuData[i]?.children) {
            filterMenuData(menuData[i].children as MenuItemType[])
        }
        flterredArray.push(menuData[i])
    }
    return flterredArray
}

function Nav({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const { themeStretch, themeLayout } = useSelector((state: RootState) => state.theme)
    const handleNavSlider = () => {
        setOpen(prev => !prev);
    };
    const handelClickSvg = (e: any) => {

    }

    const scroolRef: Ref<HTMLDivElement> = React.useRef(null)

    const handleNavScroll = (val: "left" | "right") => {
        if (val === "left") {
            scroolRef.current?.scrollBy({ behavior: "smooth", left: scroolRef.current.clientWidth / 2 })
        } else {
            scroolRef.current?.scrollBy({ behavior: "smooth", left: -(scroolRef.current.clientWidth / 2) })
        }
    }
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorElNoti, setAnchorElNoti] = React.useState<null | HTMLElement>(null);
    const [anchorElSearch, setAnchorElSearch] = React.useState<null | HTMLElement>(null);
    const [searchInput, setSearchInput] = React.useState<string | null>("");
    const [searchItem, setSearchItem] = React.useState<MenuItemType[]>([])

    const openMenu = Boolean(anchorEl);
    const openMenuNoti = Boolean(anchorElNoti);
    const openMenuSearch = Boolean(anchorElSearch);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickNotification = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNoti(event.currentTarget);
    };

    React.useEffect(() => {
        flterredArray = []
        let getfiltered = filterMenuData(menuData);
        getfiltered = getfiltered.filter((val) => {
                return val.name.toLowerCase().includes((searchInput as string).toLowerCase())
        })
        setSearchItem(getfiltered)
    }, [searchInput])

    const handleCloseNotti = () => {
        setAnchorElNoti(null);

    };
    const handleCloseSearch = () => {
        setAnchorElSearch(null);

    };
    const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElSearch(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setSearchInput(e.target.value)
    }
    return (
        <>
            <Box
                width="100%"
                height="100vh"
                position={'relative'}
                overflow={'hidden'}
                sx={{
                    backgroundColor: (theme) => theme.palette.background.default
                }}
            >
                <Stack flexDirection={themeLayout !== 'vertical' ? "row" : "column"}>
                    {themeLayout !== 'vertical' && <Stack component={motion.div}
                        height="100vh"
                        position={themeStretch ? "absolute" : "relative"}
                        sx={{
                            boxShadow: (theme) => `1.5px 1.5px 3px ${alpha(
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[800]
                                    : theme.palette.common.black,
                                0.16
                            )}`,
                            backgroundColor: (theme) => alpha(theme.palette.background.paper, 1),
                            marginRight: '2px',
                            zIndex: 2
                        }}
                        initial={false}
                        animate={{
                            width: open ? themeStretch ? "259px" : "320px" : themeStretch ? "0px" : "80px"
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                            ease: "circInOut"
                        }}
                        onClick={handelClickSvg}
                    >
                        {
                            themeStretch && <Box
                                position={'inherit'}
                                width={60}
                                height={60}
                                right={-60}
                                sx={{
                                    backgroundColor: "inherit",
                                    boxShadow: "inherit",
                                }}>
                                <IconButton onClick={handleNavSlider} sx={{
                                    transform: 'translate(-50%, -50%)',
                                    top: 30,
                                    left: 30
                                }}>
                                    <Iconify icon="uil:arrows-h-alt" width={30} height={30} />
                                </IconButton>

                            </Box>
                        }
                        <Stack
                            component={motion.div}
                            height={60}
                            overflow={"hidden"}
                            width={"100%"}
                            flexDirection={"row"}
                            alignItems={"center"}
                            justifyContent={"center"}

                        >
                            <Stack>
                            </Stack>
                            <AnimatePresence>
                                {
                                    open && <Stack
                                        key={0}
                                        component={motion.div}
                                        initial={{
                                            opacity: 0,
                                            visibility: "hidden"
                                        }}
                                        animate={{
                                            opacity: 1,
                                            visibility: "visible",
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.2,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            visibility: "hidden",
                                            transition: {
                                                duration: !themeStretch ? 0 : 0.5,
                                                delay: !themeStretch ? 0 : 0.2
                                            }
                                        }}

                                    >
                                        <Typography variant='h2' color={(theme) => theme.palette.text.primary}>Admin</Typography>
                                    </Stack>
                                }
                                {
                                    !open && !themeStretch && <Stack
                                        key={1}
                                        component={motion.div}
                                        initial={{
                                            opacity: 0,
                                            visibility: "hidden"
                                        }}
                                        animate={{
                                            opacity: 1,
                                            visibility: "visible",
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.2,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            visibility: "hidden",
                                            transition: {
                                                delay: 0,
                                                duration: 0
                                            }
                                        }}

                                    >
                                        <Avatar>A</Avatar>
                                    </Stack>
                                }
                            </AnimatePresence>
                        </Stack>
                        <Divider />
                        <Dropdownside open={open} />
                    </Stack>

                    }
                    <Stack width="100%">
                        <Stack
                            height={60}
                            width="100%"
                            flexDirection="row"
                            alignItems="center"
                            px={1}
                            sx={{
                                boxShadow: (theme) => `0px 1.5px 3px ${alpha(
                                    theme.palette.mode === "light"
                                        ? theme.palette.grey[800]
                                        : theme.palette.common.black,
                                    0.16
                                )}`,
                                backgroundColor: (theme) => theme.palette.background.paper
                            }}
                        >

                            {!themeStretch && themeLayout !== 'vertical' && <IconButton onClick={handleNavSlider}>
                                <Iconify icon="uil:arrows-h-alt" width={30} height={30} />
                            </IconButton>}
                            <Layout>
                                <Box sx={{ width: "100%", height: "100%" }}>
                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                        {
                                            themeLayout === 'vertical' && <Stack>
                                                <Typography variant='h2' color={(theme) => theme.palette.text.primary}>Admin</Typography>
                                            </Stack>
                                        }
                                        <Stack></Stack>
                                        <Stack direction={"row"} gap={2} alignItems={"center"}>
                                            <IconButton onClick={handleSearch}>
                                                <Iconify icon={'uil:search'} />
                                            </IconButton>
                                            <MenuReuse
                                                anchorEl={anchorElSearch}
                                                openMenu={openMenuSearch}
                                                handleClose={handleCloseSearch}
                                                top={4.5}
                                            >
                                                <Stack sx={{ paddingX: 2, paddingBottom: 1, gap: 0.5 }} width={'300px'} >
                                                    <Paper
                                                        component="form"
                                                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                                                    >
                                                        <Iconify icon={'uil:search'} sx={{ pl: 1, fontSize: '26px' }} />
                                                        <InputBase
                                                            autoFocus={true}
                                                            onKeyDown={(e) => {
                                                                e.stopPropagation();
                                                            }}
                                                            onChange={handleSearchInput}
                                                            sx={{ ml: 1, p: 1, flex: 1 }}
                                                            value={searchInput}
                                                            placeholder="Search..."
                                                            inputProps={{ 'aria-label': 'search...' }}
                                                        />
                                                    </Paper>
                                                    <Stack
                                                        flexDirection={"row"}
                                                        alignItems={"center"}
                                                        sx={{
                                                            width: "100%",
                                                            height: "100%",
                                                        }}>
                                                        {searchInput && <Typography
                                                            sx={{
                                                                marginY: 1,
                                                                wordWrap: "break-word",
                                                                wordBreak: "break-word"
                                                            }}
                                                            borderLeft={3}
                                                            borderColor={(theme) => theme.palette.primary.main}
                                                            paddingLeft={1}
                                                            variant="overline"
                                                        >
                                                            Search result of {searchInput}
                                                        </Typography>}
                                                    </Stack>

                                                    {
                                                      searchInput &&  searchItem.map((val, index) => {
                                                            return <Paper elevation={3} sx={{ p: 1, my: 0.2 }} key={index}>{val.name}</Paper>
                                                        })
                                                    }

                                                </Stack>
                                            </MenuReuse>
                                            <IconButton onClick={handleClickNotification}>
                                                <Badge
                                                    badgeContent={100}
                                                    sx={{
                                                        "& .MuiBadge-badge": {
                                                            color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                                            backgroundColor: "primary.main"
                                                        }
                                                    }}
                                                >
                                                    <Iconify icon={'uil:bell'} />
                                                </Badge>
                                            </IconButton>
                                            <MenuReuse
                                                anchorEl={anchorElNoti}
                                                handleClose={handleCloseNotti}
                                                openMenu={openMenuNoti}
                                                top={4.5}
                                                left={0}
                                            >
                                                <Stack sx={{ paddingX: 2, paddingBottom: 1, gap: 0.5 }}>
                                                    <Stack
                                                        flexDirection={"row"}
                                                        justifyContent={"space-between"}
                                                        alignItems={"center"}
                                                        marginBottom={1}
                                                    >
                                                        <Typography color={(theme) => theme.palette.text.primary}>Notifications</Typography>
                                                        <Chip size='small'
                                                            label="4 Unread"
                                                            sx={{
                                                                color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                                                backgroundColor: (theme) => theme.palette.primary.main
                                                            }} />
                                                    </Stack>
                                                    <Divider />
                                                    <Alert severity="warning" onClose={() => { }}>
                                                        <Typography>
                                                            This Alert displays the default close icon.
                                                        </Typography>
                                                    </Alert>
                                                    <Alert severity="success" onClose={() => { }}>
                                                        <Typography>
                                                            This Alert displays the default close icon.
                                                        </Typography>
                                                    </Alert>
                                                    <Alert severity="error" onClose={() => { }}>
                                                        <Typography>
                                                            This Alert displays the default close icon.
                                                        </Typography>
                                                    </Alert>
                                                    <Alert severity="info" onClose={() => { }}>
                                                        <Typography>
                                                            This Alert displays the default close icon.
                                                        </Typography>
                                                    </Alert>
                                                    <Divider />
                                                    <Stack
                                                        flexDirection={"row"}
                                                        justifyContent={"center"}
                                                        alignItems={"center"}
                                                        marginTop={1}
                                                    >
                                                        <Button fullWidth variant='outlined'>View All</Button>
                                                    </Stack>

                                                </Stack>
                                            </MenuReuse>
                                            <IconButton onClick={handleClick}>
                                                <Avatar {...stringAvatar('Kent Dodds')} />
                                            </IconButton>
                                            <MenuReuse
                                                anchorEl={anchorEl}
                                                handleClose={handleClose}
                                                openMenu={openMenu}
                                                top={1}
                                                left={-5}
                                                clickClose={true}
                                            >
                                                <Stack sx={{ paddingX: 2, paddingBottom: 1, gap: 1 }}>
                                                    <Typography>Profile</Typography>
                                                    <Divider />
                                                    <Typography>Logout</Typography>
                                                </Stack>
                                            </MenuReuse>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Layout>
                        </Stack>
                        {themeLayout === 'vertical' && <Stack
                            width="100%"
                            py={0.5}
                            position={'relative'}
                            sx={{
                                backgroundColor: (theme) => theme.palette.background.paper,
                                boxShadow: (theme) => `0px 1.5px 3px ${alpha(
                                    theme.palette.mode === "light"
                                        ? theme.palette.grey[800]
                                        : theme.palette.common.black,
                                    0.16
                                )}`,
                                borderTop: (theme) => {
                                    return `1px solid ${theme.palette.divider}`
                                }
                            }}
                        >
                            <Stack
                                component={'nav'}
                                width={"100%"}
                                height={"100%"}
                                px={2}
                                flexDirection={"row"}
                            >
                                <IconButton
                                    onClick={() => handleNavScroll("left")}
                                    sx={{
                                        backgroundColor: (theme) => theme.palette.mode == "light" ? "rgba(225, 225, 225, 0.5)" : theme.palette.background.default
                                    }}
                                >
                                    <Iconify icon="uil:angle-left-b" width={22} height={22} />
                                </IconButton>
                                <Stack
                                    width={'100%'}
                                    sx={{
                                        overflowX: 'auto',
                                        '&::-webkit-scrollbar': {
                                            display: "none"
                                        },
                                        ':-ms-overflow-style': "none"
                                        ,
                                        'scrollbarWidth': 'none'
                                    }}
                                    display={"flex"}
                                    flexDirection={'row'}
                                    alignItems={"center"}
                                    ref={scroolRef}
                                >
                                    <Box
                                        component={'div'}
                                        display={"flex"}
                                        flexDirection={"row"}
                                        gap={4}
                                        alignItems={"center"}
                                        px={1}
                                    >
                                        <Navbar />
                                    </Box>
                                </Stack>
                                <IconButton
                                    onClick={() => handleNavScroll("right")}
                                    sx={{
                                        backgroundColor: (theme) => theme.palette.mode == "light" ? "rgba(225, 225, 225, 0.5)" : theme.palette.background.default
                                    }}
                                >
                                    <Iconify icon="uil:angle-right-b" width={22} height={22} />
                                </IconButton>
                            </Stack>
                        </Stack>}
                        {children}
                    </Stack >
                </Stack >
            </Box >
        </>
    );
}

export default Nav;
