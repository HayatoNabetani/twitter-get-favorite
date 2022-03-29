import React from "react";
import { TweetData } from "../Types";
import DataTable from "./DataTable";

type Props = {
    tweetDataList: TweetData[];
};

const TwitterTableList: React.VFC<Props> = ({ tweetDataList }) => {
    return (
        <>
            <DataTable tweetDataList={ tweetDataList } />
        </>
    );
    };

export default TwitterTableList;
