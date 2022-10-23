import styled from "styled-components"
import { TABLE_COLOR } from "../../constants/colors"

export const TableContainer = styled.div`
    width: 50%;
`

export const TableRow = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
`

export const TableInfo = styled.p`
    width: 100%;
    min-width: 80px;
    padding: 8px 4px 8px 16px;
    border: 1px solid ${TABLE_COLOR};
    color: ${TABLE_COLOR};
`

export const TableTitle = styled.h3`
    width: 100%;
    min-width: 80px;
    padding: 8px 4px 8px 16px;
    border: 1px solid ${TABLE_COLOR};
    color: ${TABLE_COLOR};
`

export const TableIndex = styled.p`
    min-width: 32px;
    padding: 8px;
    border: 1px solid ${TABLE_COLOR};
    color: ${TABLE_COLOR};
`