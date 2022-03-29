import * as React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "Id",
        width: 30,
    },
    {
        field: "avatar_url",
        headerName: "Avatar url",
        renderCell: (params: GridRenderCellParams<string>) => (
            <a href={params.value} target="_blank">{params.value}</a>
        ),
        width: 90,
    },
    {
        field: "name",
        headerName: "Screen Name",
        width: 200,
    },
    {
        field: "screen_id",
        headerName: "Screen Id",
        renderCell: (params: GridRenderCellParams<string>) => (
            <a href={"https://twitter.com/" + params.value} target="_blank">{params.value}</a>
        ),
        width: 130,
    },
    {
        field: "media",
        headerName: "Media url",
        renderCell: (params: GridRenderCellParams<string>) => (
            <a href={params.value} target="_blank">{params.value}</a>
        ),
        sortable: false,
        width: 90,
    },
    {
        field: "content",
        headerName: "ツイート",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
    },
    {
        field: "created_at",
        headerName: "投稿日",
        type: "date",
        width: 120,
    },
    {
        field: "follower_count",
        headerName: "フォロワー",
        type: "number",
        width: 90,
    },
    {
        field: "follow_count",
        headerName: "フォロー",
        type: "number",
        width: 90,
    },
    {
        field: "retweet_count",
        headerName: "リツイート",
        type: "number",
        width: 90,
    },
    {
        field: "like_count",
        headerName: "いいね",
        type: "number",
        width: 90,
    },
];

const DataTable:any = (props: any) => {
    return (
        <div style={{ height: 400, width: "100%" }}>
        <DataGrid
            rows={props.tweetDataList}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    );
}


export default DataTable;