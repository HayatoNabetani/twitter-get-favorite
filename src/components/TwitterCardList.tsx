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

const TwitterCardList:React.VFC<Props>  = ({ tweetDataList }) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div
            className="aa"
            style={
                {
                    display: 'flex',
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                }
            }
        >
            {tweetDataList.map((tweetData:any,index:number) => 
                <Card sx={{ width : "345px", margin : "8px" }} key={tweetData.id}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={ tweetData.avatar_url }/>
                        }
                        title={ tweetData.name }
                        subheader={ tweetData.screen_id }
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={ tweetData.media }
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            { tweetData.content }
                        </Typography>
                    </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph variant="caption">
                        作成日:{ tweetData.create_at }
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロワー数:{ tweetData.follower_count }
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロー数:{ tweetData.follow_count }
                        </Typography>
                        <Typography paragraph variant="caption">
                        いいね:{ tweetData.like_count }
                        </Typography>
                        <Typography paragraph variant="caption">
                        リツイート:{ tweetData.retweet_count }
                        </Typography>
                    </CardContent>
                    </Collapse>
                </Card>
            )
            }
        </div>

    )
};

export default TwitterCardList;
