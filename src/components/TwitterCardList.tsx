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

const TwitterCardList: React.FC = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return(
        <div className="aa" style={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap" }}>
                <Card sx={{ width : "345px", margin : "8px" }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://pbs.twimg.com/profile_images/1288756292840873985/SIEcQjsO_400x400.jpg" />
                        }
                        title="なべ@Web制作"
                        subheader="@nanabebe1111"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://pbs.twimg.com/media/FBfhSCRUUAIxD-o?format=png&name=900x900"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ
                        </Typography>
                    </CardContent>
                        <CardActions disableSpacing>
                            test
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
                        作成日:2022年1月24日
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロワー数:936
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロー数:901
                        </Typography>
                        <Typography paragraph variant="caption">
                        いいね:936
                        </Typography>
                        <Typography paragraph variant="caption">
                        リツイート:901
                        </Typography>
                    </CardContent>
                    </Collapse>
                </Card>
                <Card sx={{ width : "345px", margin : "8px" }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://pbs.twimg.com/profile_images/1288756292840873985/SIEcQjsO_400x400.jpg" />
                        }
                        title="なべ@Web制作"
                        subheader="@nanabebe1111"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://pbs.twimg.com/media/FBfhSCRUUAIxD-o?format=png&name=900x900"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ
                        </Typography>
                    </CardContent>
                        <CardActions disableSpacing>
                            test
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
                        作成日:2022年1月24日
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロワー数:936
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロー数:901
                        </Typography>
                        <Typography paragraph variant="caption">
                        いいね:936
                        </Typography>
                        <Typography paragraph variant="caption">
                        リツイート:901
                        </Typography>
                    </CardContent>
                    </Collapse>
                </Card>
                <Card sx={{ width : "345px", margin : "8px" }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://pbs.twimg.com/profile_images/1288756292840873985/SIEcQjsO_400x400.jpg" />
                        }
                        title="なべ@Web制作"
                        subheader="@nanabebe1111"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://pbs.twimg.com/media/FBfhSCRUUAIxD-o?format=png&name=900x900"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ
                        </Typography>
                    </CardContent>
                        <CardActions disableSpacing>
                            test
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
                        作成日:2022年1月24日
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロワー数:936
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロー数:901
                        </Typography>
                        <Typography paragraph variant="caption">
                        いいね:936
                        </Typography>
                        <Typography paragraph variant="caption">
                        リツイート:901
                        </Typography>
                    </CardContent>
                    </Collapse>
                </Card>
                <Card sx={{ width : "345px", margin : "8px" }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://pbs.twimg.com/profile_images/1288756292840873985/SIEcQjsO_400x400.jpg" />
                        }
                        title="なべ@Web制作"
                        subheader="@nanabebe1111"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://pbs.twimg.com/media/FBfhSCRUUAIxD-o?format=png&name=900x900"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ知らなんだ
                        </Typography>
                    </CardContent>
                        <CardActions disableSpacing>
                            test
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
                        作成日:2022年1月24日
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロワー数:936
                        </Typography>
                        <Typography paragraph variant="caption">
                        フォロー数:901
                        </Typography>
                        <Typography paragraph variant="caption">
                        いいね:936
                        </Typography>
                        <Typography paragraph variant="caption">
                        リツイート:901
                        </Typography>
                    </CardContent>
                    </Collapse>
                </Card>
        </div>
    )
};

export default TwitterCardList;
