import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { TweetData } from "../Types";
import Popup from "./Popup";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
    }));

type Props = {
    tweetData: TweetData;
    expanded: boolean;
    handleExpandClick : any
};
const handleOpenNewTab = () => {
    console.log("test")
}

const TwitterCard: React.VFC<Props> = ({ tweetData, expanded, handleExpandClick }) => {
    return (
        <Card>
        <CardHeader
            avatar={
            <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={tweetData.avatar_url}
            />
            }
            action={
                <Popup tweetData={ tweetData }/>
            }
            title={tweetData.name}
            subheader={tweetData.screen_id}
            style={{height: "100px"}}
        />
        <CardMedia
            component={tweetData.type == "photo" ? "img" : "iframe"}
            height="194"
            image={
            tweetData.media !== "" && tweetData.media.includes("mp4")
                ? tweetData.media
                : "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_ピクト-760x460.png"
            }
            alt="img"
        />
        <CardContent style={{ height: "160px"}}>
            <Typography variant="body2" color="text.secondary">
            {tweetData.content}
            </Typography>
        </CardContent>
        </Card>
    );
};

export default TwitterCard