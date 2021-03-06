import React, { useState, useEffect } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import TwitterCardList from "./TwitterCardList";
import TwitterTableList from "./TwitterTableList";
import { TweetData } from "../Types";

import axios from "axios";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
    }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    }));


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

////////////////////////////////////////////////////////////////
// SearchBox
////////////////////////////////////////////////////////////////
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "auto",
    },
}));


const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0,0),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

////////////////////////////////////////////////////////////////
// SearchButton
////////////////////////////////////////////////////////////////
const SearchStartButtonWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
}));

////////////////////////////////////////////////////////////////
// FormWrapper
////////////////////////////////////////////////////////////////
const SideFormWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
}));

const FavoriteList: React.VFC = () => {
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(true);
    const [value, setValue] = useState<string>("card");
    const [screenName, setScreenName] = useState<string>("");
    const [tweetDataList, setTweetDataList] = useState<TweetData[]>([]);
    const [error, setError] = useState<string>("");
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const onChangeScreenNameHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setScreenName((event.target as HTMLInputElement).value);
    };

    ////////////////////////////////////////////////////////////////
    // Twitter Api
    ////////////////////////////////////////////////////////////////
    const getFavoriteTweetHandler = () => {
        if (screenName !== "") {
            twitterAPI(screenName, "0")
                .then((res: any) => {
                    const newTweetDataList = JSON.parse(res.body);
                    setError("");
                    // setTweetDataList([...tweetDataList, ...newTweetDataList]);
                    setTweetDataList([...newTweetDataList]);
                    setScreenName("");
                }).catch((e:any) => {
                    setError("?????????????????????????????????????????????????????????????????????????????????????????????");
                });
        } else {
            setError("?????????????????????????????????????????????????????????");
        }
    }

    const twitterAPI = (screen_name: string, max_id: string) => {
        let endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/handler?screen_name=${screen_name}&max_id=${max_id}`;
        return new Promise((resolve, reject) => {
            axios
                .get(endpoint)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
            });
        });
    }

    ////////////////////////////////////////////////////////////////
    // useEffect
    ////////////////////////////////////////////////////////////////
    useEffect(() => {
        setTweetDataList([...tweetDataList]);
    },[value])

    return (
    <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Twitter???????????????
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                ) : (
                    <ChevronRightIcon />
                )}
                </IconButton>
            </DrawerHeader>
            <Typography variant="caption" style={{ textAlign: "center" }} >
                @??????????????????????????????????????????
            </Typography>
            <List>
                <ListItem>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="hogehoge"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => onChangeScreenNameHandle(e)}
                        />
                    </Search>
                </ListItem>      
            </List>
            <Divider />
            <SearchStartButtonWrapper>
                <Button
                    variant="contained"
                    size="medium"
                    style={{ display: "block", textAlign: "center" }}
                    onClick={() => getFavoriteTweetHandler()}
                >
                    ??????
                </Button>
            </SearchStartButtonWrapper>
            <SideFormWrapper>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">????????????</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                    <FormControlLabel value="card" control={<Radio />} label="Card" />
                    <FormControlLabel value="table" control={<Radio />} label="Table" />
                    </RadioGroup>
                </FormControl>
            </SideFormWrapper>
        </Drawer>
        <Main open={open}>
            <DrawerHeader />
                {error === "" ?  value === "card" ? (
                    <TwitterCardList tweetDataList={tweetDataList} />
                ) : (
                    <TwitterTableList tweetDataList={tweetDataList} />
                )
                :(
                    <p>{error}</p>
                )
                }
        </Main>
    </Box>
    );
};

export default FavoriteList;
