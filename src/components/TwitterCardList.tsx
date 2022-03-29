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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TweetData } from "../Types";
import Grid from "@mui/material/Grid";
import TwitterCard from "./TwitterCard";

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
    tweetDataList: TweetData[];
};

const TwitterCardList:React.VFC<Props>  = React.memo(({ tweetDataList }) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div
            className="CardList"
            style={
                {
                    display: 'flex',
                    justifyContent: "space-around",
                    flexWrap: "wrap"
                }
            }
        >
            <Grid container spacing={3}>
            {tweetDataList.map((tweetData: any, index: number) => 
                <Grid item key={tweetData.id} xs={12} md={6} lg={4}>
                    <TwitterCard
                        tweetData={tweetData}
                        expanded={expanded}
                        handleExpandClick={handleExpandClick} />
                </Grid>
            )
            }
            </Grid>    
        </div>

    )
});

export default TwitterCardList;
