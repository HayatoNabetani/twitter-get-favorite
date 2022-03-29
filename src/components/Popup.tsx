import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TweetData } from "../Types";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Link from "@mui/material/Link";

type Props = {
    tweetData: TweetData;
};
const Popup:React.VFC<Props> = ({tweetData}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
            <ReadMoreIcon />詳細
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => handleClose()}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Typography
                paragraph
                variant="body2"
                style={{ margin: "0", padding: "8px" }}
            >
                作成日：{tweetData.created_at}
            </Typography>
            <Typography
            paragraph
            variant="body2"
            style={{ margin: "0", padding: "8px" }}
            >
                フォロワー数：{tweetData.follower_count}
            </Typography>
            <Typography
            paragraph
            variant="body2"
            style={{ margin: "0", padding: "8px" }}
            >
                フォロー数：{tweetData.follow_count}
            </Typography>
            <Typography
            paragraph
            variant="body2"
            style={{ margin: "0", padding: "8px" }}
            >
                いいね：{tweetData.like_count}
            </Typography>
            <Typography
            paragraph
            variant="body2"
            style={{ margin: "0", padding: "8px" }}
            >
                リツイート：{tweetData.retweet_count}
            </Typography>
            <Typography
            paragraph
            variant="body2"
            style={{ margin: "0", padding: "8px" }}
            >
                <Link
                variant="body2"
                href={"https://twitter.com/" + tweetData.screen_id + "/status/" + tweetData.tweet_id}
                target="_blank"
                    >
                該当ツイートへ行く
                </Link>
            </Typography>

        </Popover>
        </div>
    );
}

export default Popup;